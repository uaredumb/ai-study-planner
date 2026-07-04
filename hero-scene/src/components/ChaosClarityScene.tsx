import { memo, useRef, useState } from "react";
import { motion, useMotionValueEvent, useTransform, type MotionValue } from "framer-motion";
import { useHeroScrollProgress } from "../hooks/useHeroScrollProgress";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { useScrollOpacity } from "../hooks/useScrollOpacity";
import { NOTE_CARDS, TRANSFORM_CONFIG } from "../constants/chaosClarity";
import { COLORS, FONT_FAMILY } from "../constants/theme";
import { headingFade } from "../animations/cardAnimations";
import { NoteCard } from "./NoteCard";
import { AIBeam } from "./AIBeam";

const { organizeStart, organizeEnd } = TRANSFORM_CONFIG;

interface CrossfadeHeadingProps {
  scrollProgress: MotionValue<number>;
  reduced: boolean;
}

/**
 * Pure scroll-scrubbed heading crossfade, memoized on stable props only. Kept out of
 * ChaosClarityScene's own render body so it never re-renders when `interactive`/`expandedId`
 * change there. Opacity uses `useScrollOpacity` (state-based) rather than a raw `useTransform`
 * motion value — see that hook for why; `y` stays a real motion value since transform-category
 * props haven't shown this issue.
 */
const CrossfadeHeading = memo(function CrossfadeHeading({ scrollProgress, reduced }: CrossfadeHeadingProps) {
  const messyHeadingOpacity = useScrollOpacity(scrollProgress, [0, organizeStart], reduced ? [0, 0] : [1, 0]);
  const clarityHeadingOpacity = useScrollOpacity(scrollProgress, [organizeEnd, organizeEnd + 0.08], [0, 1]);
  const messyY = useTransform(scrollProgress, [0, organizeStart], reduced ? [0, 0] : [0, -10]);
  const clarityY = useTransform(scrollProgress, [organizeEnd, organizeEnd + 0.08], [10, 0]);

  return (
    <div style={{ position: "relative", height: "1.3em", marginTop: 8 }}>
      <motion.h2
        style={{
          position: "absolute",
          inset: 0,
          margin: 0,
          color: COLORS.text,
          fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
          fontWeight: 700,
          opacity: reduced ? 0 : messyHeadingOpacity,
          y: reduced ? 0 : messyY,
        }}
      >
        Messy notes.
      </motion.h2>
      <motion.h2
        style={{
          position: "absolute",
          inset: 0,
          margin: 0,
          color: COLORS.text,
          fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
          fontWeight: 700,
          opacity: reduced ? 1 : clarityHeadingOpacity,
          y: reduced ? 0 : clarityY,
        }}
      >
        Structured clarity.
      </motion.h2>
    </div>
  );
});

/**
 * Scene 2: Chaos -> Clarity.
 * A tall scroll track wraps a sticky viewport; scrolling through it morphs a scatter of
 * hand-scrawled notes into Lumi's structured study outputs (Clean Notes, Flashcards,
 * Study Plan, Quiz, Tasks). Once settled, the organized cards are click-to-focus,
 * demonstrating an interaction-driven Framer Motion layout transition on top of the
 * scroll-driven morph.
 */
export function ChaosClarityScene() {
  const trackRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const scrollProgress = useHeroScrollProgress(trackRef);
  const [interactive, setInteractive] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useMotionValueEvent(scrollProgress, "change", (value) => {
    setInteractive(value >= organizeEnd);
  });

  return (
    <section
      ref={trackRef}
      style={{ height: `${TRANSFORM_CONFIG.scrollHeights * 100}vh`, position: "relative" }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          width: "100%",
          overflow: "hidden",
          background: `linear-gradient(180deg, ${COLORS.bg} 0%, ${COLORS.panel} 100%)`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ position: "absolute", top: "10%", width: "100%", textAlign: "center", fontFamily: FONT_FAMILY }}>
          <motion.p
            variants={headingFade}
            initial="hidden"
            animate="visible"
            style={{ color: COLORS.textDim, letterSpacing: "0.2em", textTransform: "uppercase", fontSize: 13, margin: 0 }}
          >
            How Lumi works
          </motion.p>
          <CrossfadeHeading scrollProgress={scrollProgress} reduced={reduced} />
        </div>

        <div
          style={{
            position: "relative",
            width: "min(92vw, 1100px)",
            height: "min(70vh, 620px)",
          }}
        >
          <AIBeam scrollProgress={scrollProgress} reduced={reduced} />

          {NOTE_CARDS.map((card) => (
            <NoteCard
              key={card.id}
              data={card}
              scrollProgress={scrollProgress}
              reduced={reduced}
              interactive={interactive}
              isExpanded={expandedId === card.id}
              dimmed={interactive && expandedId !== null && expandedId !== card.id}
              onToggle={() => setExpandedId((current) => (current === card.id ? null : card.id))}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
