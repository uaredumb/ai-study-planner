import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { CLAMP, COLORS, EASE, fontFamily } from "../brand";
import { GlowOrb } from "../components/GlowOrb";
import { KineticText } from "../components/KineticText";

// Scene 5 (0:25–0:30): dark indigo settle, orb pulse, wordmark, tagline, URL.

export const CTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const s = Math.min(width, height) / 1080;

  const settle = interpolate(frame, [0, 30], [0, 1], { ...CLAMP, easing: EASE });
  const orbIn = interpolate(frame, [0, 18], [0, 1], { ...CLAMP, easing: EASE });
  const urlIn = interpolate(frame, [46, 66], [0, 1], { ...CLAMP, easing: EASE });

  return (
    <AbsoluteFill>
      {/* settle into a deep indigo radial gradient */}
      <AbsoluteFill
        style={{
          opacity: settle * 0.85,
          background: `radial-gradient(ellipse at 50% 42%, rgba(99,102,241,0.28) 0%, rgba(49,46,129,0.18) 40%, ${COLORS.bg} 78%)`,
        }}
      />
      <AbsoluteFill
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 42 * s,
        }}
      >
        <div style={{ opacity: orbIn, scale: String(orbIn) }}>
          <GlowOrb size={185 * s} glow={1} />
        </div>

        <KineticText delay={10} fontSize={96 * s} weight={800}>
          Lumi Study
        </KineticText>

        <KineticText delay={24} fontSize={48 * s} weight={500} color={COLORS.textDim}>
          Study smarter. Free to start.
        </KineticText>

        <div
          style={{
            fontFamily,
            fontSize: 46 * s,
            fontWeight: 700,
            color: COLORS.teal,
            opacity: urlIn,
            translate: `0px ${(1 - urlIn) * 24 * s}px`,
            textShadow: `0 0 ${28 * s * urlIn}px rgba(16,185,129,0.6)`,
          }}
        >
          lumistudy.org
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
