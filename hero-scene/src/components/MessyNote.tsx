const PAPER = "#F2E7C6";
const INK = "#2A2410";

/** Sticky-note visual for a card's "chaos" state — torn corner, tape, handwritten scrawl. */
export function MessyNote({ text }: { text: string }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: PAPER,
        color: INK,
        borderRadius: 6,
        boxShadow: "0 14px 28px rgba(0,0,0,0.35)",
        clipPath: "polygon(0 0, 92% 0, 100% 10%, 100% 100%, 0 100%)",
        padding: "20px 18px",
        display: "flex",
        alignItems: "center",
        position: "relative",
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: -10,
          left: "50%",
          transform: "translateX(-50%) rotate(-3deg)",
          width: 46,
          height: 18,
          background: "rgba(255,255,255,0.55)",
          border: "1px solid rgba(255,255,255,0.7)",
        }}
      />
      <p
        aria-hidden
        style={{
          margin: 0,
          fontFamily: "'Segoe Print', 'Comic Sans MS', cursive",
          fontSize: 15,
          lineHeight: 1.5,
          whiteSpace: "pre-line",
          transform: "rotate(-1.5deg)",
        }}
      >
        {text}
      </p>
    </div>
  );
}
