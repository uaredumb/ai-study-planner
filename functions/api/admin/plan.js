// Admin: set / read a user's plan override (free | pro | power | god).
// Stored in KV `ADMIN_KV` under `override:<userId>` so it is enforced
// server-side (see functions/api/chat.js). "god" = no limits.
//
//   GET  /api/admin/plan            -> current override for the caller
//   POST /api/admin/plan {plan, userId?}  -> set override (defaults to caller)
//
// Admin-gated: only the configured owner (ADMIN_EMAILS / ADMIN_USER_IDS) can call.

import { jsonResponse, corsPreflight, requireAdmin, normalizePlan } from "./_lib.js";

export function onRequestOptions() {
  return corsPreflight();
}

export async function onRequestGet({ request, env }) {
  const gate = await requireAdmin(request, env);
  if (gate.error) return jsonResponse({ ok: false, error: gate.error }, gate.status);

  const kv = env.ADMIN_KV;
  const userId = gate.claims.sub;
  let plan = "free";
  if (kv) {
    try {
      plan = (await kv.get("override:" + userId)) || "free";
    } catch (_error) {
      plan = "free";
    }
  }
  return jsonResponse({ ok: true, userId, plan, kvBound: Boolean(kv) });
}

export async function onRequestPost({ request, env }) {
  const gate = await requireAdmin(request, env);
  if (gate.error) return jsonResponse({ ok: false, error: gate.error }, gate.status);

  let payload;
  try {
    payload = await request.json();
  } catch (_error) {
    return jsonResponse({ ok: false, error: "Invalid JSON body." }, 400);
  }

  const plan = normalizePlan(payload?.plan);
  if (!plan) {
    return jsonResponse({ ok: false, error: "plan must be one of free, pro, power, god." }, 400);
  }
  // Default to the admin's own account; allow targeting another user id explicitly.
  const userId =
    typeof payload?.userId === "string" && payload.userId.trim()
      ? payload.userId.trim()
      : gate.claims.sub;

  const kv = env.ADMIN_KV;
  if (!kv) {
    return jsonResponse(
      { ok: false, error: "ADMIN_KV is not bound. Add a KV namespace binding named ADMIN_KV in Cloudflare Pages > Settings > Functions." },
      500
    );
  }

  try {
    if (plan === "free") {
      await kv.delete("override:" + userId);
    } else {
      await kv.put("override:" + userId, plan);
    }
  } catch (_error) {
    return jsonResponse({ ok: false, error: "Failed to save the plan override." }, 500);
  }

  return jsonResponse({ ok: true, userId, plan });
}
