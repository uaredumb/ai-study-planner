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

### Files now unused (safe to leave; delete later if you want)
- `main.js`, `style.css` — the old app's logic/styles (the redesign is self-contained and does not load them)
- `redesign.html` / `index.legacy.html` — keep as reference or remove after you're happy

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
- Daily/monthly generation caps (3/25/60 per day) are advertised but **enforced server-side only if you add that check** — the current `/api/chat` does not rate-limit per plan. Flag if you want that added.
