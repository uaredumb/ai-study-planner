# Lumi Study — 30s Motion Graphic Ad

A 30-second 2D motion graphic video ad for [lumistudy.org](https://lumistudy.org), built with Remotion.

## Compositions

| ID | Size | Use |
| --- | --- | --- |
| `LumiAd` | 1920×1080 (16:9) | X/YouTube/web |
| `LumiAdVertical` | 1080×1920 (9:16) | Reels/TikTok/Shorts |

Both are 900 frames @ 30fps (30 seconds) and share the same scene code — layouts adapt to the aspect ratio.

## Scenes

1. **Hook** (0:00–0:06) — messy notes/PDFs get sucked into the glowing orb. "Studying shouldn't feel like this."
2. **Reveal** (0:06–0:12) — logo explodes in, browser frame with the generator being typed into.
3. **Features** (0:12–0:20) — staggered cards: Clean notes / Flashcards / Quizzes / LumiBot.
4. **Speed** (0:20–0:25) — progress ring races 0→100%. "From notes to studying — in seconds."
5. **CTA** (0:25–0:30) — orb pulse, wordmark, "Study smarter. Free to start." + lumistudy.org.

## Commands

**Preview in browser (Remotion Studio)**

```console
npm run dev
```

**Render the horizontal (X post) MP4**

```console
npx remotion render LumiAd out/lumi-ad-16x9.mp4
```

**Render the vertical MP4**

```console
npx remotion render LumiAdVertical out/lumi-ad-9x16.mp4
```

Output lands in `out/`. Add `--crf 16` for higher quality if the default looks compressed after X re-encoding.

## Brand tokens

Colors, font (Outfit via `@remotion/google-fonts`), and easing curves live in [src/brand.ts](src/brand.ts). All motion uses the site's `cubic-bezier(.16,1,.3,1)` easeOutExpo feel.
