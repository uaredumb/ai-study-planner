// Tunable knobs for Scene 2 — kept separate from components so the pacing of
// the chaos -> clarity transformation can be adjusted without touching motion logic.

export const TRANSFORM_CONFIG = {
  // Scroll distance (in viewport heights) over which the transformation plays out
  scrollHeights: 3,
  // Scroll progress band [0-1] over which cards morph from scattered notes into the tidy grid
  organizeStart: 0.32,
  organizeEnd: 0.62,
  // Scroll progress band over which the "AI organizing" beam + label are visible
  beamStart: 0.24,
  beamEnd: 0.7,
} as const;

export interface NoteCardData {
  id: string;
  messyText: string;
  organizedTitle: string;
  organizedBody: string;
  icon: "notes" | "cards" | "plan" | "quiz" | "tasks";
  /** Center position + rotation while scattered as "chaos", in % of the stage box */
  chaos: { xPct: number; yPct: number; rotateDeg: number; scale: number };
  /** Center position while settled into the "clarity" grid, in % of the stage box */
  organized: { xPct: number; yPct: number };
}

export const NOTE_CARDS: NoteCardData[] = [
  {
    id: "clean-notes",
    messyText: "mitochondria = powerhouse of the cell??\nremember for FRIDAY test",
    organizedTitle: "Clean Notes",
    organizedBody: "Rewritten, structured, and simplified from your raw notes.",
    icon: "notes",
    chaos: { xPct: 16, yPct: 20, rotateDeg: -16, scale: 0.95 },
    organized: { xPct: 20, yPct: 24 },
  },
  {
    id: "flashcards",
    messyText: "define: photosynthesis\ndefine: mitosis\n(a lot more...)",
    organizedTitle: "Flashcards",
    organizedBody: "Key terms turned into ready-to-drill flashcards.",
    icon: "cards",
    chaos: { xPct: 62, yPct: 12, rotateDeg: 11, scale: 1.05 },
    organized: { xPct: 50, yPct: 24 },
  },
  {
    id: "plan",
    messyText: "chapters 3-5 + practice probs\ndue when??",
    organizedTitle: "Study Plan",
    organizedBody: "A day-by-day plan built around your deadlines.",
    icon: "plan",
    chaos: { xPct: 38, yPct: 55, rotateDeg: -8, scale: 0.98 },
    organized: { xPct: 80, yPct: 24 },
  },
  {
    id: "quiz",
    messyText: "quiz me on this at some point",
    organizedTitle: "Quiz",
    organizedBody: "Auto-generated questions to test what you actually know.",
    icon: "quiz",
    chaos: { xPct: 80, yPct: 62, rotateDeg: 17, scale: 0.9 },
    organized: { xPct: 35, yPct: 74 },
  },
  {
    id: "tasks",
    messyText: "read ch 6, finish worksheet, email prof",
    organizedTitle: "Tasks",
    organizedBody: "Loose to-dos extracted and turned into a checklist.",
    icon: "tasks",
    chaos: { xPct: 18, yPct: 80, rotateDeg: 6, scale: 1.0 },
    organized: { xPct: 65, yPct: 74 },
  },
];
