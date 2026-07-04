import { useState } from "react";
import { useMotionValueEvent, type MotionValue } from "framer-motion";

function interpolate(value: number, domain: readonly [number, number], range: readonly [number, number]) {
  const [d0, d1] = domain;
  const [r0, r1] = range;
  const t = d1 === d0 ? 1 : Math.min(1, Math.max(0, (value - d0) / (d1 - d0)));
  return r0 + (r1 - r0) * t;
}

/**
 * Scroll-driven opacity as plain React state rather than a raw `useTransform` MotionValue.
 * Framer Motion's `opacity` style application has been observed, in this project's Framer
 * Motion + React 19 combination, to silently stop committing to the DOM on some elements
 * mid-scroll (other motion-value-driven style props like `x`/`y`/`rotate`/`scale` on the very
 * same element keep updating correctly). Driving opacity as component state — the same
 * pattern already used for the click-to-expand `dimmed` opacity elsewhere in this scene —
 * sidesteps that code path entirely.
 */
export function useScrollOpacity(
  scrollProgress: MotionValue<number>,
  domain: readonly [number, number],
  range: readonly [number, number],
) {
  const [value, setValue] = useState(() => interpolate(scrollProgress.get(), domain, range));
  useMotionValueEvent(scrollProgress, "change", (v) => setValue(interpolate(v, domain, range)));
  return value;
}
