import { useRef } from "react";
import { useTransform } from "framer-motion";
import { useCursorPosition } from "../hooks/useCursorPosition";
import { useHeroScrollProgress } from "../hooks/useHeroScrollProgress";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { SCROLL_ZOOM_CONFIG } from "../constants/hero";
import { COLORS } from "../constants/theme";
import { CursorGlow } from "./CursorGlow";
import { ParticleField } from "./ParticleField";
import { LumiOrb } from "./LumiOrb";
import { HeroContent } from "./HeroContent";

/**
 * Scene 1: Hero Experience.
 * A tall scroll track wraps a sticky full-screen viewport; scrolling through
 * the track drives the camera "zoom" into the orb via scale interpolation.
 */
export function HeroScene() {
  const trackRef = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  const { x: cursorX, y: cursorY } = useCursorPosition();
  const scrollProgress = useHeroScrollProgress(trackRef);

  const orbScale = useTransform(
    scrollProgress,
    [0, 1],
    [1, reduced ? 1.4 : SCROLL_ZOOM_CONFIG.orbMaxScale],
  );
  const contentOpacity = useTransform(
    scrollProgress,
    [0, SCROLL_ZOOM_CONFIG.contentFadeOutAt],
    [1, 0],
  );

  return (
    <section
      ref={trackRef}
      style={{ height: `${SCROLL_ZOOM_CONFIG.scrollHeights * 100}vh`, position: "relative" }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          width: "100%",
          overflow: "hidden",
          background: `radial-gradient(ellipse at center, ${COLORS.panel} 0%, ${COLORS.bg} 70%)`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {!reduced && <CursorGlow cursorX={cursorX} cursorY={cursorY} />}
        <ParticleField reduced={reduced} />

        <LumiOrb cursorX={cursorX} cursorY={cursorY} scrollScale={orbScale} reduced={reduced} />

        <div style={{ position: "absolute", bottom: "12%", textAlign: "center", width: "100%" }}>
          <HeroContent opacity={contentOpacity} />
        </div>
      </div>
    </section>
  );
}
