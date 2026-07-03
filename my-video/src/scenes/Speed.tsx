import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { CLAMP, COLORS, EASE, fontFamily } from "../brand";
import { KineticText } from "../components/KineticText";

// Scene 4 (0:20–0:25): progress ring races 0→100%.
// "From notes to studying — in seconds."

export const Speed: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const s = Math.min(width, height) / 1080;

  const ringSize = 280 * s;
  const stroke = 18 * s;
  const r = (ringSize - stroke) / 2;
  const c = 2 * Math.PI * r;

  const progress = interpolate(frame, [8, 58], [0, 1], { ...CLAMP, easing: EASE });
  const pct = Math.round(progress * 100);
  const done = progress >= 1;

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 64 * s,
      }}
    >
      <div
        style={{
          position: "relative",
          width: ringSize,
          height: ringSize,
          filter: done ? `drop-shadow(0 0 ${26 * s}px rgba(16,185,129,0.5))` : undefined,
        }}
      >
        <svg width={ringSize} height={ringSize}>
          <defs>
            <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={COLORS.indigo} />
              <stop offset="100%" stopColor={COLORS.teal} />
            </linearGradient>
          </defs>
          <circle
            cx={ringSize / 2}
            cy={ringSize / 2}
            r={r}
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth={stroke}
          />
          <circle
            cx={ringSize / 2}
            cy={ringSize / 2}
            r={r}
            fill="none"
            stroke="url(#ringGrad)"
            strokeWidth={stroke}
            strokeLinecap="round"
            strokeDasharray={c}
            strokeDashoffset={c * (1 - progress)}
            transform={`rotate(-90 ${ringSize / 2} ${ringSize / 2})`}
          />
        </svg>
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily,
            fontSize: 68 * s,
            fontWeight: 800,
            color: done ? COLORS.teal : COLORS.text,
          }}
        >
          {pct}%
        </div>
      </div>

      <KineticText delay={52} fontSize={64 * s} weight={700} style={{ maxWidth: width * 0.85 }}>
        From notes to studying — in seconds.
      </KineticText>
    </AbsoluteFill>
  );
};
