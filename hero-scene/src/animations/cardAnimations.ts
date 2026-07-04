import type { Variants } from "framer-motion";
import { EASE_BACK, EASE_OUT_EXPO } from "../constants/theme";

export const headingFade: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE_OUT_EXPO } },
};

export const cardExpandTransition = {
  type: "spring" as const,
  stiffness: 260,
  damping: 26,
};

export const cardHover = {
  y: -8,
  scale: 1.03,
  transition: { duration: 0.35, ease: EASE_BACK },
};
