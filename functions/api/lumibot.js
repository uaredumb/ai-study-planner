// ---------------------------------------------------------------------------
// LumiBot — the in-app study chat assistant.
//
// Unlike /api/chat (a fixed-shape study-pack GENERATOR), this is a CONVERSATIONAL
// endpoint. It answers questions about the student's notes and, when asked, edits
// them. Response is strict JSON: { reply: string, updatedNotes: string[] | null }.
//   - reply        : LumiBot's message to the student (always present).
//   - updatedNotes : when the student asked for a change, the COMPLETE new list of
//                    note lines; otherwise null.
//
// Gating note: LumiBot is a Pro feature, but the entitlement check is enforced
// CLIENT-SIDE via Clerk (window.Clerk.session.checkAuthorization) — the same way
// every other Pro feature in the app is gated. This endpoint stays lenient (like
// /api/chat) so it keeps working in local dev with no Clerk key. A server-side
// backstop can be added later by reusing chat.js's verifyClerkJwt() once the Clerk
// session `pla` claim is confirmed reliable (see lumi-clerk-billing memory).
// ---------------------------------------------------------------------------

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization"
};

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      ...CORS_HEADERS,
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store"
    }
  });
}

function extractJsonObject(text) {
  if (typeof text !== "string") return null;
  const fenced = text.match(/```json\s*([\s\S]*?)```/i);
  const candidate = fenced ? fenced[1] : text;
  try {
    return JSON.parse(candidate);
  } catch (_error) {
    const start = candidate.indexOf("{");
    const end = candidate.lastIndexOf("}");
    if (start === -1 || end === -1 || end <= start) return null;
    try {
      return JSON.parse(candidate.slice(start, end + 1));
    } catch (_parseError) {
      return null;
    }
  }
}

function sanitizeNoteLines(value) {
  if (!Array.isArray(value)) return null;
  const lines = value
    .filter((item) => typeof item === "string")
    .map((item) => item.replace(/^\s*(?:[-*•]|\d+[.)])\s*/, "").trim())
    .filter((item) => item.length > 0);
  // Cap to a sane size so a runaway model can't blow up the note list.
  return lines.slice(0, 200);
}

// Keep only well-formed {role, content} turns and cap the history length so the
// prompt can't grow without bound from a malicious or buggy client.
function sanitizeMessages(value) {
  if (!Array.isArray(value)) return [];
  const cleaned = [];
  for (const m of value) {
    if (!m || typeof m.content !== "string") continue;
    const role = m.role === "assistant" ? "assistant" : "user";
    const content = m.content.trim().slice(0, 4000);
    if (content) cleaned.push({ role, content });
  }
  return cleaned.slice(-12);
}

export function onRequestOptions() {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
}

export async function onRequestPost(context) {
  const { request, env } = context;

  const apiKey = env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return jsonResponse(
      {
        error:
          "Missing OPENROUTER_API_KEY. Add it to Cloudflare Pages environment variables in production, or create a local .dev.vars file when running Pages dev."
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

  const messages = sanitizeMessages(payload?.messages);
  const notes = typeof payload?.notes === "string" ? payload.notes.trim().slice(0, 16000) : "";
  if (!messages.length || messages[messages.length - 1].role !== "user") {
    return jsonResponse({ error: "Send a message for LumiBot to reply to." }, 400);
  }

  // AI model is hardcoded on purpose (NOT read from env) so a stale Cloudflare env
  // var can never override it and silently break replies. Matches /api/chat.
  const model = "google/gemini-2.5-flash";
  const siteUrl = env.OPENROUTER_SITE_URL || "https://ai-study-planner.pages.dev";
  const appName = env.OPENROUTER_APP_NAME || "Lumi Study";

  const notesBlock = notes
    ? notes
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean)
        .map((line, i) => `${i + 1}. ${line}`)
        .join("\n")
    : "(The student hasn't added any notes yet.)";

  const systemPrompt = [
    "You are LumiBot, the friendly study assistant built into Lumi Study.",
    "You help the student understand, recall, and improve their own study notes.",
    "",
    "THE STUDENT'S CURRENT STUDY NOTES (numbered):",
    notesBlock,
    "",
    "HOW TO RESPOND — output STRICT JSON only (no markdown, no code fences), exactly this shape:",
    '{ "reply": "<your message to the student>", "updatedNotes": null }',
    "",
    "Rules:",
    "- \"reply\" is ALWAYS present: a clear, friendly, concise answer or confirmation in plain text (short lines, no markdown symbols).",
    "- When the question is about their notes, answer using the information in the notes above. If the notes don't cover it, say so briefly and offer to add it.",
    "- EDITING: when the student asks you to change their notes (add, remove, rewrite, simplify, expand, fix, reorder, combine, etc.), set \"updatedNotes\" to the COMPLETE new list of note lines — every line that should remain, in order, one concise concept/fact per line, no numbering and no bullet characters. Then briefly say what you changed in \"reply\".",
    "- If the student is only asking a question (not requesting a change), set \"updatedNotes\" to null.",
    "- Never invent facts the notes don't support unless the student explicitly asks you to add new material.",
    "- Keep it study-focused, encouraging, and brief."
  ].join("\n");

  let response;
  try {
    response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer": siteUrl,
        "X-Title": appName
      },
      body: JSON.stringify({
        model,
        messages: [{ role: "system", content: systemPrompt }, ...messages],
        temperature: 0.4,
        max_tokens: 1100
      })
    });
  } catch (_error) {
    return jsonResponse({ error: "LumiBot could not reach the study engine. Please try again." }, 502);
  }

  if (!response.ok) {
    const errorText = await response.text();
    const passthroughStatus = response.status >= 400 && response.status < 500 ? response.status : 502;
    return jsonResponse(
      { error: `LumiBot request failed (${response.status}). ${errorText.slice(0, 300)}` },
      passthroughStatus
    );
  }

  const result = await response.json();
  const content = result?.choices?.[0]?.message?.content || "";
  const parsed = extractJsonObject(content);

  // Robust fallback: if the model didn't return clean JSON, use the raw text as the
  // reply rather than failing the whole turn (a chat reply is still useful).
  if (!parsed || typeof parsed.reply !== "string") {
    const text = String(content || "").trim();
    if (!text) {
      return jsonResponse({ error: "LumiBot didn't have a reply. Please try again." }, 502);
    }
    return jsonResponse({ reply: text, updatedNotes: null });
  }

  return jsonResponse({
    reply: parsed.reply.trim(),
    updatedNotes: sanitizeNoteLines(parsed.updatedNotes)
  });
}
