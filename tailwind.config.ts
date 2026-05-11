import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        page: "#f1f3f6",
        surface: "#ffffff",
        surfaceAlt: "#f8fafc",
        ink: "#0a1530",
        body: "#1f2937",
        muted: "#6b7280",
        line: "#e5e7eb",
        lineSoft: "#eef0f3",
        navy: {
          DEFAULT: "#0a1f44",
          50: "#e8ebf3",
          100: "#c4cce0",
          200: "#9ca9c8",
          300: "#7384ae",
          400: "#4f649c",
          500: "#27488a",
          600: "#1c3a76",
          700: "#142c5e",
          800: "#0a1f44",
          900: "#04122e",
        },
        flame: {
          DEFAULT: "#FF7A00",
          50: "#fff3e6",
          100: "#ffd9b3",
          200: "#ffbf80",
          300: "#ffa64d",
          400: "#ff8c1a",
          500: "#FF7A00",
          600: "#cc6200",
          700: "#994a00",
          800: "#663100",
          900: "#331900",
        },
        live: "#dc2626",
        good: "#15803d",
        link: "#1e40af",
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      boxShadow: {
        card: "0 1px 0 rgba(15,23,42,0.04), 0 4px 14px -8px rgba(15,23,42,0.12)",
        cardHover: "0 1px 0 rgba(15,23,42,0.06), 0 12px 28px -10px rgba(15,23,42,0.18)",
        bar: "0 1px 0 rgba(15,23,42,0.06)",
      },
      animation: {
        ticker: "ticker 60s linear infinite",
        "live-pulse": "livePulse 1.4s ease-in-out infinite",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        livePulse: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.55", transform: "scale(0.9)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
