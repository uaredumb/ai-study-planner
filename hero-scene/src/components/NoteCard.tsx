import { memo } from "react";
import { motion, useTransform, type MotionValue } from "framer-motion";
import type { NoteCardData } from "../constants/chaosClarity";
import { TRANSFORM_CONFIG } from "../constants/chaosClarity";
import { COLORS } from "../constants/theme";
import { cardExpandTransition, cardHover } from "../animations/cardAnimations";
import { useScrollOpacity } from "../hooks/useScrollOpacity";
import { MessyNote } from "./MessyNote";
import { SpotlightCard } from "./SpotlightCard";
import { ICONS } from "./icons";

function OutputCardBody({ data }: { data: NoteCardData }) {
  const Icon = ICONS[data.icon];
  return (
    <>
      <div
        style={{
          width: 34,
          height: 34,
          borderRadius: 10,
          background: `${COLORS.indigo}22`,
          color: COLORS.indigo,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 10,
        }}
      >
        <Icon width={18} height={18} />
      </div>
      <h3 style={{ margin: "0 0 6px", color: COLORS.text, fontSize: 16, fontWeight: 600 }}>{data.organizedTitle}</h3>
      <p style={{ margin: 0, color: COLORS.textDim, fontSize: 13, lineHeight: 1.45 }}>{data.organizedBody}</p>
    </>
  );
}

const { organizeStart, organizeEnd } = TRANSFORM_CONFIG;
const midpoint = (organizeStart + organizeEnd) / 2;

interface NoteCardMorphProps {
  data: NoteCardData;
  scrollProgress: MotionValue<number>;
  reduced: boolean;
}

/**
 * Pure scroll-scrubbed visual: chaos-scattered sticky note morphing into the organized
 * output card. Memoized on stable props only (never `interactive`/`isExpanded`/`dimmed`).
 * Position/rotate/scale are raw `useTransform` motion values; opacity uses `useScrollOpacity`
 * (state-based) instead — see that hook for why.
 */
const NoteCardMorph = memo(function NoteCardMorph({ data, scrollProgress, reduced }: NoteCardMorphProps) {
  const { chaos, organized } = data;

  const xPct = useTransform(
    scrollProgress,
    [0, organizeStart, organizeEnd, 1],
    reduced ? [organized.xPct, organized.xPct, organized.xPct, organized.xPct] : [chaos.xPct, chaos.xPct, organized.xPct, organized.xPct],
  );
  const yPct = useTransform(
    scrollProgress,
    [0, organizeStart, organizeEnd, 1],
    reduced ? [organized.yPct, organized.yPct, organized.yPct, organized.yPct] : [chaos.yPct, chaos.yPct, organized.yPct, organized.yPct],
  );
  const rotate = useTransform(
    scrollProgress,
    [organizeStart, organizeEnd],
    reduced ? [0, 0] : [chaos.rotateDeg, 0],
  );
  const scale = useTransform(scrollProgress, [organizeStart, organizeEnd], reduced ? [1, 1] : [chaos.scale, 1]);
  const left = useTransform(xPct, (v) => `${v}%`);
  const top = useTransform(yPct, (v) => `${v}%`);

  const messyOpacity = useScrollOpacity(scrollProgress, [organizeStart, midpoint], reduced ? [0, 0] : [1, 0]);
  const organizedOpacity = useScrollOpacity(scrollProgress, [midpoint, organizeEnd], reduced ? [1, 1] : [0, 1]);

  const sharedPosition = {
    position: "absolute" as const,
    left,
    top,
    width: "clamp(180px, 24vw, 240px)",
    height: "clamp(150px, 15vw, 172px)",
    translateX: "-50%",
    translateY: "-50%",
    rotate,
    scale,
  };

  return (
    <>
      {/* Messy sticky-note layer */}
      <motion.div aria-hidden style={{ ...sharedPosition, opacity: messyOpacity, pointerEvents: "none" }}>
        <MessyNote text={data.messyText} />
      </motion.div>

      {/* Organized, spotlight-card layer: pure scroll-driven crossfade. Fades to fully opaque
          and stays that way; the interactive layer (sibling in NoteCard) sits on top of it
          once scroll settles, so no visibility toggling is needed here. */}
      <motion.div aria-hidden style={{ ...sharedPosition, opacity: organizedOpacity }}>
        <SpotlightCard animated={!reduced}>
          <OutputCardBody data={data} />
        </SpotlightCard>
      </motion.div>
    </>
  );
});

interface NoteCardProps {
  data: NoteCardData;
  scrollProgress: MotionValue<number>;
  reduced: boolean;
  /** True once scroll has settled past the organize band — cards become clickable. */
  interactive: boolean;
  isExpanded: boolean;
  dimmed: boolean;
  onToggle: () => void;
}

/**
 * One "note": a memoized, purely scroll-driven `NoteCardMorph` underneath, plus a thin
 * interactive overlay (click-to-focus, using a real Framer `layout` transition) that only
 * mounts once scroll has settled. The overlay is statically positioned (no scroll motion
 * values) so it can freely re-render on `interactive`/`isExpanded`/`dimmed` changes without
 * touching anything scroll-driven.
 */
export function NoteCard({ data, scrollProgress, reduced, interactive, isExpanded, dimmed, onToggle }: NoteCardProps) {
  const { organized } = data;

  return (
    <>
      <NoteCardMorph data={data} scrollProgress={scrollProgress} reduced={reduced} />

      {interactive && (
        <motion.div
          layout
          transition={cardExpandTransition}
          whileHover={cardHover}
          onClick={onToggle}
          role="button"
          aria-pressed={isExpanded}
          aria-label={`${data.organizedTitle}: ${data.organizedBody}`}
          style={{
            position: "absolute",
            left: `${organized.xPct}%`,
            top: `${organized.yPct}%`,
            width: "clamp(180px, 24vw, 240px)",
            height: "clamp(150px, 15vw, 172px)",
            translateX: "-50%",
            translateY: "-50%",
            cursor: "pointer",
            zIndex: isExpanded ? 20 : 1,
            opacity: dimmed ? 0.45 : 1,
            scale: isExpanded ? 1.16 : 1,
          }}
        >
          <SpotlightCard animated={!reduced}>
            <OutputCardBody data={data} />
          </SpotlightCard>
        </motion.div>
      )}
    </>
  );
}
