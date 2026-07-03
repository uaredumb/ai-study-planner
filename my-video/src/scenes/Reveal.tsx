import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { CLAMP, COLORS, EASE, EASE_BACK, fontFamily } from "../brand";
import { BrowserFrame } from "../components/BrowserFrame";
import { GlowOrb } from "../components/GlowOrb";
import { KineticText } from "../components/KineticText";

// Scene 2 (0:06–0:12): orb explodes into logo + wordmark, browser frame with
// the generator being typed into. "Paste your notes. Lumi does the rest."

const NOTES =
  "Photosynthesis converts light energy into chemical energy. Chlorophyll absorbs blue and red light while reflecting green. The light reactions happen in the thylakoid membranes and produce ATP + NADPH...";

export const Reveal: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height } = useVideoConfig();
  const s = Math.min(width, height) / 1080;

  // logo pop with slight overshoot
  const pop = interpolate(frame, [0, 16], [0, 1], { ...CLAMP, easing: EASE_BACK });
  // shockwave ring from the "explosion"
  const ring = interpolate(frame, [0, 28], [0, 1], { ...CLAMP, easing: EASE });

  // browser frame slides up
  const frameIn = interpolate(frame, [22, 52], [0, 1], { ...CLAMP, easing: EASE });

  // typing
  const typed = NOTES.slice(
    0,
    Math.floor(interpolate(frame, [55, 145], [0, NOTES.length], CLAMP)),
  );
  const caretOn = frame % 24 < 14;

  // loading state near the end
  const loading = interpolate(frame, [148, 162], [0, 1], { ...CLAMP, easing: EASE });

  const frameWidth = Math.min(1150 * s, width * 0.86);

  return (
    <AbsoluteFill
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 44 * s,
      }}
    >
      {/* shockwave */}
      <AbsoluteFill style={{ alignItems: "center", justifyContent: "center" }}>
        <div
          style={{
            width: 190 * s,
            height: 190 * s,
            borderRadius: "50%",
            border: `${3 * s}px solid ${COLORS.indigo}`,
            scale: String(0.4 + ring * 3.2),
            opacity: 0.8 * (1 - ring),
          }}
        />
      </AbsoluteFill>

      {/* logo row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 26 * s,
          opacity: pop,
          scale: String(pop),
        }}
      >
        <GlowOrb size={78 * s} glow={0.8} />
        <div style={{ fontFamily, fontSize: 72 * s, fontWeight: 800, color: COLORS.text }}>
          Lumi Study
        </div>
      </div>

      <KineticText delay={14} fontSize={52 * s} weight={600} color={COLORS.textDim}>
        Paste your notes. Lumi does the rest.
      </KineticText>

      <div
        style={{
          opacity: frameIn,
          translate: `0px ${(1 - frameIn) * 130 * s}px`,
        }}
      >
        <BrowserFrame width={frameWidth} s={s}>
          <div style={{ position: "relative" }}>
            {/* textarea */}
            <div
              style={{
                borderRadius: 14 * s,
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                padding: 24 * s,
                height: 240 * s,
                fontFamily,
                fontSize: 25 * s,
                fontWeight: 400,
                lineHeight: 1.5,
                color: COLORS.text,
                opacity: 1 - loading * 0.75,
                overflow: "hidden",
              }}
            >
              {typed}
              <span
                style={{
                  display: "inline-block",
                  width: 3 * s,
                  height: 27 * s,
                  marginLeft: 3 * s,
                  verticalAlign: "text-bottom",
                  background: COLORS.indigo,
                  opacity: caretOn ? 1 : 0,
                }}
              />
            </div>

            {/* generate button */}
            <div
              style={{
                marginTop: 22 * s,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  padding: `${15 * s}px ${44 * s}px`,
                  borderRadius: 999,
                  background: `linear-gradient(135deg, ${COLORS.indigo}, ${COLORS.indigoDeep})`,
                  fontFamily,
                  fontSize: 27 * s,
                  fontWeight: 700,
                  color: "#fff",
                  boxShadow: `0 ${10 * s}px ${34 * s}px rgba(99,102,241,0.45)`,
                  scale: String(
                    1 - interpolate(frame, [144, 150, 156], [0, 0.06, 0], CLAMP),
                  ),
                }}
              >
                Generate study pack
              </div>
            </div>

            {/* loading pulse overlay */}
            <AbsoluteFill
              style={{
                alignItems: "center",
                justifyContent: "center",
                gap: 18 * s,
                flexDirection: "column",
                display: "flex",
                opacity: loading,
              }}
            >
              <GlowOrb size={64 * s} />
              <div
                style={{
                  fontFamily,
                  fontSize: 26 * s,
                  fontWeight: 600,
                  color: COLORS.text,
                }}
              >
                Generating...
              </div>
            </AbsoluteFill>
          </div>
        </BrowserFrame>
      </div>
    </AbsoluteFill>
  );
};
