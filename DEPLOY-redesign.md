# Deploying the Lumi redesign

The redesign is a single self-contained file, **`redesign.html`** (marketing site + the generator app, wired to the real `/api/chat` + Clerk). It is meant to **replace `index.html`**. The `functions/` backend is unchanged except the AI-model fix in `functions/api/chat.js`.

## 0. Pre-deploy checklist
- [ ] **OpenRouter account has credits** (live generation was failing partly because of model issues; confirm billing).
- [ ] **`OPENROUTER_API_KEY`** is set in Cloudflare Pages → Settings → Environment variables (still required — it's a secret).
- [ ] You can stop worrying about `OPENROUTER_MODEL` / `OPENROUTER_VISION_MODEL` — the model is now **hardcoded** to `google/gemini-2.5-flash` in `chat.js`. (Old env values are ignored.)

## 1. Swap in the new page
From the repo root:

```powershell
# back up the current app, then make the redesign the live entry point
Copy-Item index.html index.legacy.html -Force
Copy-Item redesign.html index.html -Force
```

That's it — `index.html` is now the redesign.

### Files that MUST stay (the new index.html uses them)
- `config.js` and the `/runtime-config` function — Clerk publishable key + canonical host
- `functions/` — `api/chat.js` (generation), `api/pro/*`, `runtime-config.js`
- `favicon-32.png`, `favicon-512.png`, `LumiStudy logo with glowing orb (1).png`
- `pricing.html` / `pricing.js` — the Clerk checkout/billing page the "Upgrade" buttons open

### Files
- `main.js` — **removed** (the redesign is self-contained and never loaded it).
- `style.css` — **kept**: `pricing.html` (the Clerk checkout page your "Upgrade" buttons open) still uses it.
- `index.legacy.html` — backup of the old shell. Full rollback: `git checkout c74ad14 -- index.html main.js` then commit.
- `redesign.html` — source file; identical to `index.html`. Keep as reference or remove.

## 2. Deploy
This repo auto-deploys to Cloudflare Pages on push:

```powershell
git add index.html index.legacy.html functions/api/chat.js README.md .dev.vars.example redesign.html DEPLOY-redesign.md
git commit -m "Ship redesigned Lumi (marketing + generator) and fix AI model"
git push
```

(The included `deploy`/`deploy.ps1` scripts are for the separate backend repo and are not needed for the frontend.)

## 3. Post-deploy verification (on the live URL)
- [ ] Landing page loads; dark-mode toggle works; "Start for free" opens the generator.
- [ ] **Generate a real pack** from pasted notes — confirms the `chat.js` model fix works against live OpenRouter.
- [ ] **Photo/PDF** upload → OCR → pack (this was fully broken before the vision-model fix).
- [ ] **Sign in** (Clerk) works; the plan badge shows Free, and a Pro/Power test account shows the right limits (15/30 flashcards, 10k/25k chars).
- [ ] "Upgrade" opens the Clerk pricing/checkout flow.

## Notes
- Pricing + in-app limits now mirror the **real Clerk plans**: Free (3,000 / 5 / 12 / 2), Pro $6.99 ($4.99 annual) (10,000 / 15 / 12 / 10), Power $12.99 ($8.99 annual) (25,000 / 30 / 25 / 15).

## Per-plan generation rate limits (server-side)
`functions/api/chat.js` now enforces daily/monthly generation caps (Free 3/day·20/mo, Pro 25·400, Power 60·1000). It is **inert until you bind a KV namespace**, and fails open on any error, so it cannot break generation.

To turn it on:
1. **Cloudflare dashboard → Workers & Pages → KV** → create a namespace (e.g. `lumi-rate-limit`).
2. **Your Pages project → Settings → Functions → KV namespace bindings** → add a binding named **`RATE_LIMIT`** → select that namespace. (Add it to both Production and Preview.)
3. Redeploy. Enforcement activates immediately.
4. *(Optional)* set `CLERK_ISSUER` env var to `https://clerk.lumistudy.org` — otherwise the issuer is read from the verified session token.

How it works: the requester is identified from a **signature-verified** Clerk session JWT (`sub` + plan from the `pla` claim); guests are limited by IP at the Free tier. Counts are stored per-user-per-day and per-month in KV with TTL. Over-limit returns HTTP 429 with a friendly message that the app surfaces in its status line.

**Test after enabling** (limits are low, so it's quick): on a Free/guest session, generate 4 packs — the 4th should return the 429 message. Verify a Pro/Power test account gets the higher cap. (If a paid user is wrongly throttled to Free, the `pla` claim isn't reaching the token — check Clerk Billing is enabled for that instance.)

## Admin panel (`admin.html`)

A private owner-only panel at **`/admin.html`** to (1) set your own plan to Free / Pro / Power / **God** (God = no limits) and (2) create / list / delete **promo codes** that users redeem in-app (Account menu → Promo code). Codes carry a tier (Pro / Power / God), optional max-uses, and optional expiry.

Backend lives in `functions/api/admin/` (`plan.js`, `promos.js`, shared `_lib.js`) and a small extension to `functions/api/pro/redeem.js` (now also honors admin-created codes) and `functions/api/chat.js` (now honors admin plan overrides; **God bypasses the generation rate limit**).

### Setup
1. **Bind a KV namespace named `ADMIN_KV`** — Pages → Settings → Functions → KV namespace bindings. Create a namespace (e.g. `lumi-admin`) and bind it as **`ADMIN_KV`** (Production **and** Preview). This stores promo codes (`promo:<CODE>`) and plan overrides (`override:<userId>`).
   - For God Mode to bypass the *server* generation cap, `chat.js` reads `ADMIN_KV` too, so bind it even if you skip `RATE_LIMIT`.
2. **Admin identity** — pick ONE (the panel + every admin API call is gated server-side, not just in the browser):
   - **Easiest:** set env **`CLERK_SECRET_KEY`** (Clerk dashboard → API keys → Secret key). The default admin email is `mavrick.blackburn@gmail.com`; override with **`ADMIN_EMAILS`** (comma/space separated) if needed. The server looks up your email via the Clerk Backend API.
   - **No secret key:** set env **`ADMIN_USER_IDS`** to your Clerk user id (`user_…`). The panel shows "Your user id" once you sign in — copy it in.
   - *(Also works automatically if your Clerk JWT template includes an `email` claim.)*
3. The client gate uses `APP_CONFIG.ADMIN_EMAIL` (defaults to `mavrick.blackburn@gmail.com`, set in `config.js`). Keep it in sync with `ADMIN_EMAILS`.
4. Redeploy.

### How it fits together
- **Set my plan** writes `unsafeMetadata.planOverride` (instant UI via `syncPlan`) **and** `POST /api/admin/plan` → KV `override:<you>` (server limits). "Free" clears the override.
- **Promo codes** are stored in KV; redeeming a **Power/God** code also writes a server override for that user so their limits match. Pro codes keep the existing Clerk-metadata path.
- Existing static env-hash codes (`PRO_CODE_HASHES` / `GOD_MODE_CODE_HASHES`) and the emergency `GUEST_GOD_MODE_CODE` still work unchanged.

### Verify after deploy
- [ ] Sign in as the owner → the **Admin** link appears in the account menu, and `/admin.html` shows the panel (a non-owner account gets "Not authorized").
- [ ] Click **God** → badge shows God; generate a long pack with no character cap.
- [ ] Create a **Power** code, redeem it from a second account (Account menu → Promo code) → that account becomes Power.
- [ ] If you see "Promo storage isn't set up yet," the `ADMIN_KV` binding is missing.
