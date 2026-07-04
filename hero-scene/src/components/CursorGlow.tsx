import { motion, useTransform, type MotionValue } from "framer-motion";
import { CURSOR_GLOW_CONFIG } from "../constants/hero";
import { COLORS } from "../constants/theme";

interface CursorGlowProps {
  cursorX: MotionValue<number>;
  cursorY: MotionValue<number>;
}

/** Ambient radial light that trails the cursor, giving the scene a reactive, lit-from-within feel. */
export function CursorGlow({ cursorX, cursorY }: CursorGlowProps) {
  const translateX = useTransform(cursorX, (value) => `${value * 30}vw`);
  const translateY = useTransform(cursorY, (value) => `${value * 30}vh`);

  return (
    <motion.div
      aria-hidden
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        width: CURSOR_GLOW_CONFIG.sizePx,
        height: CURSOR_GLOW_CONFIG.sizePx,
        marginLeft: -CURSOR_GLOW_CONFIG.sizePx / 2,
        marginTop: -CURSOR_GLOW_CONFIG.sizePx / 2,
        borderRadius: "50%",
        background: `radial-gradient(circle, ${COLORS.indigo}${Math.round(
          CURSOR_GLOW_CONFIG.opacity * 255,
        ).toString(16)} 0%, transparent 70%)`,
        translateX,
        translateY,
        pointerEvents: "none",
        filter: "blur(10px)",
      }}
    />
  );
}
