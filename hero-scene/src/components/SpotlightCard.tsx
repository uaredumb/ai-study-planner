import { type ReactNode } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { COLORS } from "../constants/theme";

interface SpotlightCardProps {
  children: ReactNode;
  /** Disables the rotating gradient border + pointer spotlight (kept for reduced-motion / chaos state). */
  animated?: boolean;
}

/**
 * "21st.dev"-style animated card: a slowly rotating conic-gradient ring shows through a 1px
 * padding as a glowing border, plus a pointer-tracked radial spotlight over the glass panel.
 */
export function SpotlightCard({ children, animated = true }: SpotlightCardProps) {
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);
  const spotlightBackground = useMotionTemplate`radial-gradient(220px circle at ${mouseX}% ${mouseY}%, rgba(99,102,241,0.18), transparent 70%)`;

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set(((event.clientX - rect.left) / rect.width) * 100);
    mouseY.set(((event.clientY - rect.top) / rect.height) * 100);
  };

  return (
    <div
      style={{
        position: "relative",
        borderRadius: 20,
        padding: animated ? 1 : 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      {animated && (
        <motion.div
          aria-hidden
          animate={{ rotate: 360 }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
          style={{
            position: "absolute",
            inset: -60,
            background: `conic-gradient(from 0deg, transparent 0%, ${COLORS.teal} 12%, transparent 28%, ${COLORS.indigo} 50%, transparent 65%, ${COLORS.teal} 85%, transparent 100%)`,
          }}
        />
      )}

      <div
        onPointerMove={animated ? handlePointerMove : undefined}
        style={{
          position: "relative",
          height: "100%",
          borderRadius: 19,
          background: `linear-gradient(160deg, ${COLORS.panel} 0%, ${COLORS.bg} 100%)`,
          border: `1px solid ${animated ? "transparent" : COLORS.panelBorder}`,
          overflow: "hidden",
          padding: "18px 20px",
        }}
      >
        {animated && (
          <motion.div
            aria-hidden
            style={{ position: "absolute", inset: 0, background: spotlightBackground, pointerEvents: "none" }}
          />
        )}
        <div style={{ position: "relative" }}>{children}</div>
      </div>
    </div>
  );
}
