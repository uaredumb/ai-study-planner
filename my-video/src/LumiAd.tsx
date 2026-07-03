import React from "react";
import { AbsoluteFill, Sequence } from "remotion";
import { Background } from "./components/Background";
import { Hook } from "./scenes/Hook";
import { Reveal } from "./scenes/Reveal";
import { Features } from "./scenes/Features";
import { Speed } from "./scenes/Speed";
import { CTA } from "./scenes/CTA";

// 30s @ 30fps = 900 frames
// Hook 0–180 | Reveal 180–360 | Features 360–600 | Speed 600–750 | CTA 750–900
export const LumiAd: React.FC = () => {
  return (
    <AbsoluteFill>
      <Background />
      <Sequence durationInFrames={180}>
        <Hook />
      </Sequence>
      <Sequence from={180} durationInFrames={180}>
        <Reveal />
      </Sequence>
      <Sequence from={360} durationInFrames={240}>
        <Features />
      </Sequence>
      <Sequence from={600} durationInFrames={150}>
        <Speed />
      </Sequence>
      <Sequence from={750} durationInFrames={150}>
        <CTA />
      </Sequence>
    </AbsoluteFill>
  );
};
