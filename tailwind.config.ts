import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F8F1E7",
        cream: "#F8F1E7",
        soft: "#FCF9F5",
        surface: "#FCF9F5",
        "surface-border": "rgba(91, 15, 24, 0.12)",
        "surface-hover": "#FFFFFF",
        primary: {
          DEFAULT: "#5B0F18",
          bright: "#7A1420",
          dark: "#3D0A10",
          glow: "rgba(91, 15, 24, 0.15)",
        },
        wine: {
          DEFAULT: "#5B0F18",
          hover: "#430B12",
          light: "rgba(91, 15, 24, 0.06)",
          border: "rgba(91, 15, 24, 0.12)",
        },
        charcoal: {
          DEFAULT: "#24191A",
          muted: "#6F6261",
          light: "#8C7D7B",
        },
        secondary: {
          DEFAULT: "#6F6261",
          dark: "#24191A",
        },
        accent: {
          gray: "#6F6261",
          muted: "#9E908E",
          light: "#24191A",
        },
      },
      fontFamily: {
        sans: ["var(--font-outfit)", "Inter", "sans-serif"],
        display: ["var(--font-outfit)", "Geist", "sans-serif"],
      },
      backgroundImage: {
        "hero-glow": "radial-gradient(ellipse at 50% 40%, rgba(91, 15, 24, 0.06) 0%, rgba(248, 241, 231, 0) 70%)",
        "wine-gradient": "linear-gradient(135deg, #5B0F18 0%, #3D0A10 100%)",
        "glass-gradient": "linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(252, 249, 245, 0.8) 100%)",
        "card-gradient": "linear-gradient(145deg, #FFFFFF 0%, #FCF9F5 100%)",
      },
      boxShadow: {
        "wine": "0 10px 30px -10px rgba(91, 15, 24, 0.2)",
        "wine-lg": "0 20px 40px -15px rgba(91, 15, 24, 0.3)",
        "soft-card": "0 4px 20px rgba(91, 15, 24, 0.04)",
        "glass": "0 8px 32px 0 rgba(91, 15, 24, 0.06)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
