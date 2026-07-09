# Changelog

## 2026-07-08

- Added `PRODUCT.md` capturing strategic design context: register (product), target users (stressed/cramming students), brand personality (calm, clear, trustworthy), anti-references, and design principles.
- Added `DESIGN.md` documenting the existing visual system (colors, typography, elevation, components, do's/don'ts) extracted from the current codebase, anchored on the "Calm Command Center" north star.
- Added `.impeccable/design.json` as a machine-readable design-token sidecar (tonal ramps, motion tokens, component snippets).
- Added `.impeccable/live/config.json` to pre-configure `/impeccable live` for this multi-page static site.
- Added `CLAUDE.md` with a pointer section to the new design context files.
- Fixed contrast-floor violations in `index.html`: bare `text-slate-400` on light surfaces upgraded to the `text-slate-500 dark:text-slate-400` pattern for AA contrast; stray indigo/violet color references normalized to the brand token.
- Aligned Hero, Features, Pricing, use-case cards, and final CTA sections in `index.html` with `DESIGN_SYSTEM.md`:
  - Hero: removed duplicate gradient-text instance, fixed section rhythm (`py-20`/`py-28`), upgraded demo link to the documented secondary-button pattern.
  - Features grid: upgraded icon tiles to the brand-register spec (64px, gradient fill, shadow-glow) to match How-it-Works; fixed "Five ways" copy/card-count mismatch.
  - Use-case cards: applied the same icon-tile upgrade; replaced the one-off `.testi` hover class with the shared `.lift-card` pattern.
  - Pricing: gave every plan its own CTA instead of a single link below the grid; swapped the Pro card's amber border for brand (amber reserved for quiz identity/BEST VALUE/warnings); demoted the now-redundant bottom link off `shadow-glow`.
  - Final CTA: normalized button weight to `font-semibold`, constrained the headline measure, added breathing room.
