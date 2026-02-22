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

  const notes = typeof payload?.notes === "string" ? payload.notes.trim() : "";
  if (!notes) {
    return jsonResponse({ error: "Missing 'notes' in request body." }, 400);
  }

  const model = env.OPENROUTER_MODEL || "openai/gpt-4o-mini";
  const siteUrl = env.OPENROUTER_SITE_URL || "https://ai-study-planner.pages.dev";
  const appName = env.OPENROUTER_APP_NAME || "AI Study Buddy";

  const systemPrompt =
    "You are a study assistant. Return strict JSON only with keys cleanNotes, studyTasks, studyOrder. " +
    "Each key must be an array of concise strings.";

  const userPrompt = [
    "Convert the notes into structured study help.",
    "Return valid JSON only in this exact shape:",
    '{ "cleanNotes": ["..."], "studyTasks": ["..."], "studyOrder": ["..."] }',
    "Notes:",
    notes
  ].join("\n");

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
        { role: "user", content: userPrompt }
      ],
      temperature: 0.3
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    return jsonResponse(
      { error: `OpenRouter request failed (${response.status}). ${errorText.slice(0, 300)}` },
      502
    );
  }

  const result = await response.json();
  const content = result?.choices?.[0]?.message?.content || "";
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
