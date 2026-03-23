import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  important: "#__next",
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FFFDF7",
          100: "#FFF9E8",
          200: "#FFF3D1",
          300: "#FFECBA",
          400: "#FFE5A3",
          500: "#FFDEA0",
        },
        rose: {
          50: "#FFF5F5",
          100: "#FFE8E8",
          200: "#FFCCCC",
          300: "#FFB3B3",
          400: "#FF8A8A",
          500: "#E8636F",
          600: "#D94F5C",
          700: "#C43B49",
        },
        gold: {
          50: "#FFFDF0",
          100: "#FFF8DC",
          200: "#FFE4A0",
          300: "#FFD700",
          400: "#E6C200",
          500: "#C5A000",
          600: "#B8860B",
          700: "#8B6914",
        },
        blush: {
          50: "#FFF0F3",
          100: "#FFE0E6",
          200: "#FFC2CE",
          300: "#FFA3B5",
          400: "#FF859D",
          500: "#FF6B85",
        },
      },
      fontFamily: {
        heading: ["Playfair Display", "Georgia", "serif"],
        body: ["Be Vietnam Pro", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
