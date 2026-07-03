import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { CLAMP, COLORS, EASE, fontFamily } from "../brand";

// Text that "stamps" in: scales down from oversized while fading + unblurring.
export const KineticText: React.FC<{
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  fontSize: number;
  weight?: number;
  color?: string;
  style?: React.CSSProperties;
}> = ({
  children,
  delay = 0,
  duration = 14,
  fontSize,
  weight = 700,
  color = COLORS.text,
  style,
}) => {
  const frame = useCurrentFrame();
  const t = frame - delay;
  return (
    <div
      style={{
        fontFamily,
        fontSize,
        fontWeight: weight,
        color,
        textAlign: "center",
        lineHeight: 1.15,
        opacity: interpolate(t, [0, duration], [0, 1], { ...CLAMP, easing: EASE }),
        scale: String(
          interpolate(t, [0, duration], [1.45, 1], { ...CLAMP, easing: EASE }),
        ),
        filter: `blur(${interpolate(t, [0, duration], [12, 0], { ...CLAMP, easing: EASE })}px)`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
