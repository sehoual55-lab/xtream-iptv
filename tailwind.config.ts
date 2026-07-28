import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./config/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1320px" },
    },
    extend: {
      colors: {
        // Deep graphite command-center base (kept under "charcoal" key so all
        // existing components adopt the new palette automatically)
        charcoal: {
          950: "#090c10",
          900: "#0d1117",
          800: "#131a24",
          700: "#1b2431",
          600: "#27313f",
          500: "#3a4657",
        },
        graphite: {
          950: "#090c10",
          900: "#0d1117",
          800: "#131a24",
          700: "#1b2431",
          600: "#27313f",
          500: "#3a4657",
        },
        // Electric orange primary accent (kept under "gold" key for reuse)
        gold: {
          light: "#ffb266",
          DEFAULT: "#ff7a00",
          400: "#ff8f2e",
          500: "#e56e00",
          dark: "#b35600",
        },
        orange: {
          light: "#ffb266",
          DEFAULT: "#ff7a00",
          400: "#ff8f2e",
          500: "#e56e00",
          dark: "#b35600",
        },
        // Ice blue secondary accent (kept under "cyan" key for reuse)
        cyan: {
          light: "#a5defb",
          DEFAULT: "#4fc3f7",
          400: "#6fceff",
          500: "#29b6f6",
          dark: "#0288d1",
        },
        ice: {
          light: "#a5defb",
          DEFAULT: "#4fc3f7",
          400: "#6fceff",
          500: "#29b6f6",
          dark: "#0288d1",
        },
        silver: {
          light: "#e6edf3",
          DEFAULT: "#aeb9c7",
          400: "#8b98a9",
          500: "#6b7787",
          dark: "#4a5563",
        },
        emerald: {
          light: "#6ee7b7",
          DEFAULT: "#10b981",
          400: "#34d399",
          500: "#059669",
          dark: "#047857",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        glow: "0 0 45px -10px rgba(255, 122, 0, 0.5)",
        "glow-ice": "0 0 45px -10px rgba(79, 195, 247, 0.5)",
        "glow-emerald": "0 0 40px -10px rgba(16, 185, 129, 0.4)",
        card: "0 10px 45px -14px rgba(0, 0, 0, 0.8)",
        "card-hover": "0 24px 70px -14px rgba(0, 0, 0, 0.9)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        // "gold-gradient" is now the electric-orange gradient (reused across components)
        "gold-gradient": "linear-gradient(135deg, #ffb266 0%, #ff7a00 50%, #b35600 100%)",
        "orange-gradient": "linear-gradient(135deg, #ffb266 0%, #ff7a00 50%, #b35600 100%)",
        "ice-gradient": "linear-gradient(135deg, #a5defb 0%, #4fc3f7 50%, #0288d1 100%)",
        "cyan-gradient": "linear-gradient(135deg, #a5defb 0%, #4fc3f7 50%, #0288d1 100%)",
        "emerald-gradient": "linear-gradient(135deg, #6ee7b7 0%, #10b981 50%, #047857 100%)",
        "premium-gradient": "linear-gradient(135deg, rgba(255,122,0,0.9) 0%, rgba(79,195,247,0.85) 100%)",
        "grid-lines":
          "linear-gradient(rgba(79,195,247,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(79,195,247,0.06) 1px, transparent 1px)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-22px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "1" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        radar: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        ping2: {
          "0%": { transform: "scale(1)", opacity: "0.6" },
          "80%, 100%": { transform: "scale(2.4)", opacity: "0" },
        },
        "data-stream": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "grid-pan": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "48px 48px" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 9s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
        radar: "radar 6s linear infinite",
        ping2: "ping2 2.4s cubic-bezier(0,0,0.2,1) infinite",
        "data-stream": "data-stream 3s linear infinite",
        "grid-pan": "grid-pan 8s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
