/**
 * Tailwind config — compiled to /tailwind.css to REPLACE the cdn.tailwindcss.com
 * runtime build (which prints a "should not be used in production" warning and
 * rebuilds CSS in every visitor's browser).
 *
 * ┌─ IMPORTANT ────────────────────────────────────────────────────────────┐
 * │ After adding/removing any Tailwind class in the HTML below, rebuild:     │
 * │     npm run build:css        (one-off, minified)                         │
 * │     npm run watch:css        (rebuild-on-save while developing)          │
 * │ then commit the updated tailwind.css. Classes not present at build time  │
 * │ are purged and will silently have no effect.                             │
 * └─────────────────────────────────────────────────────────────────────────┘
 *
 * This mirrors the former inline `tailwind.config` object (a superset covering
 * every converted page). redesign.html / index.legacy.html are intentionally
 * NOT listed — they are stale, unlinked, and keep their own CDN script.
 */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./pricing.html",
    "./contact.html",
    "./privacy.html",
    "./terms.html",
    "./changelog.html",
    "./admin.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        // Primary: deep indigo / soft blue
        brand: {
          50: "#eef2ff", 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc",
          400: "#818cf8", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca",
          800: "#3730a3", 900: "#312e81", 950: "#1e1b4b",
        },
        // Accent: teal / emerald for success + delight
        accent: {
          50: "#ecfdf5", 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7",
          400: "#34d399", 500: "#10b981", 600: "#059669", 700: "#047857",
          800: "#065f46", 900: "#064e3b",
        },
      },
      boxShadow: {
        soft: "0 1px 2px rgba(15,23,42,.04), 0 8px 24px -8px rgba(15,23,42,.12)",
        lift: "0 2px 4px rgba(15,23,42,.04), 0 24px 48px -16px rgba(49,46,129,.28)",
        glow: "0 0 0 1px rgba(99,102,241,.18), 0 20px 60px -20px rgba(99,102,241,.55)",
      },
      keyframes: {
        "fade-up": { "0%": { opacity: 0, transform: "translateY(14px)" }, "100%": { opacity: 1, transform: "translateY(0)" } },
        "fade-in": { "0%": { opacity: 0 }, "100%": { opacity: 1 } },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-8px)" } },
        shimmer: { "100%": { transform: "translateX(100%)" } },
        "pop-in": { "0%": { opacity: 0 }, "100%": { opacity: 1 } },
      },
      animation: {
        "fade-up": "fade-up .85s cubic-bezier(.16,1,.3,1) both",
        "fade-in": "fade-in .85s ease both",
        float: "float 7s ease-in-out infinite",
        "pop-in": "pop-in .5s cubic-bezier(.16,1,.3,1) both",
      },
    },
  },
};
