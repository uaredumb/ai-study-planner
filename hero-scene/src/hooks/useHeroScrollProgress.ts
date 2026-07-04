import { useScroll } from "framer-motion";
import type { RefObject } from "react";

/**
 * Wraps Framer Motion's scroll tracker for the hero's scroll-track container.
 * `progress` runs 0 -> 1 across the full scrollable height of `containerRef`,
 * driving the camera-zoom-into-the-orb effect.
 */
export function useHeroScrollProgress(containerRef: RefObject<HTMLElement | null>) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return scrollYProgress;
}
