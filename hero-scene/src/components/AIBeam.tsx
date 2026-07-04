import { motion, useTransform, type MotionValue } from "framer-motion";
import { TRANSFORM_CONFIG } from "../constants/chaosClarity";
import { COLORS, FONT_FAMILY } from "../constants/theme";

interface AIBeamProps {
  scrollProgress: MotionValue<number>;
  reduced: boolean;
}

const { beamStart, beamEnd, organizeStart, organizeEnd } = TRANSFORM_CONFIG;

/** A scanning light + label that sweeps across the stage while Lumi "organizes" the notes. */
export function AIBeam({ scrollProgress, reduced }: AIBeamProps) {
  const bandOpacity = useTransform(
    scrollProgress,
    [beamStart, organizeStart, organizeEnd, beamEnd],
    [0, 1, 1, 0],
  );
  const beamX = useTransform(scrollProgress, [beamStart, beamEnd], ["-15%", "115%"]);

  if (reduced) {
    return (
      <motion.p
        style={{
          position: "absolute",
          top: "6%",
          width: "100%",
          textAlign: "center",
          color: COLORS.teal,
          fontFamily: FONT_FAMILY,
          fontSize: 13,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          opacity: bandOpacity,
        }}
      >
        Lumi is organizing your notes
      </motion.p>
    );
  }

  return (
    <>
      <motion.div
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          width: "18%",
          left: beamX,
          background: `linear-gradient(90deg, transparent, ${COLORS.teal}33, ${COLORS.indigo}33, transparent)`,
          opacity: bandOpacity,
          pointerEvents: "none",
          filter: "blur(6px)",
        }}
      />
      <motion.div
        style={{
          position: "absolute",
          top: "4%",
          width: "100%",
          textAlign: "center",
          opacity: bandOpacity,
        }}
      >
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 14px",
            borderRadius: 999,
            background: `${COLORS.panel}cc`,
            border: `1px solid ${COLORS.panelBorder}`,
            color: COLORS.teal,
            fontFamily: FONT_FAMILY,
            fontSize: 12.5,
            letterSpacing: "0.04em",
          }}
        >
          <motion.span
            aria-hidden
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
            style={{ width: 6, height: 6, borderRadius: "50%", background: COLORS.teal }}
          />
          Lumi is organizing your notes…
        </span>
      </motion.div>
    </>
  );
}
