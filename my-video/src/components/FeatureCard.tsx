import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { CLAMP, COLORS, EASE, fontFamily } from "../brand";

// Glassy card that slides+fades in at `delay`, with an icon area and caption.
export const FeatureCard: React.FC<{
  delay: number;
  width: number;
  height: number;
  s: number;
  caption: string;
  children: React.ReactNode;
}> = ({ delay, width, height, s, caption, children }) => {
  const frame = useCurrentFrame();
  const t = frame - delay;
  const appear = (from: number, to: number) =>
    interpolate(t, [0, 20], [from, to], { ...CLAMP, easing: EASE });
  return (
    <div
      style={{
        width,
        height,
        borderRadius: 22 * s,
        background: "rgba(255,255,255,0.045)",
        border: `1.5px solid ${COLORS.panelBorder}`,
        boxShadow: `0 ${18 * s}px ${50 * s}px rgba(0,0,0,0.4)`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 24 * s,
        opacity: appear(0, 1),
        translate: `0px ${appear(70 * s, 0)}px`,
        scale: String(appear(0.92, 1)),
      }}
    >
      <div
        style={{
          height: height * 0.5,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {children}
      </div>
      <div
        style={{
          fontFamily,
          fontSize: 34 * s,
          fontWeight: 600,
          color: COLORS.text,
        }}
      >
        {caption}
      </div>
    </div>
  );
};
