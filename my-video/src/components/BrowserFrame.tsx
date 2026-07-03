import React from "react";
import { COLORS, fontFamily } from "../brand";

// Browser-chrome window: traffic lights + URL pill + body.
export const BrowserFrame: React.FC<{
  width: number;
  s: number; // global scale factor
  url?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}> = ({ width, s, url = "lumistudy.org/app", children, style }) => {
  const dot = (c: string) => (
    <div
      style={{
        width: 13 * s,
        height: 13 * s,
        borderRadius: "50%",
        background: c,
      }}
    />
  );
  return (
    <div
      style={{
        width,
        borderRadius: 18 * s,
        background: COLORS.panel,
        border: `1.5px solid ${COLORS.panelBorder}`,
        boxShadow: `0 ${30 * s}px ${80 * s}px rgba(0,0,0,0.55), 0 0 ${60 * s}px rgba(99,102,241,0.12)`,
        overflow: "hidden",
        ...style,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10 * s,
          padding: `${14 * s}px ${20 * s}px`,
          background: "rgba(255,255,255,0.03)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        {dot("#FF5F57")}
        {dot("#FEBC2E")}
        {dot("#28C840")}
        <div
          style={{
            marginLeft: 16 * s,
            flex: 1,
            maxWidth: 420 * s,
            padding: `${7 * s}px ${18 * s}px`,
            borderRadius: 999,
            background: "rgba(255,255,255,0.06)",
            fontFamily,
            fontSize: 17 * s,
            fontWeight: 500,
            color: COLORS.textDim,
            textAlign: "center",
          }}
        >
          {url}
        </div>
      </div>
      <div style={{ padding: 26 * s }}>{children}</div>
    </div>
  );
};
