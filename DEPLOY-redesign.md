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
