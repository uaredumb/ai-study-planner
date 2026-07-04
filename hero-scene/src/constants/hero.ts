// Tunable knobs for Scene 1 — kept separate from components so the feel of
// the hero can be adjusted without touching animation/render logic.

export const ORB_CONFIG = {
  baseSizePx: 260,
  glowLayers: 3,
  breatheDurationS: 6,
  cursorInfluence: 0.06, // how far the orb drifts toward the cursor (fraction of viewport)
} as const;

export const CURSOR_GLOW_CONFIG = {
  sizePx: 520,
  opacity: 0.35,
  followEase: 0.15, // 0-1, lower = laggier / smoother trailing light
} as const;

export const PARTICLE_CONFIG = {
  count: 60,
  minSizePx: 1,
  maxSizePx: 3,
  minDurationS: 8,
  maxDurationS: 22,
  colors: ["#6366F1", "#10B981", "#F5F5F7"],
} as const;

export const SCROLL_ZOOM_CONFIG = {
  // Scroll distance (in viewport heights) over which the camera "zooms" into the orb
  scrollHeights: 2.5,
  orbMaxScale: 6,
  contentFadeOutAt: 0.35, // fraction of scroll progress where hero text is fully faded
} as const;
