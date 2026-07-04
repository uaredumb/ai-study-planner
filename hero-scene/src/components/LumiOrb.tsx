import { motion, useMotionTemplate, useTransform, type MotionValue } from "framer-motion";
import { ORB_CONFIG } from "../constants/hero";
import { COLORS } from "../constants/theme";
import { orbBreathe, orbEntrance } from "../animations/orbAnimations";

interface LumiOrbProps {
  cursorX: MotionValue<number>;
  cursorY: MotionValue<number>;
  scrollScale: MotionValue<number>;
  reduced?: boolean;
}

/** The glowing Lumi orb — hero centerpiece. Drifts toward the cursor and scales with scroll. */
export function LumiOrb({ cursorX, cursorY, scrollScale, reduced = false }: LumiOrbProps) {
  const driftRangePx = ORB_CONFIG.baseSizePx * ORB_CONFIG.cursorInfluence * 10;
  const driftX = useTransform(cursorX, [-1, 1], [-driftRangePx, driftRangePx]);
  const driftY = useTransform(cursorY, [-1, 1], [-driftRangePx, driftRangePx]);
  const highlightX = useTransform(cursorX, [-1, 1], ["30%", "70%"]);
  const highlightY = useTransform(cursorY, [-1, 1], ["30%", "70%"]);
  const highlightBackground = useMotionTemplate`radial-gradient(circle at ${highlightX} ${highlightY}, #ffffff55 0%, ${COLORS.indigo} 35%, ${COLORS.indigoDeep} 70%, ${COLORS.indigoDark} 100%)`;
  const staticBackground = `radial-gradient(circle at 50% 50%, #ffffff55 0%, ${COLORS.indigo} 35%, ${COLORS.indigoDeep} 70%, ${COLORS.indigoDark} 100%)`;

  return (
    <motion.div
      role="img"
      aria-label="Glowing Lumi orb"
      style={{
        position: "relative",
        width: ORB_CONFIG.baseSizePx,
        height: ORB_CONFIG.baseSizePx,
        x: reduced ? 0 : driftX,
        y: reduced ? 0 : driftY,
        scale: scrollScale,
      }}
      variants={orbEntrance}
      initial="hidden"
      animate="visible"
    >
      {Array.from({ length: ORB_CONFIG.glowLayers }).map((_, layerIndex) => (
        <motion.div
          key={layerIndex}
          aria-hidden
          animate={
            reduced
              ? undefined
              : {
                  opacity: [0.5, 0.85, 0.5],
                  scale: [1, 1.08, 1],
                }
          }
          transition={
            reduced
              ? undefined
              : {
                  duration: 4 + layerIndex * 1.5,
                  delay: layerIndex * 0.4,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "mirror",
                }
          }
          style={{
            position: "absolute",
            inset: -40 - layerIndex * 24,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${COLORS.indigo}33 0%, ${COLORS.teal}11 55%, transparent 75%)`,
            filter: `blur(${18 + layerIndex * 10}px)`,
          }}
        />
      ))}

      <motion.div
        aria-hidden
        animate={reduced ? undefined : orbBreathe(ORB_CONFIG.breatheDurationS)}
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          background: reduced ? staticBackground : highlightBackground,
          boxShadow: `0 0 80px 10px ${COLORS.indigo}55, inset 0 0 40px ${COLORS.indigoDark}`,
        }}
      />

      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: "18%",
          borderRadius: "50%",
          background: "radial-gradient(circle at 35% 30%, #ffffff90 0%, transparent 55%)",
          mixBlendMode: "overlay",
        }}
      />
    </motion.div>
  );
}
