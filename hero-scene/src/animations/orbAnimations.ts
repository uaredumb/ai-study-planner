import type { Variants } from "framer-motion";
import { EASE_BACK, EASE_OUT_EXPO } from "../constants/theme";

export const orbEntrance: Variants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.1, ease: EASE_BACK },
  },
};

export const orbBreathe = (durationS: number) => ({
  scale: [1, 1.04, 1],
  transition: {
    duration: durationS,
    ease: EASE_OUT_EXPO,
    repeat: Infinity,
    repeatType: "mirror" as const,
  },
});

export const glowPulse = (durationS: number, delayS: number) => ({
  opacity: [0.5, 0.85, 0.5],
  scale: [1, 1.08, 1],
  transition: {
    duration: durationS,
    delay: delayS,
    ease: EASE_OUT_EXPO,
    repeat: Infinity,
    repeatType: "mirror" as const,
  },
});
