/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#040711",
        surface: {
          50: "#0c1222",
          100: "#11192e",
          200: "#182442",
          300: "#23325c",
        },
        brand: {
          violet: "#a855f7",
          fuchsia: "#ec4899",
          cyan: "#06b6d4",
          amber: "#f59e0b",
          emerald: "#10b981",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 20s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      boxShadow: {
        "glow-violet": "0 0 50px -10px rgba(168, 85, 247, 0.35)",
        "glow-cyan": "0 0 50px -10px rgba(6, 182, 212, 0.35)",
        "glow-fuchsia": "0 0 50px -10px rgba(236, 72, 153, 0.35)",
      },
    },
  },
  plugins: [],
};
