// Brand tokens ported from `my-video/src/brand.ts` — keep in sync with the
// Lumi Study brand bible (Outfit font, indigo/teal palette, custom easings).

export const COLORS = {
  indigo: "#6366F1",
  indigoDeep: "#4F46E5",
  indigoDark: "#312E81",
  teal: "#10B981",
  bg: "#0B0B14",
  panel: "#14141F",
  panelBorder: "rgba(99, 102, 241, 0.25)",
  text: "#F5F5F7",
  textDim: "rgba(245, 245, 247, 0.62)",
} as const;

export const FONT_FAMILY = "'Outfit', system-ui, sans-serif";

// Matches the site-wide cubic-bezier(.16,1,.3,1) easeOutExpo used across lumistudy.org
export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;
// Gentle overshoot for pops
export const EASE_BACK = [0.34, 1.56, 0.64, 1] as const;
// Accelerating suck-in, used for the scroll-zoom-in-to-orb motion
export const EASE_IN = [0.55, 0, 0.85, 0.35] as const;
