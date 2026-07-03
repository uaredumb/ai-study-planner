import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { CLAMP, COLORS, EASE, EASE_IN } from "../brand";
import { GlowOrb } from "../components/GlowOrb";
import { KineticText } from "../components/KineticText";

// Scene 1 (0:00–0:06): messy notes fly in chaotically, get sucked into the orb.
// "Studying shouldn't feel like this."

type Frag = { x: number; y: number; rot: number; delay: number; pdf?: boolean };

const FRAGMENTS: Frag[] = [
  { x: -0.42, y: -0.38, rot: -16, delay: 4, pdf: true },
  { x: 0.44, y: -0.32, rot: 12, delay: 9 },
  { x: -0.48, y: 0.3, rot: 8, delay: 13 },
  { x: 0.4, y: 0.36, rot: -10, delay: 17, pdf: true },
  { x: 0.02, y: -0.46, rot: 20, delay: 22 },
  { x: -0.1, y: 0.45, rot: -22, delay: 26 },
];

const PaperCard: React.FC<{ s: number; pdf?: boolean }> = ({ s, pdf }) => (
  <div
    style={{
      width: 290 * s,
      height: 195 * s,
      borderRadius: 12 * s,
      background: "#E9EBF2",
      boxShadow: "0 12px 40px rgba(0,0,0,0.45)",
      padding: 20 * s,
      display: "flex",
      flexDirection: "column",
      gap: 12 * s,
    }}
  >
    {pdf ? (
      <div
        style={{
          alignSelf: "flex-start",
          padding: `${3 * s}px ${10 * s}px`,
          borderRadius: 6 * s,
          background: "#DC2626",
          color: "#fff",
          fontSize: 15 * s,
          fontWeight: 700,
          fontFamily: "sans-serif",
        }}
      >
        PDF
      </div>
    ) : null}
    {[0.95, 0.8, 0.9, 0.6, 0.85].map((w, i) => (
      <div
        key={i}
        style={{
          height: 9 * s,
          width: `${w * 100}%`,
          borderRadius: 5,
          background: i === 2 ? "#B6BCD1" : "#C8CDDD",
        }}
      />
    ))}
  </div>
);

export const Hook: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const s = Math.min(width, height) / 1080;

  // Orb grows slightly as it "absorbs" the mess
  const orbIn = interpolate(frame, [0, 22], [0, 1], { ...CLAMP, easing: EASE });
  const orbGrow = interpolate(frame, [30, 92], [1, 1.16], { ...CLAMP, easing: EASE });

  // Flash when absorption completes
  const flash = interpolate(frame, [86, 92, 104], [0, 0.22, 0], CLAMP);

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 80 * s,
      }}
    >
      {/* flying fragments — absolute layer behind the orb */}
      <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
        {FRAGMENTS.map((f, i) => {
          const p = interpolate(frame, [f.delay, f.delay + 58], [0, 1], {
            ...CLAMP,
            easing: EASE_IN,
          });
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                translate: `${f.x * width * (1 - p)}px ${f.y * height * (1 - p)}px`,
                rotate: `${f.rot + p * 150}deg`,
                scale: String(interpolate(p, [0, 1], [1, 0.04])),
                opacity: interpolate(p, [0, 0.82, 1], [1, 1, 0]),
              }}
            >
              <PaperCard s={s} pdf={f.pdf} />
            </div>
          );
        })}
      </AbsoluteFill>

      <div style={{ opacity: orbIn, scale: String(orbIn * orbGrow) }}>
        <GlowOrb size={190 * s} />
      </div>

      <KineticText delay={96} fontSize={84 * s} weight={700} style={{ maxWidth: width * 0.82 }}>
        Studying shouldn&rsquo;t feel like this.
      </KineticText>

      <AbsoluteFill style={{ background: COLORS.text, opacity: flash, pointerEvents: "none" }} />
    </AbsoluteFill>
  );
};
