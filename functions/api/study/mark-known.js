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

export function onRequestOptions() {
  return new Response(null, { headers: CORS_HEADERS });
}

export async function onRequestPost({ request }) {
  try {
    const payload = await request.json();
    if (!payload || typeof payload.id !== "string") {
      return jsonResponse({ ok: false, error: "Missing id" }, 400);
    }
    // TODO: Persist known state in your data store.
    return jsonResponse({ ok: true });
  } catch (_error) {
    return jsonResponse({ ok: false, error: "Invalid payload" }, 400);
  }
}
