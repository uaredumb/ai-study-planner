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
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store"
    }
  });
}

function normalizeHashList(rawValue) {
  if (typeof rawValue !== "string") {
    return [];
  }
  return rawValue
    .split(/[\s,]+/)
    .map((item) => item.trim().toLowerCase())
    .filter((item) => /^[a-f0-9]{64}$/.test(item));
}

async function sha256Hex(value) {
  const encoded = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", encoded);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

export function onRequestOptions() {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
}

export async function onRequestPost({ request, env }) {
  let payload;
  try {
    payload = await request.json();
  } catch (_error) {
    return jsonResponse({ ok: false, error: "Invalid JSON body." }, 400);
  }

  const code = typeof payload?.code === "string" ? payload.code.trim() : "";
  if (!code) {
    return jsonResponse({ ok: false, error: "Missing code." }, 400);
  }

  const proHashes = normalizeHashList(env.PRO_CODE_HASHES);
  const godHashes = normalizeHashList(env.GOD_MODE_CODE_HASHES);
  if (proHashes.length === 0 && godHashes.length === 0) {
    return jsonResponse({ ok: false, error: "Pro codes are not configured on the server." }, 500);
  }

  const codeHash = await sha256Hex(code);
  if (godHashes.includes(codeHash)) {
    return jsonResponse({ ok: true, mode: "god", codeHash });
  }
  if (proHashes.includes(codeHash)) {
    return jsonResponse({ ok: true, mode: "pro", codeHash });
  }

  return jsonResponse({ ok: false, error: "Invalid Pro code." }, 403);
}
