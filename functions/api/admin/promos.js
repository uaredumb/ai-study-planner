// Admin: create / list / delete promo codes.
// Stored in KV `ADMIN_KV` under `promo:<CODE>`. Codes are redeemed by users via
// /api/pro/redeem (which reads the same KV). Each code grants a plan tier and
// can be capped by max uses and/or an expiry.
//
//   GET    /api/admin/promos                 -> list all codes
//   POST   /api/admin/promos {type, code?, maxUses?, expiresInDays?, note?}
//   DELETE /api/admin/promos?code=CODE       -> delete a code
//
// Admin-gated: only the configured owner can call.

import { jsonResponse, corsPreflight, requireAdmin } from "./_lib.js";

const PROMO_TYPES = ["pro", "power", "god"];

function normalizeCode(value) {
  return String(value || "")
    .trim()
    .toUpperCase()
    .replace(/[^A-Z0-9\-]/g, "")
    .slice(0, 40);
}

function randomCode() {
  const alphabet = "ABCDEFGHJKMNPQRSTUVWXYZ23456789"; // no ambiguous chars
  const bytes = new Uint8Array(8);
  crypto.getRandomValues(bytes);
  let out = "";
  for (let i = 0; i < bytes.length; i += 1) out += alphabet[bytes[i] % alphabet.length];
  return "LUMI-" + out.slice(0, 4) + "-" + out.slice(4, 8);
}

// Add computed status fields for the UI without mutating stored data.
function decorate(record) {
  const now = Date.now();
  const expired = record.expiresAt && now > record.expiresAt;
  const exhausted = record.maxUses && record.uses >= record.maxUses;
  let status = "active";
  if (!record.active) status = "disabled";
  else if (expired) status = "expired";
  else if (exhausted) status = "used up";
  return { ...record, status };
}

export function onRequestOptions() {
  return corsPreflight();
}

export async function onRequestGet({ request, env }) {
  const gate = await requireAdmin(request, env);
  if (gate.error) return jsonResponse({ ok: false, error: gate.error }, gate.status);

  const kv = env.ADMIN_KV;
  if (!kv) return jsonResponse({ ok: true, codes: [], kvBound: false });

  try {
    const list = await kv.list({ prefix: "promo:" });
    const records = await Promise.all(
      list.keys.map(async (k) => {
        const raw = await kv.get(k.name);
        if (!raw) return null;
        try {
          return decorate(JSON.parse(raw));
        } catch (_error) {
          return null;
        }
      })
    );
    const codes = records.filter(Boolean).sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
    return jsonResponse({ ok: true, codes, kvBound: true });
  } catch (_error) {
    return jsonResponse({ ok: false, error: "Failed to list promo codes." }, 500);
  }
}

export async function onRequestPost({ request, env }) {
  const gate = await requireAdmin(request, env);
  if (gate.error) return jsonResponse({ ok: false, error: gate.error }, gate.status);

  const kv = env.ADMIN_KV;
  if (!kv) {
    return jsonResponse(
      { ok: false, error: "ADMIN_KV is not bound. Add a KV namespace binding named ADMIN_KV in Cloudflare Pages > Settings > Functions." },
      500
    );
  }

  let payload;
  try {
    payload = await request.json();
  } catch (_error) {
    return jsonResponse({ ok: false, error: "Invalid JSON body." }, 400);
  }

  const type = String(payload?.type || "").trim().toLowerCase();
  if (!PROMO_TYPES.includes(type)) {
    return jsonResponse({ ok: false, error: "type must be one of pro, power, god." }, 400);
  }

  let code = payload?.code ? normalizeCode(payload.code) : randomCode();
  if (!code || code.length < 4) {
    return jsonResponse({ ok: false, error: "Code must be at least 4 characters (A-Z, 0-9, -)." }, 400);
  }

  // maxUses: 0 / missing = unlimited.
  let maxUses = Number(payload?.maxUses);
  maxUses = Number.isFinite(maxUses) && maxUses > 0 ? Math.floor(maxUses) : 0;

  // expiresInDays: 0 / missing = never expires.
  let expiresAt = 0;
  const days = Number(payload?.expiresInDays);
  if (Number.isFinite(days) && days > 0) {
    expiresAt = Date.now() + Math.floor(days) * 24 * 60 * 60 * 1000;
  }

  const note = typeof payload?.note === "string" ? payload.note.trim().slice(0, 120) : "";

  const key = "promo:" + code;
  const existing = await kv.get(key);
  if (existing) {
    return jsonResponse({ ok: false, error: "That code already exists. Pick another." }, 409);
  }

  const record = {
    code,
    type,
    maxUses,
    uses: 0,
    expiresAt,
    active: true,
    note,
    createdAt: Date.now()
  };

  try {
    await kv.put(key, JSON.stringify(record));
  } catch (_error) {
    return jsonResponse({ ok: false, error: "Failed to save the promo code." }, 500);
  }

  return jsonResponse({ ok: true, code: decorate(record) });
}

export async function onRequestDelete({ request, env }) {
  const gate = await requireAdmin(request, env);
  if (gate.error) return jsonResponse({ ok: false, error: gate.error }, gate.status);

  const kv = env.ADMIN_KV;
  if (!kv) return jsonResponse({ ok: false, error: "ADMIN_KV is not bound." }, 500);

  const url = new URL(request.url);
  const code = normalizeCode(url.searchParams.get("code") || "");
  if (!code) return jsonResponse({ ok: false, error: "Missing code." }, 400);

  try {
    await kv.delete("promo:" + code);
  } catch (_error) {
    return jsonResponse({ ok: false, error: "Failed to delete the promo code." }, 500);
  }
  return jsonResponse({ ok: true, code });
}
