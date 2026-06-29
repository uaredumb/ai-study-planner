const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type"
};

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      ...CORS_HEADERS,
      "Content-Type": "application/json; charset=utf-8"
    }
  });
}

function extractJsonObject(text) {
  if (typeof text !== "string") {
    return null;
  }

  const fenced = text.match(/```json\s*([\s\S]*?)```/i);
  const candidate = fenced ? fenced[1] : text;

  try {
    return JSON.parse(candidate);
  } catch (_error) {
    const start = candidate.indexOf("{");
    const end = candidate.lastIndexOf("}");
    if (start === -1 || end === -1 || end <= start) {
      return null;
    }
    try {
      return JSON.parse(candidate.slice(start, end + 1));
    } catch (_parseError) {
      return null;
    }
  }
}

function sanitizeStringArray(value) {
  if (!Array.isArray(value)) {
    return [];
  }
  return value
    .filter((item) => typeof item === "string")
    .map((item) => item.trim())
    .filter((item) => item.length > 0);
}

function extractDeltaContent(sseDataLine) {
  if (!sseDataLine || sseDataLine === "[DONE]") {
    return "";
  }

  try {
    const parsed = JSON.parse(sseDataLine);
    return parsed?.choices?.[0]?.delta?.content || "";
  } catch (_error) {
    return "";
  }
}

// ---------------------------------------------------------------------------
// Per-plan generation rate limiting.
// Limits mirror the Clerk plans. Enforcement is INERT until a KV namespace is
// bound as `RATE_LIMIT`, and FAILS OPEN on any error — it can only ever return
// a 429 when KV is bound and a verified requester is genuinely over their cap.
// Cloudflare setup: Pages > Settings > Functions > KV namespace bindings >
// add binding name `RATE_LIMIT`. (Optional: set CLERK_ISSUER, else it is read
// from the verified token's `iss`.)
// ---------------------------------------------------------------------------
const PLAN_LIMITS = {
  free: { day: 3, month: 20 },
  pro: { day: 25, month: 400 },
  power: { day: 60, month: 1000 }
};

function b64urlToStr(s) {
  s = s.replace(/-/g, "+").replace(/_/g, "/");
  while (s.length % 4) s += "=";
  return atob(s);
}
function b64urlToBytes(s) {
  const bin = b64urlToStr(s);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i += 1) bytes[i] = bin.charCodeAt(i);
  return bytes;
}

const JWKS_CACHE = new Map(); // iss -> { keys, exp } (per-isolate)
async function getJwks(iss) {
  const now = Date.now();
  const cached = JWKS_CACHE.get(iss);
  if (cached && cached.exp > now) return cached.keys;
  const url = iss.replace(/\/$/, "") + "/.well-known/jwks.json";
  const res = await fetch(url, { cf: { cacheTtl: 3600 } });
  if (!res.ok) throw new Error("JWKS fetch failed");
  const data = await res.json();
  const keys = Array.isArray(data.keys) ? data.keys : [];
  JWKS_CACHE.set(iss, { keys, exp: now + 3600 * 1000 });
  return keys;
}

// Verify a Clerk session JWT (RS256) and return its claims, or null if invalid.
async function verifyClerkJwt(token, env) {
  const parts = token.split(".");
  if (parts.length !== 3) return null;
  const header = JSON.parse(b64urlToStr(parts[0]));
  const payload = JSON.parse(b64urlToStr(parts[1]));
  const now = Math.floor(Date.now() / 1000);
  if (header.alg !== "RS256" || !header.kid) return null;
  if (payload.exp && now >= payload.exp) return null;
  if (payload.nbf && now < payload.nbf - 5) return null;
  const iss = (env && env.CLERK_ISSUER) || payload.iss;
  if (!iss) return null;
  const jwk = (await getJwks(iss)).find((k) => k.kid === header.kid);
  if (!jwk) return null;
  const key = await crypto.subtle.importKey(
    "jwk",
    { kty: jwk.kty, n: jwk.n, e: jwk.e, alg: "RS256", ext: true },
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["verify"]
  );
  const ok = await crypto.subtle.verify(
    "RSASSA-PKCS1-v1_5",
    key,
    b64urlToBytes(parts[2]),
    new TextEncoder().encode(parts[0] + "." + parts[1])
  );
  return ok ? payload : null;
}

// Identify the requester (verified user id + plan) or fall back to guest-by-IP.
async function identifyRequester(request, env) {
  const auth = request.headers.get("Authorization") || "";
  const match = auth.match(/^Bearer\s+(.+)$/i);
  if (match) {
    try {
      const claims = await verifyClerkJwt(match[1], env);
      if (claims && claims.sub) {
        // Clerk Billing puts active plans in `pla` (e.g. "u:pro"). String-match
        // is format-agnostic and safe because the JWT signature is verified.
        const pla = String(claims.pla || claims.plan || "");
        const plan = /power/i.test(pla) ? "power" : /pro/i.test(pla) ? "pro" : "free";
        return { id: "u:" + claims.sub, plan };
      }
    } catch (_error) {
      // fall through to guest
    }
  }
  const ip = request.headers.get("CF-Connecting-IP") || "anon";
  return { id: "ip:" + ip, plan: "free" };
}

function rateLimitResponse(message) {
  return jsonResponse({ error: message, code: "rate_limited" }, 429);
}

// Returns a 429 Response if over limit, otherwise null (and records the hit).
async function checkRateLimit(request, env) {
  const kv = env && env.RATE_LIMIT;
  if (!kv) return null; // not configured -> never blocks
  try {
    const { id, plan } = await identifyRequester(request, env);
    const limits = PLAN_LIMITS[plan] || PLAN_LIMITS.free;
    const iso = new Date().toISOString();
    const dayKey = `rl:${id}:d:${iso.slice(0, 10)}`;
    const monthKey = `rl:${id}:m:${iso.slice(0, 7)}`;
    const [dRaw, mRaw] = await Promise.all([kv.get(dayKey), kv.get(monthKey)]);
    const dCount = Number(dRaw || 0);
    const mCount = Number(mRaw || 0);
    if (dCount >= limits.day) {
      return rateLimitResponse(`You've reached your ${plan} plan's daily limit of ${limits.day} study packs. Try again tomorrow, or upgrade for a higher cap.`);
    }
    if (mCount >= limits.month) {
      return rateLimitResponse(`You've reached your ${plan} plan's monthly limit of ${limits.month} study packs. Upgrade for a higher cap.`);
    }
    await Promise.all([
      kv.put(dayKey, String(dCount + 1), { expirationTtl: 60 * 60 * 48 }),
      kv.put(monthKey, String(mCount + 1), { expirationTtl: 60 * 60 * 24 * 32 })
    ]);
    return null;
  } catch (_error) {
    return null; // fail open
  }
}

export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
}

export async function onRequestPost(context) {
  const { request, env } = context;

  const apiKey = env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return jsonResponse(
      {
        error:
          "Missing OPENROUTER_API_KEY. Add it to Cloudflare Pages environment variables in production, or create a local .dev.vars file from .dev.vars.example when running Pages dev."
      },
      500
    );
  }

  let payload;
  try {
    payload = await request.json();
  } catch (_error) {
    return jsonResponse({ error: "Invalid JSON body." }, 400);
  }

  const requestMode = payload?.mode === "ocr" ? "ocr" : payload?.mode === "vision" ? "vision" : "text";
  const notes = typeof payload?.notes === "string" ? payload.notes.trim() : "";
  const imageDataUrl = typeof payload?.imageDataUrl === "string" ? payload.imageDataUrl.trim() : "";
  // Optional learner preferences (grade/level + custom instructions) set in the
  // app's Settings. Sanitized + capped; ignored when absent so behavior is
  // unchanged for callers that don't send it.
  const customInstructions =
    typeof payload?.customInstructions === "string"
      ? payload.customInstructions.replace(/[\x00-\x1f\x7f]+/g, " ").replace(/\s+/g, " ").trim().slice(0, 600)
      : "";
  const shouldStream = Boolean(payload?.stream);
  if (requestMode === "text" && !notes) {
    return jsonResponse({ error: "Missing 'notes' in request body." }, 400);
  }
  if (requestMode === "vision" || requestMode === "ocr") {
    if (!imageDataUrl) {
      return jsonResponse({ error: "Missing 'imageDataUrl' in request body." }, 400);
    }
    if (!/^data:image\/[a-zA-Z0-9.+-]+;base64,/.test(imageDataUrl)) {
      return jsonResponse({ error: "Invalid image format. Use a base64 data URL." }, 400);
    }
    if (imageDataUrl.length > 12_000_000) {
      return jsonResponse({ error: "Image payload too large. Use a smaller image." }, 413);
    }
  }

  // Enforce per-plan generation caps before any model work. Skips OCR so a photo
  // study pack counts once (the follow-up text request), not twice. Inert until a
  // RATE_LIMIT KV namespace is bound; fails open on any error.
  if (requestMode !== "ocr") {
    const limited = await checkRateLimit(request, env);
    if (limited) return limited;
  }

  // AI models are hardcoded on purpose (NOT read from env vars) so a stale or wrong
  // Cloudflare env var can never override them and silently break generation again.
  // gemini-2.5-flash handles both text and vision and returns reliable JSON.
  // To change the model, edit it here.
  const textModel = "google/gemini-2.5-flash";
  const visionModel = "google/gemini-2.5-flash";
  const model = requestMode === "vision" || requestMode === "ocr" ? visionModel : textModel;
  const textMaxTokens = 2000;
  const visionMaxTokens = 1200;
  const maxTokens = requestMode === "vision" || requestMode === "ocr" ? visionMaxTokens : textMaxTokens;
  const siteUrl = env.OPENROUTER_SITE_URL || "https://ai-study-planner.pages.dev";
  const appName = env.OPENROUTER_APP_NAME || "Lumi Study";

  const systemPrompt =
    "You are a study assistant. Return strict JSON only with keys cleanNotes, studyTasks, studyOrder. " +
    "Each key must be an array of concise strings. " +
    "Write clear factual study content, not vague advice. " +
    "For cleanNotes, prefer one concrete fact per line with a clear subject and explanation, often in 'Term: explanation' format when natural. " +
    "Avoid filler like 'remember', 'important thing to know', 'know this', or generic reminders. " +
    "If the source does not contain enough readable study material, return empty arrays instead of guessing.";

  // When the user set custom instructions, ask the model to adapt tone/level —
  // but never to break the JSON shape or invent facts.
  const prefsLine = customInstructions
    ? "Learner preferences (adapt vocabulary, depth, and examples to these, but never change the required JSON shape or invent facts): " +
      customInstructions
    : "";

  const userPrompt = [
    "Convert the notes into structured study help.",
    "Make cleanNotes easy to turn into flashcards and quiz questions.",
    "Each cleanNotes line should state one concrete concept, definition, process, cause/effect, comparison, or example.",
    prefsLine,
    "Return valid JSON only in this exact shape:",
    '{ "cleanNotes": ["..."], "studyTasks": ["..."], "studyOrder": ["..."] }',
    "Notes:",
    notes
  ].filter(Boolean).join("\n");

  const userVisionText = [
    "Read the uploaded image of handwritten or typed notes.",
    "Transcribe and normalize the content, then convert it into structured study help.",
    "If a part of the image is unreadable, skip that part instead of guessing.",
    "Make cleanNotes easy to turn into flashcards and quiz questions.",
    "Each cleanNotes line should state one concrete concept, definition, process, cause/effect, comparison, or example.",
    prefsLine,
    "Return valid JSON only in this exact shape:",
    '{ "cleanNotes": ["..."], "studyTasks": ["..."], "studyOrder": ["..."] }'
  ].filter(Boolean).join("\n");

  const userOcrText = [
    "Read the uploaded image and extract only the text content.",
    "Return plain text only. Do not return JSON, markdown, or commentary.",
    "If some text is unreadable, skip it."
  ].join("\n");

  const userContent =
    requestMode === "vision" || requestMode === "ocr"
      ? [
          { type: "text", text: requestMode === "ocr" ? userOcrText : userVisionText },
          { type: "image_url", image_url: { url: imageDataUrl } }
        ]
      : userPrompt;

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "HTTP-Referer": siteUrl,
      "X-Title": appName
    },
    body: JSON.stringify({
      model,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userContent }
      ],
      temperature: 0.3,
      max_tokens: maxTokens,
      stream: shouldStream
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    const passthroughStatus = response.status >= 400 && response.status < 500 ? response.status : 502;
    return jsonResponse(
      { error: `OpenRouter request failed (${response.status}). ${errorText.slice(0, 300)}` },
      passthroughStatus
    );
  }

  if (shouldStream) {
    if (!response.body) {
      return jsonResponse({ error: "Streaming response body unavailable." }, 502);
    }

    const readable = new ReadableStream({
      async start(controller) {
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        const encoder = new TextEncoder();
        let buffer = "";

        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) {
              break;
            }

            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split("\n");
            buffer = lines.pop() || "";

            for (const line of lines) {
              const trimmed = line.trim();
              if (!trimmed.startsWith("data:")) {
                continue;
              }

              const data = trimmed.slice(5).trim();
              if (data === "[DONE]") {
                controller.close();
                return;
              }

              const delta = extractDeltaContent(data);
              if (!delta) {
                continue;
              }
              controller.enqueue(encoder.encode(delta));
            }
          }

          const trailing = buffer.trim();
          if (trailing.startsWith("data:")) {
            const data = trailing.slice(5).trim();
            if (data && data !== "[DONE]") {
              const delta = extractDeltaContent(data);
              if (delta) {
                controller.enqueue(encoder.encode(delta));
              }
            }
          }

          controller.close();
        } catch (error) {
          controller.error(error);
        } finally {
          reader.releaseLock();
        }
      }
    });

    return new Response(readable, {
      headers: {
        ...CORS_HEADERS,
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-store"
      }
    });
  }

  const result = await response.json();
  const content = result?.choices?.[0]?.message?.content || "";
  if (requestMode === "ocr") {
    return jsonResponse({ text: String(content || "").trim() });
  }
  const parsed = extractJsonObject(content);

  if (!parsed) {
    return jsonResponse(
      { error: "Model response was not valid JSON. Try again or lower model temperature." },
      502
    );
  }

  return jsonResponse({
    cleanNotes: sanitizeStringArray(parsed.cleanNotes),
    studyTasks: sanitizeStringArray(parsed.studyTasks),
    studyOrder: sanitizeStringArray(parsed.studyOrder)
  });
}
