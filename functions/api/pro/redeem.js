// Redeem a Lumi access / promo code.
//
// Two sources, checked in order:
//   1) Static env-hash codes — PRO_CODE_HASHES / GOD_MODE_CODE_HASHES
//      (SHA-256 hex, space/comma separated). Back-compat, never expire.
//   2) Admin-created codes in KV `ADMIN_KV` (`promo:<CODE>`), managed from
//      /admin. These support a tier (pro | power | god), max uses, and expiry.
//
// On a successful power/god redemption, if the caller sent a verified Clerk
// token, we also write a server-side plan override so generation limits match.

import {
  jsonResponse,
  corsPreflight,
  sha256Hex,
  getVerifiedClaims
} from "../admin/_lib.js";

function normalizeHashList(rawValue) {
  if (typeof rawValue !== "string") return [];
  return rawValue
    .split(/[\s,]+/)
    .map((item) => item.trim().toLowerCase())
    .filter((item) => /^[a-f0-9]{64}$/.test(item));
}

function normalizeCode(value) {
  return String(value || "")
    .trim()
    .toUpperCase()
    .replace(/[^A-Z0-9\-]/g, "")
    .slice(0, 40);
}

export function onRequestOptions() {
  return corsPreflight();
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

  // ---- 1) Static env-hash codes (back-compat) ----------------------------
  const proHashes = normalizeHashList(env.PRO_CODE_HASHES);
  const godHashes = normalizeHashList(env.GOD_MODE_CODE_HASHES);
  if (proHashes.length || godHashes.length) {
    const codeHash = await sha256Hex(code);
    if (godHashes.includes(codeHash)) {
      await maybeWriteOverride(request, env, "god");
      return jsonResponse({ ok: true, mode: "god", codeHash });
    }
    if (proHashes.includes(codeHash)) {
      return jsonResponse({ ok: true, mode: "pro", codeHash });
    }
  }

  // ---- 2) Admin-created KV codes -----------------------------------------
  const kv = env.ADMIN_KV;
  if (kv) {
    const key = "promo:" + normalizeCode(code);
    let record = null;
    try {
      const raw = await kv.get(key);
      if (raw) record = JSON.parse(raw);
    } catch (_error) {
      record = null;
    }
    if (record) {
      const now = Date.now();
      if (!record.active) {
        return jsonResponse({ ok: false, error: "This code has been disabled." }, 403);
      }
      if (record.expiresAt && now > record.expiresAt) {
        return jsonResponse({ ok: false, error: "This code has expired." }, 403);
      }
      if (record.maxUses && record.uses >= record.maxUses) {
        return jsonResponse({ ok: false, error: "This code has reached its redemption limit." }, 403);
      }
      // Count the redemption.
      try {
        record.uses = (Number(record.uses) || 0) + 1;
        await kv.put(key, JSON.stringify(record));
      } catch (_error) {
        // Non-fatal: still grant access even if the counter write fails.
      }
      const mode = record.type === "god" ? "god" : record.type === "power" ? "power" : "pro";
      await maybeWriteOverride(request, env, mode);
      return jsonResponse({ ok: true, mode });
    }
  }

  if (proHashes.length === 0 && godHashes.length === 0 && !kv) {
    return jsonResponse({ ok: false, error: "Promo codes are not configured on the server." }, 500);
  }
  return jsonResponse({ ok: false, error: "Invalid code." }, 403);
}

// Persist a server-side plan override for the verified redeemer, so generation
// rate limits honor the unlocked tier. Only for power/god (the upgrades that
// need enforcement beyond Clerk Billing). Fails open — never blocks redemption.
async function maybeWriteOverride(request, env, mode) {
  if (mode !== "power" && mode !== "god") return;
  const kv = env.ADMIN_KV;
  if (!kv) return;
  try {
    const claims = await getVerifiedClaims(request, env);
    if (claims && claims.sub) {
      await kv.put("override:" + claims.sub, mode);
    }
  } catch (_error) {
    // ignore
  }
}
