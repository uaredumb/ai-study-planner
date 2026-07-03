import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { CLAMP, COLORS, EASE, EASE_BACK, fontFamily } from "../brand";
import { FeatureCard } from "../components/FeatureCard";
import { KineticText } from "../components/KineticText";

// Scene 3 (0:12–0:20): staggered reveals of the four output types.

const Line: React.FC<{ w: string; s: number; delay: number; color?: string }> = ({
  w,
  s,
  delay,
  color = "rgba(255,255,255,0.35)",
}) => {
  const frame = useCurrentFrame();
  const grow = interpolate(frame, [delay, delay + 14], [0, 1], {
    ...CLAMP,
    easing: EASE,
  });
  return (
    <div
      style={{
        height: 9 * s,
        width: w,
        borderRadius: 5,
        background: color,
        scale: `${grow} 1`,
        transformOrigin: "left",
      }}
    />
  );
};

const NotesIcon: React.FC<{ s: number; delay: number }> = ({ s, delay }) => (
  <div
    style={{
      width: 150 * s,
      height: 130 * s,
      borderRadius: 14 * s,
      background: "rgba(255,255,255,0.07)",
      border: `1.5px solid ${COLORS.panelBorder}`,
      padding: 20 * s,
      display: "flex",
      flexDirection: "column",
      gap: 13 * s,
    }}
  >
    <Line w="60%" s={s} delay={delay + 8} color={COLORS.indigo} />
    <Line w="95%" s={s} delay={delay + 14} />
    <Line w="85%" s={s} delay={delay + 20} />
    <Line w="70%" s={s} delay={delay + 26} />
  </div>
);

const FlashcardIcon: React.FC<{ s: number; delay: number }> = ({ s, delay }) => {
  const frame = useCurrentFrame();
  const flip = interpolate(frame - delay, [26, 56], [0, 180], {
    ...CLAMP,
    easing: EASE,
  });
  const showBack = flip > 90;
  return (
    <div style={{ position: "relative", width: 170 * s, height: 120 * s }}>
      {/* stack behind */}
      {[2, 1].map((o) => (
        <div
          key={o}
          style={{
            position: "absolute",
            inset: 0,
            translate: `${o * 9 * s}px ${o * 9 * s}px`,
            borderRadius: 14 * s,
            background: "rgba(255,255,255,0.05)",
            border: `1.5px solid rgba(99,102,241,0.18)`,
          }}
        />
      ))}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: 14 * s,
          background: showBack
            ? `linear-gradient(135deg, ${COLORS.teal}, #059669)`
            : `linear-gradient(135deg, ${COLORS.indigo}, ${COLORS.indigoDeep})`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily,
          fontSize: 46 * s,
          fontWeight: 800,
          color: "#fff",
          rotate: `y ${flip}deg`,
        }}
      >
        <span style={{ rotate: showBack ? "y 180deg" : "y 0deg" }}>
          {showBack ? "A" : "Q"}
        </span>
      </div>
    </div>
  );
};

const QuizIcon: React.FC<{ s: number; delay: number }> = ({ s, delay }) => {
  const frame = useCurrentFrame();
  const ping = interpolate(frame - delay, [24, 40], [0, 1], {
    ...CLAMP,
    easing: EASE_BACK,
  });
  const row = (correct: boolean, i: number) => (
    <div
      key={i}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12 * s,
        padding: `${9 * s}px ${14 * s}px`,
        borderRadius: 10 * s,
        width: 165 * s,
        background: correct && ping > 0.4 ? "rgba(16,185,129,0.18)" : "rgba(255,255,255,0.06)",
        border: `1.5px solid ${correct && ping > 0.4 ? COLORS.teal : "rgba(255,255,255,0.1)"}`,
      }}
    >
      <div
        style={{
          width: 26 * s,
          height: 26 * s,
          borderRadius: "50%",
          background: correct ? COLORS.teal : "rgba(255,255,255,0.12)",
          scale: correct ? String(ping) : "1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {correct ? (
          <svg width={15 * s} height={15 * s} viewBox="0 0 24 24" fill="none">
            <path d="M4 12.5 10 18 20 6" stroke="#fff" strokeWidth={3.4} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : null}
      </div>
      <div style={{ height: 8 * s, flex: 1, borderRadius: 4, background: "rgba(255,255,255,0.22)" }} />
    </div>
  );
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 * s }}>
      {row(true, 0)}
      {row(false, 1)}
    </div>
  );
};

const STUDY_TASKS = ["Review notes", "Flashcards", "Take quiz"];

const StudyPlanIcon: React.FC<{ s: number; delay: number }> = ({ s, delay }) => {
  const frame = useCurrentFrame();
  const row = (label: string, i: number) => {
    const checkIn = interpolate(
      frame - delay,
      [22 + i * 10, 34 + i * 10],
      [0, 1],
      { ...CLAMP, easing: EASE_BACK },
    );
    return (
      <div
        key={i}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14 * s,
          width: 195 * s,
          padding: `${10 * s}px ${14 * s}px`,
          borderRadius: 10 * s,
          background: "rgba(255,255,255,0.06)",
          border: "1.5px solid rgba(255,255,255,0.1)",
        }}
      >
        <div
          style={{
            fontFamily,
            fontSize: 18 * s,
            fontWeight: 600,
            color: COLORS.text,
            flex: 1,
            whiteSpace: "nowrap",
          }}
        >
          {label}
        </div>
        <div
          style={{
            width: 24 * s,
            height: 24 * s,
            flexShrink: 0,
            borderRadius: "50%",
            background: COLORS.teal,
            scale: String(checkIn),
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width={14 * s} height={14 * s} viewBox="0 0 24 24" fill="none">
            <path
              d="M4 12.5 10 18 20 6"
              stroke="#fff"
              strokeWidth={3.4}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    );
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 11 * s }}>
      {STUDY_TASKS.map((t, i) => row(t, i))}
    </div>
  );
};

export const Features: React.FC = () => {
  const { width, height } = useVideoConfig();
  const s = Math.min(width, height) / 1080;
  const cardW = 370 * s;
  const cardH = 330 * s;
  const delays = [16, 44, 72, 100];

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 56 * s,
      }}
    >
      <KineticText delay={2} fontSize={62 * s} weight={700} style={{ maxWidth: width * 0.85 }}>
        Out comes everything you need.
      </KineticText>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 34 * s,
          maxWidth: width * 0.92,
        }}
      >
        <FeatureCard delay={delays[0]} width={cardW} height={cardH} s={s} caption="Clean notes.">
          <NotesIcon s={s} delay={delays[0]} />
        </FeatureCard>
        <FeatureCard delay={delays[1]} width={cardW} height={cardH} s={s} caption="Flashcards.">
          <FlashcardIcon s={s} delay={delays[1]} />
        </FeatureCard>
        <FeatureCard delay={delays[2]} width={cardW} height={cardH} s={s} caption="Quizzes.">
          <QuizIcon s={s} delay={delays[2]} />
        </FeatureCard>
        <FeatureCard delay={delays[3]} width={cardW} height={cardH} s={s} caption="Study plan.">
          <StudyPlanIcon s={s} delay={delays[3]} />
        </FeatureCard>
      </div>
    </AbsoluteFill>
  );
};
