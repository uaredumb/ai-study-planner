import { motion, type MotionValue } from "framer-motion";
import { fadeUpItem, staggerContainer } from "../animations/contentAnimations";
import { COLORS, FONT_FAMILY } from "../constants/theme";

interface HeroContentProps {
  opacity: MotionValue<number>;
}

/** Title/subtitle overlay. Fades out as the user scrolls into the orb. */
export function HeroContent({ opacity }: HeroContentProps) {
  return (
    <motion.div
      style={{ opacity, fontFamily: FONT_FAMILY }}
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="hero-content"
    >
      <motion.p
        variants={fadeUpItem}
        style={{ color: COLORS.textDim, letterSpacing: "0.2em", textTransform: "uppercase", fontSize: 13 }}
      >
        Lumi Study
      </motion.p>
      <motion.h1
        variants={fadeUpItem}
        style={{ color: COLORS.text, fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 700, margin: "0.3em 0" }}
      >
        Meet Lumi.
      </motion.h1>
      <motion.p
        variants={fadeUpItem}
        style={{ color: COLORS.textDim, fontSize: "clamp(1rem, 2vw, 1.25rem)", maxWidth: 480 }}
      >
        Your glowing study companion — scroll to look closer.
      </motion.p>
    </motion.div>
  );
}
