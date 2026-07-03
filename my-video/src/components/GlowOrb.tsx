import React from "react";
import { Img, staticFile, useCurrentFrame } from "remotion";

// The real site logo (public/logo.png) — the glowing orb — with an animated
// glow/pulse behind it. `size` is the visible diameter of the orb.
export const GlowOrb: React.FC<{
  size: number;
  pulse?: boolean;
  glow?: number; // 0..1 glow intensity
  style?: React.CSSProperties;
}> = ({ size, pulse = true, glow = 1, style }) => {
  const frame = useCurrentFrame();
  const p = pulse ? 1 + Math.sin(frame / 9) * 0.035 : 1;
  // The orb occupies ~0.56 of logo.png's square canvas; scale the image up so
  // the visible orb diameter matches `size`.
  const imgSize = size * 1.78;
  return (
    <div
      style={{
        position: "relative",
        width: size,
        height: size,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        scale: String(p),
        ...style,
      }}
    >
      {/* soft glow behind the orb */}
      <div
        style={{
          position: "absolute",
          width: size * 1.15,
          height: size * 1.15,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(99,102,241,0.6) 0%, rgba(16,185,129,0.28) 45%, rgba(99,102,241,0) 70%)",
          filter: `blur(${size * 0.22}px)`,
          opacity: glow,
        }}
      />
      <Img
        src={staticFile("logo.png")}
        style={{
          width: imgSize,
          height: imgSize,
          objectFit: "contain",
        }}
      />
    </div>
  );
};
