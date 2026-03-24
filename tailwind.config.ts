import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FDFCFA",
          100: "#F8F5F0",
          200: "#F2EDE5",
          300: "#ECE8DF",
          400: "#E0D8CC",
          500: "#CFC4B5",
        },
        rose: {
          50: "#FBF6F3",
          100: "#F5E9E2",
          200: "#ECCFC0",
          300: "#E0AE94",
          400: "#D08C6A",
          500: "#B86848",
          600: "#9A5030",
          700: "#7A3C20",
        },
        gold: {
          50: "#FBF7EE",
          100: "#F5ECDA",
          200: "#EDD8B0",
          300: "#E0C07A",
          400: "#CFA040",
          500: "#B88018",
          600: "#966408",
          700: "#744C02",
        },
        blush: {
          50: "#FAF4F1",
          100: "#F5E8E2",
          200: "#ECCFC4",
          300: "#E0B0A0",
          400: "#D09078",
          500: "#C07050",
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
