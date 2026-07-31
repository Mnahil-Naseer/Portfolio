/** @type {import('tailwindcss').Config} */
import theme from "./src/theme/theme.js";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          950: theme.palette.background,
          900: theme.palette.backgroundSecondary,
          800: theme.colors.royalBlue,
          700: theme.colors.charcoal,
        },
        violet: {
          400: theme.colors.slate,
          500: theme.colors.royalBlue,
          600: theme.palette.accentHover,
        },
        cyan: {
          300: theme.colors.slate,
          400: theme.colors.royalBlue,
        },
        ink: {
          100: theme.palette.textPrimary,
          300: theme.palette.textSecondary,
          500: theme.colors.slate,
          700: theme.colors.charcoal,
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "grad-primary": `linear-gradient(135deg, ${theme.colors.royalBlue} 0%, ${theme.palette.accentHover} 45%, ${theme.colors.royalBlue} 100%)`,
        "grad-radial": `radial-gradient(circle at 50% 0%, ${theme.colors.royalBlue}33, transparent 60%)`,
      },
      boxShadow: {
        glow: `0 0 40px -8px ${theme.colors.royalBlue}88`,
        "glow-cyan": `0 0 40px -10px ${theme.colors.slate}59`,
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(6px)" },
        },
      },
      animation: {
        blink: "blink 1.1s step-end infinite",
        float: "float 6s ease-in-out infinite",
        "bounce-slow": "bounce-slow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
