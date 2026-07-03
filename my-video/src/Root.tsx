import "./index.css";
import { Composition } from "remotion";
import { LumiAd } from "./LumiAd";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="LumiAd"
        component={LumiAd}
        durationInFrames={900}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="LumiAdVertical"
        component={LumiAd}
        durationInFrames={900}
        fps={30}
        width={1080}
        height={1920}
      />
    </>
  );
};
