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
- Backend: Node.js + Express
- AI: OpenRouter (default) or OpenAI

## Project structure

```
.
|- index.html              # UI
|- style.css               # Styling (light/dark + responsive)
|- main.js                 # Frontend logic
|- server.js               # Express server
|- routes/
|  |- ai.js                # API route: /api/clean-notes
|- services/
|  |- openaiService.js     # AI logic (easy to extend)
|- .env.example            # Example env variables
|- package.json
```

## Setup (beginner-friendly)

1. Install Node.js (LTS version).
2. Open terminal in this folder.
3. Install dependencies:

```powershell
npm install
```

4. Create a `.env` file from `.env.example`.
5. In `.env`, set your API key and model (OpenRouter example):

```env
OPENROUTER_API_KEY=your_real_key_here
AI_MODEL=arcee-ai/trinity-large-preview:free
OPENROUTER_SITE_URL=http://localhost:3000
OPENROUTER_APP_NAME=AI Study Planner
PORT=3000
```

6. Start the app:

```powershell
npm start
```

7. Open: `http://localhost:3000`

## Clerk Login Setup

1. Copy `config.example.js` to `config.js`.
2. Set your Clerk publishable key:

```js
window.APP_CONFIG = {
  CLERK_PUBLISHABLE_KEY: "pk_test_your_key_here"
};
```

Notes:
- `config.js` is gitignored so each environment can use its own key.
- The app is locked until login succeeds.
- Tutorial starts only after the user is authenticated.

## Cloudflare Pages Functions (Secure API Key)

Frontend now calls `POST /api/chat` and never sends an API key from client code.

1. In Cloudflare Pages project settings, add environment variable:
   - `OPENROUTER_API_KEY` (required)
2. Optional env vars:
   - `OPENROUTER_MODEL`
   - `OPENROUTER_SITE_URL`
   - `OPENROUTER_APP_NAME`
   - `CLERK_SECRET_KEY` (required only if `REQUIRE_CLERK_AUTH=true`)
   - `REQUIRE_CLERK_AUTH` (`true`/`false`, default false)
3. Deploy with the `functions/` directory included.

Local Pages dev:
- Copy `.dev.vars.example` to `.dev.vars` and set real values.
- If you want `/api/chat` protected by Clerk session, set `REQUIRE_CLERK_AUTH=true` and provide `CLERK_SECRET_KEY`.

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

- `POST /api/clean-notes`
- Request body:

```json
{
  "notes": "my messy notes here"
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
