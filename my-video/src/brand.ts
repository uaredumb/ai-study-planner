import { Easing } from "remotion";
import { loadFont } from "@remotion/google-fonts/Outfit";

export const { fontFamily } = loadFont("normal", {
  weights: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const COLORS = {
  indigo: "#6366F1",
  indigoDeep: "#4F46E5",
  indigoDark: "#312E81",
  teal: "#10B981",
  bg: "#0B0B14",
  panel: "#14141F",
  panelBorder: "rgba(99,102,241,0.25)",
  text: "#F5F5F7",
  textDim: "rgba(245,245,247,0.62)",
};

// easeOutExpo-style — matches the site's cubic-bezier(.16,1,.3,1)
export const EASE = Easing.bezier(0.16, 1, 0.3, 1);
// gentle overshoot for pops
export const EASE_BACK = Easing.bezier(0.34, 1.56, 0.64, 1);
// accelerating suck-in
export const EASE_IN = Easing.bezier(0.55, 0, 0.85, 0.35);

export const CLAMP = {
  extrapolateLeft: "clamp",
  extrapolateRight: "clamp",
} as const;
