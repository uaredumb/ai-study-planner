import React from "react";
import { AbsoluteFill, random, useCurrentFrame, useVideoConfig } from "remotion";
import { COLORS } from "../brand";

// Subtle looping particle + gradient-blob background. Low opacity by design.
export const Background: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const count = 20;

  return (
    <AbsoluteFill style={{ background: COLORS.bg }}>
      <div
        style={{
          position: "absolute",
          width: width * 0.55,
          height: width * 0.55,
          borderRadius: "50%",
          background: COLORS.indigo,
          opacity: 0.13,
          filter: "blur(160px)",
          left: width * 0.08 + Math.sin(frame / 90) * 40,
          top: -height * 0.15 + Math.cos(frame / 110) * 30,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: width * 0.45,
          height: width * 0.45,
          borderRadius: "50%",
          background: COLORS.teal,
          opacity: 0.07,
          filter: "blur(160px)",
          right: -width * 0.1 + Math.cos(frame / 100) * 40,
          bottom: -height * 0.2 + Math.sin(frame / 85) * 30,
        }}
      />
      {Array.from({ length: count }).map((_, i) => {
        const size = 3 + random(`sz-${i}`) * 5;
        const speed = 0.2 + random(`sp-${i}`) * 0.4;
        const x =
          random(`px-${i}`) * width + Math.sin((frame + i * 47) / 70) * 26;
        const rawY = random(`py-${i}`) * height - frame * speed;
        const y = ((rawY % height) + height) % height;
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: x,
              top: y,
              width: size,
              height: size,
              borderRadius: "50%",
              background: i % 3 === 0 ? COLORS.teal : COLORS.indigo,
              opacity: 0.16 + random(`o-${i}`) * 0.14,
              filter: "blur(1px)",
            }}
          />
        );
      })}
    </AbsoluteFill>
  );
};
