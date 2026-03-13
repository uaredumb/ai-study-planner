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

export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
}

export async function onRequestPost(context) {
  const { request, env } = context;

  const apiKey = env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return jsonResponse(
      { error: "Missing OPENROUTER_API_KEY in Cloudflare Pages environment variables." },
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

  const textModel = env.OPENROUTER_MODEL || "stepfun/step-3.5-flash";
  const visionModel = env.OPENROUTER_VISION_MODEL || "openrouter/healer-alpha";
  const model = requestMode === "vision" || requestMode === "ocr" ? visionModel : textModel;
  const textMaxTokens = Number(env.OPENROUTER_TEXT_MAX_TOKENS || 1200);
  const visionMaxTokens = Number(env.OPENROUTER_VISION_MAX_TOKENS || 900);
  const maxTokens = requestMode === "vision" || requestMode === "ocr" ? visionMaxTokens : textMaxTokens;
  const siteUrl = env.OPENROUTER_SITE_URL || "https://ai-study-planner.pages.dev";
  const appName = env.OPENROUTER_APP_NAME || "Lumi Study";

  const systemPrompt =
    "You are a study assistant. Return strict JSON only with keys cleanNotes, studyTasks, studyOrder. " +
    "Each key must be an array of concise strings. " +
    "Write clear factual study content, not vague advice. " +
    "For cleanNotes, prefer one concrete fact per line with a clear subject and explanation, often in 'Term: explanation' format when natural. " +
    "Avoid filler like 'remember', 'important thing to know', 'know this', or generic reminders.";

  const userPrompt = [
    "Convert the notes into structured study help.",
    "Make cleanNotes easy to turn into flashcards and quiz questions.",
    "Each cleanNotes line should state one concrete concept, definition, process, cause/effect, comparison, or example.",
    "Return valid JSON only in this exact shape:",
    '{ "cleanNotes": ["..."], "studyTasks": ["..."], "studyOrder": ["..."] }',
    "Notes:",
    notes
  ].join("\n");

  const userVisionText = [
    "Read the uploaded image of handwritten or typed notes.",
    "Transcribe and normalize the content, then convert it into structured study help.",
    "If a part of the image is unreadable, skip that part instead of guessing.",
    "Make cleanNotes easy to turn into flashcards and quiz questions.",
    "Each cleanNotes line should state one concrete concept, definition, process, cause/effect, comparison, or example.",
    "Return valid JSON only in this exact shape:",
    '{ "cleanNotes": ["..."], "studyTasks": ["..."], "studyOrder": ["..."] }'
  ].join("\n");

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
