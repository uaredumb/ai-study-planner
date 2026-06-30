// ---------------------------------------------------------------------------
// Shared helpers for the admin API (functions/api/admin/*) and the promo
// redeem endpoint. This file starts with "_" so Cloudflare Pages does NOT route
// it as an endpoint — it is only imported by the real handlers.
//
// What lives here:
//   - CORS + JSON helpers
//   - Clerk session JWT verification (RS256 via JWKS) — same scheme as chat.js
//   - isAdmin(): gate admin actions to the configured owner email(s) / user id(s)
//   - small list normalizers
//
// KV: the admin features need a KV namespace bound as `ADMIN_KV`
// (Cloudflare Pages > Settings > Functions > KV namespace bindings).
// ---------------------------------------------------------------------------

export const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization"
};

export function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      ...CORS_HEADERS,
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store"
    }
  });
}

export function corsPreflight() {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
}

export function normalizeList(rawValue) {
  if (typeof rawValue !== "string") return [];
  return rawValue
    .split(/[\s,]+/)
    .map((item) => item.trim().toLowerCase())
    .filter(Boolean);
}

export async function sha256Hex(value) {
  const encoded = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", encoded);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

// ---- Clerk JWT verification (RS256 / JWKS) -------------------------------

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

// Verify a Clerk session JWT and return its claims, or null if invalid.
export async function verifyClerkJwt(token, env) {
  if (!token || typeof token !== "string") return null;
  const parts = token.split(".");
  if (parts.length !== 3) return null;
  let header, payload;
  try {
    header = JSON.parse(b64urlToStr(parts[0]));
    payload = JSON.parse(b64urlToStr(parts[1]));
  } catch (_error) {
    return null;
  }
  const now = Math.floor(Date.now() / 1000);
  if (header.alg !== "RS256" || !header.kid) return null;
  if (payload.exp && now >= payload.exp) return null;
  if (payload.nbf && now < payload.nbf - 5) return null;
  const iss = (env && env.CLERK_ISSUER) || payload.iss;
  if (!iss) return null;
  let jwk;
  try {
    jwk = (await getJwks(iss)).find((k) => k.kid === header.kid);
  } catch (_error) {
    return null;
  }
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

// Pull + verify the Bearer token from a request. Returns claims or null.
export async function getVerifiedClaims(request, env) {
  const auth = request.headers.get("Authorization") || "";
  const match = auth.match(/^Bearer\s+(.+)$/i);
  if (!match) return null;
  try {
    return await verifyClerkJwt(match[1], env);
  } catch (_error) {
    return null;
  }
}

// Try to read an email out of the verified token claims (works when the Clerk
// JWT template includes an email claim; harmless when it doesn't).
function emailFromClaims(claims) {
  if (!claims) return "";
  const candidate =
    claims.email ||
    claims.email_address ||
    claims.primary_email ||
    claims.primary_email_address ||
    (claims.user && (claims.user.email || claims.user.primary_email)) ||
    "";
  return typeof candidate === "string" ? candidate.trim().toLowerCase() : "";
}

// Fetch the user's primary email from the Clerk Backend API (needs CLERK_SECRET_KEY).
async function fetchClerkEmail(userId, env) {
  const secret = env && env.CLERK_SECRET_KEY;
  if (!secret || !userId) return "";
  try {
    const res = await fetch("https://api.clerk.com/v1/users/" + encodeURIComponent(userId), {
      headers: { Authorization: "Bearer " + secret }
    });
    if (!res.ok) return "";
    const user = await res.json();
    const primaryId = user.primary_email_address_id;
    const list = Array.isArray(user.email_addresses) ? user.email_addresses : [];
    const primary = list.find((e) => e.id === primaryId) || list[0];
    const email = primary && primary.email_address;
    return typeof email === "string" ? email.trim().toLowerCase() : "";
  } catch (_error) {
    return "";
  }
}

// Default owner email so the panel works out-of-the-box; override with ADMIN_EMAILS.
const DEFAULT_ADMIN_EMAILS = ["mavrick.blackburn@gmail.com"];

export function adminEmails(env) {
  const configured = normalizeList(env && env.ADMIN_EMAILS);
  return configured.length ? configured : DEFAULT_ADMIN_EMAILS.slice();
}

// Decide whether the verified requester is an admin. Three layered checks so it
// works regardless of how the Clerk JWT is configured:
//   1) email claim in the token matches ADMIN_EMAILS
//   2) the user id (sub) is listed in ADMIN_USER_IDS
//   3) CLERK_SECRET_KEY is set -> look the email up via the Clerk Backend API
export async function isAdmin(claims, env) {
  if (!claims || !claims.sub) return false;
  const emails = adminEmails(env);
  const claimEmail = emailFromClaims(claims);
  if (claimEmail && emails.includes(claimEmail)) return true;

  const ids = normalizeList(env && env.ADMIN_USER_IDS);
  if (ids.includes(String(claims.sub).toLowerCase())) return true;

  const fetched = await fetchClerkEmail(claims.sub, env);
  if (fetched && emails.includes(fetched)) return true;

  return false;
}

// Verify the request AND that it's an admin. Returns { claims } on success or
// { error, status } describing why it failed.
export async function requireAdmin(request, env) {
  const claims = await getVerifiedClaims(request, env);
  if (!claims) return { error: "Sign in required.", status: 401 };
  if (!(await isAdmin(claims, env))) return { error: "Not authorized.", status: 403 };
  return { claims };
}

export const PLAN_TYPES = ["free", "pro", "power", "god"];
export function normalizePlan(value) {
  const v = String(value || "").trim().toLowerCase();
  return PLAN_TYPES.includes(v) ? v : "";
}
