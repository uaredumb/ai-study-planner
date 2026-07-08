---
name: AI Study Planner
description: A calm command center that turns messy notes into a clear study plan
colors:
  bg-light: "#f6f8ff"
  bg-dark: "#121830"
  text-light: "#1d2240"
  text-dark: "#f3f5ff"
  muted-light: "#5a628f"
  muted-dark: "#bac3f6"
  card-light: "#ffffff"
  card-dark: "#1a2244"
  border-light: "#d9def5"
  border-dark: "#2f3a70"
  accent: "#3557ff"
  accent-dark: "#7f96ff"
  accent-strong: "#2847df"
  accent-strong-dark: "#91a6ff"
  success: "#24a86c"
  error: "#ff7a5c"
  danger-text: "#b52f3e"
  danger-border: "#ef9fa8"
  warning: "#ffb65e"
  pro-gold-start: "#ffe7a8"
  pro-gold-end: "#ffc86c"
  pro-gold-text: "#7a4b00"
  flashcard-task: "#24a86c"
  flashcard-plan: "#ff8d3c"
  bg-shape-blue: "#83a6ff"
  bg-shape-teal: "#77efd1"
typography:
  display:
    fontFamily: "Outfit, sans-serif"
    fontSize: "clamp(1.8rem, 4vw, 2.3rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Outfit, sans-serif"
    fontSize: "clamp(1.5rem, 2.2vw, 2rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Outfit, sans-serif"
    fontSize: "1.15rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "normal"
  body:
    fontFamily: "Outfit, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  label:
    fontFamily: "Outfit, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 700
    lineHeight: 1.35
    letterSpacing: "0.05em"
rounded:
  pill: "999px"
  card-lg: "24px"
  card: "18px"
  input: "12px"
  chip: "10px"
spacing:
  xs: "0.4rem"
  sm: "0.6rem"
  md: "1rem"
  lg: "1.3rem"
  xl: "2rem"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "0.75rem 1.2rem"
  button-primary-hover:
    backgroundColor: "{colors.accent-strong}"
  button-secondary:
    backgroundColor: "{colors.card-light}"
    textColor: "{colors.text-light}"
    rounded: "{rounded.pill}"
    padding: "0.45rem 0.9rem"
  card-default:
    backgroundColor: "{colors.card-light}"
    textColor: "{colors.text-light}"
    rounded: "{rounded.card}"
  input-default:
    backgroundColor: "transparent"
    textColor: "{colors.text-light}"
    rounded: "{rounded.input}"
    padding: "0.8rem"
---

# Design System: AI Study Planner

## 1. Overview

**Creative North Star: "The Calm Command Center"**

AI Study Planner exists for one moment: a student mid-cram, notes everywhere, pastes the mess into one box and hits Clean Notes. Everything the interface does should serve that moment — reduce the visual noise around the student, not add to it. The system is a soft indigo-blue command surface: airy off-white by day, deep navy by night, with a single trustworthy accent color doing almost all of the work. Motion is alive but gentle — buttons idle-float, hover shimmers sweep, flashcards flip in 3D — but it's already adaptive: `performance-mode` and `ios-optimized` strip it back for constrained devices, so the richness never costs reliability. That adaptivity *is* the calm: the system never makes the stressed user wait on an animation.

This system explicitly rejects manufactured urgency — no countdown timers, no red alarm-toned upsells, no dense dashboard chrome competing for attention. Where gating exists (Pro, God Mode, the study-launch reveal-gate), it's presented as a soft, honest pause — a blurred preview and a clear CTA — never a dark pattern.

**Key Characteristics:**
- One accent (trustworthy indigo), used deliberately, not scattered
- Pill-shaped buttons and chips throughout — soft, approachable, never sharp
- Soft-lifted cards on a diffuse indigo-tinted shadow, not flat, not heavy
- Glass/blur reserved for high-stakes moments: the auth gate, the study-launch reveal
- Motion is default-on but adaptive: idle float + shimmer at full fidelity, gracefully degrading under `performance-mode`/`ios-optimized`
- Light and dark themes are full siblings, not an afterthought — every token has a dark counterpart

## 2. Colors

The palette is restrained: one saturated accent (indigo-blue) carrying identity, tinted-blue neutrals for calm, and small deliberate bursts of color (green success, amber Pro-gold, orange warning) reserved for status and gating moments only.

### Primary
- **Trustworthy Indigo** (#3557ff / dark: #7f96ff): the single accent. Used for primary buttons, links, focus rings, active states, and the deliberate accent-tinted pill badges (mode chips, progress pills). Confident without being cold — this is the color of "the plan is coming together," not "act now."
- **Trustworthy Indigo, Strong** (#2847df / dark: #91a6ff): hover/active depth for the primary accent — the same color pushed one step further, never a different hue.

### Secondary (status accents, used sparingly)
- **Calm Green** (#24a86c): success states only — correct quiz answers, completed study sessions, the "task" flashcard kind. Never decorative.
- **Warm Amber** (#ffb65e): warning-toned surfaces — quiz result summaries, "coming soon" plan tiers. A pause, not an alarm.
- **Soft Coral** (#ff7a5c) / **Danger Red** (#b52f3e text, #ef9fa8 border): error and incorrect states only.

### Tertiary
- **Pro Gold** (linear-gradient #ffe7a8 → #ffc86c, text #7a4b00): reserved exclusively for Pro/God Mode badges. Its rarity is what makes it read as a reward, not a nag.

### Neutral
- **Paper Blue** (#f6f8ff / dark: #121830): base background — a barely-tinted off-white by day, deep navy by night. Never pure white or true black; the faint blue keeps it in-family with the accent.
- **Ink Indigo** (#1d2240 / dark: #f3f5ff): primary text.
- **Muted Indigo** (#5a628f / dark: #bac3f6): secondary text, labels, placeholders — checked to stay ≥4.5:1 against `--card`/`--bg` in both themes.
- **Card White** (#ffffff / dark: #1a2244): surface color for cards, modals, inputs-on-card.
- **Border Mist** (#d9def5 / dark: #2f3a70): all card/input/button borders, 1px.

### Named Rules
**The One Accent Rule.** Indigo is the only saturated color allowed outside status/gating contexts. Green, amber, coral, and gold each have exactly one job (success, warning, error, Pro) and never substitute for the primary accent.

## 3. Typography

**Display Font:** Outfit (with sans-serif fallback)
**Body Font:** Outfit (with sans-serif fallback)
**Label/Mono Font:** ui-monospace / SFMono-Regular / Menlo / Consolas (live-stream output and code snippets only)

**Character:** A single geometric-humanist sans across every weight — no pairing, no serif contrast. The consistency is deliberate: one typeface family reads as one calm voice, whether it's a headline or a footnote.

### Hierarchy
- **Display** (700, `clamp(1.8rem, 4vw, 2.3rem)`, line-height 1, letter-spacing -0.01em): Page-level h1, used once per screen.
- **Headline** (700, `clamp(1.5rem, 2.2vw, 2rem)`, line-height 1.15, letter-spacing -0.01em): Section/result-card headings.
- **Title** (600, ~1.15rem, line-height 1.4): Modal titles, welcome-island headings, component-level headers.
- **Body** (400–600, 0.9–1.08rem, line-height 1.45–1.6, max ~65ch on prose blocks like the auth modal message): Default copy, form labels, button text (600 is the dominant UI weight, even for body-scale text in interactive elements).
- **Label** (700–800, 0.66–0.78rem, letter-spacing 0.03–0.09em, uppercase): Kickers, status pills, badges, mode chips.

### Named Rules
**The Weighted-Not-Sized Rule.** Emphasis in this system comes from font-weight (600/700/800) far more than from size jumps — most UI text lives in a narrow 0.85–1.15rem band. Reach for weight before reaching for a bigger size.

## 4. Elevation

Soft-lifted with glass accents. At rest, cards, modals, and buttons sit on a single diffuse, indigo-tinted ambient shadow (`--shadow`) — never a hard, sharp shadow. Depth increases only in response to interaction (hover lift, active press) or to mark a genuinely elevated moment. Glass (`backdrop-filter: blur()` + translucent gradient fills) is reserved for two contexts on purpose: the auth gate and the study-launch reveal-gate — both are moments where the product is deliberately pausing the user, so the visual language pauses too.

### Shadow Vocabulary
- **Ambient card** (`box-shadow: 0 16px 40px rgba(40, 61, 158, 0.14)`; dark: `0 18px 42px rgba(0, 0, 0, 0.35)`): default resting state for `.card`, `.modal-card`, `.tutorial-coach`.
- **Button hover** (`0 10px 22px rgba(40, 61, 158, 0.2)`): lift on hover, paired with `translateY(-2px) scale(1.02)`.
- **Button active** (`0 4px 10px rgba(40, 61, 158, 0.16)`): compressed shadow on press, paired with `translateY(0) scale(0.97)`.
- **Focus ring** (`0 0 0 3px color-mix(in srgb, var(--accent), transparent 65%), 0 0 0 8px color-mix(in srgb, var(--accent), transparent 87%)`): double-ring halo, accent-tinted, on every focus-visible interactive element.
- **Glass panel** (auth gate: `0 22px 58px rgba(0, 0, 0, 0.46)`; study-launch backdrop-blur 16px): the deepest shadow in the system, reserved for full-viewport gate moments.
- **Inset highlight** (`inset 0 1px 0 rgba(255,255,255,0.02–0.75)`): a thin top-edge glow layered onto glass and elevated surfaces for a soft glassy sheen.

### Named Rules
**The Reserved Glass Rule.** Blur and translucency are for pause-moments (auth, paywall reveal) only. Everyday cards and buttons stay opaque with a soft ambient shadow — glass is not the default surface treatment, it's a signal.

## 5. Components

### Buttons
- **Shape:** Fully pill (`border-radius: 999px`).
- **Primary:** `linear-gradient(120deg, var(--accent) 0%, color-mix(in srgb, var(--accent), #8ecfff 22%) 45%, var(--accent-strong) 100%)`, white text, transparent border, padding `0.75rem 1.2rem`. Idle state carries a slow float animation and a diagonal shimmer sweep on hover — motion is part of the resting design, not just feedback.
- **Secondary:** `border-color: color-mix(in srgb, var(--border), #b6bfd7 44%)`, soft light gradient fill, padding `0.45rem 0.9rem`.
- **Ghost/icon (theme-btn):** `background: var(--card)`, 1px border, used for nav icon actions (theme toggle, help, sign-in).
- **Danger:** border `#ef9fa8`, text `#b52f3e`, otherwise same pill shape and padding as secondary.
- **Hover/Focus:** `translateY(-2px) scale(1.02)` + hover shadow + `filter: brightness(1.03)`; focus-visible adds the double accent ring plus a pulse animation. **Active:** `translateY(0) scale(0.97)`, faster (0.12s) transition. **Disabled:** `opacity: 0.55`, desaturated (`grayscale(0.2)`), no shadow, no idle animation.

### Chips / Badges
- **Status pills** (mode chips, progress pills, quiz badges): accent-tinted background via `color-mix(in srgb, var(--accent), transparent 88–92%)`, uppercase, bold, letter-spaced label type.
- **Pro/God Mode badge:** pill, gold gradient fill (#ffe7a8 → #ffc86c), border `rgba(184,122,16,0.55)`, text `#7a4b00` — the only place gold appears.
- **File chip:** `border-radius: 12px` (not pill — chips attached to inputs use the input radius family), transparent bg, active state gets accent border + accent-tinted fill.

### Cards / Containers
- **Corner Style:** 18px base (`.card`), up to 24–28px for hero/result/pricing cards — larger surfaces get proportionally larger radii.
- **Background:** `var(--card)` (white / #1a2244 dark).
- **Shadow Strategy:** Ambient card shadow at rest (see Elevation); no shadow increase unless interactive.
- **Border:** 1px solid `var(--border)` on every card.
- **Internal Padding:** 1–1.2rem typical; hero cards use `clamp(1.25rem, 2.8vw, 1.8rem)`.

### Inputs / Fields
- **Style:** transparent background, 1px `var(--border)`, `border-radius: 12px`, padding ~0.8rem.
- **Focus:** `outline: 2px solid color-mix(in srgb, var(--accent), transparent 55%)` — a simple outline, not the full button focus-ring treatment.
- **Error:** border shifts to `#d23b3b`, background tints to `color-mix(in srgb, #d23b3b, transparent 92%)`.

### Navigation
- Flex `.top-bar`, space-between, wraps on small screens. Actions are `.theme-btn`-styled icon/text buttons in a `gap: 0.55rem` row. Brand block pairs a logo mark with a muted, 600-weight eyebrow tagline. Same pattern repeats on the pricing page's top bar.

### Signature Component: The Reveal-Gate
A recurring soft-paywall pattern (`study-launch-panel`, quiz/flashcard gates): the underlying content is rendered but blurred (`filter: blur(10px); opacity: 0.26`), with a centered glass panel (`backdrop-filter: blur(16px)`) offering a clear, single CTA to proceed. This is the product's honest alternative to hiding content behind a hard wall — the user can see there's something there, and the ask to unlock it is calm, not aggressive.

## 6. Do's and Don'ts

### Do:
- **Do** keep indigo as the only saturated accent outside status/gating (green/amber/coral/gold each have exactly one job).
- **Do** use pill shape (999px) for every button, chip, and badge — it's the system's signature silhouette.
- **Do** lead emphasis with font-weight, not font-size — most UI text lives in a narrow 0.85–1.15rem band.
- **Do** reserve glass/blur for genuine pause-moments (auth gate, reveal-gates) — it signals "the product is deliberately pausing you here."
- **Do** keep idle motion (float, shimmer) adaptive — respect `performance-mode` and `ios-optimized` so richness never costs reliability or accessibility.
- **Do** give every light-theme token a dark-theme counterpart before shipping a new surface.

### Don't:
- **Don't** introduce manufactured urgency — no countdown timers, no red alarm-toned upsell banners, no scarcity language in Pro/God Mode gating.
- **Don't** use gold anywhere except the Pro/God Mode badge; its rarity is what makes it register as a reward.
- **Don't** apply glass/blur as a default card treatment — it's reserved for gate moments, not decoration.
- **Don't** use `border-left`/`border-right` colored stripes as an accent device anywhere in this system.
- **Don't** use gradient text (`background-clip: text` + gradient) for emphasis — this system's emphasis tool is weight, not gradient.
- **Don't** stack more than one status color in the same component; a card is either neutral, success, warning, or error, never mixed.
