/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      colors: {
        canvas: {
          DEFAULT: "#07090e",
          subtle: "#0c1017",
          card: "#111726",
          hover: "#161f33",
        },
        brand: {
          blue: "#38bdf8",
          indigo: "#6366f1",
          violet: "#8b5cf6",
          emerald: "#10b981",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "fade-in-up": "fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
        "glow-slow": "glowSlow 6s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        glowSlow: {
          "0%": { opacity: "0.3" },
          "100%": { opacity: "0.6" },
        },
      },
    },
  },
  plugins: [],
};
