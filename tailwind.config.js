/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: { center: true, padding: { DEFAULT: "1rem", sm: "1.25rem", lg: "2rem", xl: "2.5rem" } },
    extend: {
      colors: {
        wc_bg:   "#0b0f0a",
        wc_bg2:  "#111614",
        wc_text: "#e7f0e4",
        wc_muted:"#a4ada7",
        wc_lime: "#a6ff2e",
        wc_teal: "#2ee6d6",
      },
      boxShadow: {
        card: "0 1px 0 0 rgba(255,255,255,0.06), 0 0 0 1px rgba(255,255,255,0.04) inset",
      },
      backgroundImage: {
        "hero-radial": "radial-gradient(80% 60% at 50% 0%, rgba(166,255,46,0.12) 0%, rgba(17,22,20,0) 60%)",
      },
    },
  },
  plugins: [],
}