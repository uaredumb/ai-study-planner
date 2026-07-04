import type { SVGProps } from "react";

/** Minimal heroicon-outline-style icon set for the structured output cards. Stroke-based so it theme-adapts. */
const base: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function NotesIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M7 3.5h7l4 4V20a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z" />
      <path d="M14 3.5V8h4" />
      <path d="M8.5 12.5h7M8.5 16h5" />
    </svg>
  );
}

export function CardsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="7" width="13" height="13" rx="2" />
      <path d="M8 7V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-2" />
    </svg>
  );
}

export function PlanIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <path d="M3.5 9.5h17M8 3v3M16 3v3" />
      <path d="M7.5 13.5h2M11.5 13.5h2M15.5 13.5h1M7.5 17h2M11.5 17h2" />
    </svg>
  );
}

export function QuizIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M9.6 9.3a2.4 2.4 0 1 1 3.4 2.2c-.9.5-1 .9-1 1.7" />
      <circle cx="12" cy="16.2" r="0.15" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function TasksIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M4.5 6.5 6 8l2.5-2.5M4.5 13l1.5 1.5L8.5 12M4.5 19.5 6 21l2.5-2.5" />
      <path d="M12 6.5h7.5M12 13h7.5M12 19.5h7.5" />
    </svg>
  );
}

export const ICONS = {
  notes: NotesIcon,
  cards: CardsIcon,
  plan: PlanIcon,
  quiz: QuizIcon,
  tasks: TasksIcon,
} as const;
