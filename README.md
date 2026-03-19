# AI Study Planner

A beginner-friendly website that turns messy student notes into a clear study plan using an AI API (OpenRouter or OpenAI).

## What it does

- Paste unorganized notes into one text box
- Click **Clean Notes**
- AI returns:
  - Clean Notes (summary + organized bullet points + detected subjects)
  - Study Tasks
  - Suggested Study Order

## Tech stack

- Frontend: HTML, CSS, JavaScript
- Runtime for API routes: Cloudflare Pages Functions
- AI: OpenRouter

## Project structure

```
.
|- index.html              # UI
|- style.css               # Styling (light/dark + responsive)
|- main.js                 # Frontend logic
|- functions/
|  |- api/
|     |- chat.js           # API route: POST /api/chat
|- .dev.vars.example       # Example local Pages env variables
|- package.json
```

## Local setup

1. Install Node.js (LTS version).
2. Open terminal in this folder.
3. Install dependencies:

```powershell
npm install
```

4. Create a `.dev.vars` file from `.dev.vars.example`.
5. In `.dev.vars`, set your real OpenRouter key:

```env
OPENROUTER_API_KEY=your_real_key_here
OPENROUTER_MODEL=stepfun/step-3.5-flash
OPENROUTER_VISION_MODEL=openrouter/healer-alpha
OPENROUTER_SITE_URL=http://localhost:8788
OPENROUTER_APP_NAME=AI Study Planner
```

6. Start Cloudflare Pages dev:

```powershell
npm run dev
```

7. Open the local URL Wrangler shows in the terminal, usually `http://localhost:8788`

Important:
- Do not open `index.html` directly in the browser if you want AI features to work.
- The frontend calls `/api/chat`, so it must run through Cloudflare Pages dev or a deployed Pages site with the `functions/` folder active.

## Cloudflare Pages Functions (Secure API Key)

Frontend now calls `POST /api/chat` and never sends an API key from client code.

1. In Cloudflare Pages project settings, add environment variable:
   - `OPENROUTER_API_KEY` (required)
2. Optional env vars:
   - `OPENROUTER_MODEL`
   - `OPENROUTER_VISION_MODEL`
   - `OPENROUTER_SITE_URL`
   - `OPENROUTER_APP_NAME`
3. Deploy with the `functions/` directory included.

Local Pages dev:
- Copy `.dev.vars.example` to `.dev.vars` and set real values.
- Keep Pro redemption hashes in `.dev.vars` or Cloudflare Pages env vars, not in client code.

### Hidden Pro codes

To keep Pro codes secret:

1. Put only SHA-256 hashes in `.dev.vars` locally:

```env
PRO_CODE_HASHES=hash_one,hash_two,hash_three
GOD_MODE_CODE_HASHES=optional_god_mode_hash
GOD_MODE_EMAILS=owner@example.com
```

2. In Cloudflare Pages production, add the same variables in Project Settings -> Environment variables.

3. Do not store raw Pro codes in `main.js`, `index.html`, PDFs, or committed files.

`GOD_MODE_EMAILS` is for accounts that should automatically receive God Mode after sign-in.

## Deploying the backend to GitHub

- A `deploy` (bash) and `deploy.ps1` (PowerShell) script are included at the repository root.
- The scripts use the `gh` CLI (GitHub CLI) to create a remote repository under your account and push the backend folder.
- Usage (bash):

```bash
./deploy [repo-name]
```

Usage (PowerShell):

```powershell
.\deploy.ps1 -RepoName "ai-study-planner-backend"
```

Notes:
- The backend code lives inside the ignored `backend/` folder so the frontend repo won't track it.
- The `deploy` scripts require `gh` to be installed and authenticated. If you want me to create the remote directly, provide a GitHub token or let me know and I can attempt it using your `gh` setup.

Repository links

- Frontend: https://github.com/uaredumb/ai-study-planner
- Backend: https://github.com/uaredumb/ai-study-planner-backend

## API route

- `POST /api/chat`
- Request body:

```json
{
  "notes": "my messy notes here",
  "stream": true
}
```

- Response shape:

```json
{
  "cleanNotes": ["..."],
  "studyTasks": ["..."],
  "studyOrder": ["..."]
}
```

## Future feature placeholders included in UI

- AI schedule generator (based on available time)
- Homework deadline tracker
- Subject color-coding
- Save and load study sessions
- Gamification (XP or progress bar)
- Voice note input

## Extension tip

When adding new AI features, create new files in `services/` and call them from new routes in `routes/`. This keeps frontend and AI logic cleanly separated.
