/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
        heading: ["Clash Display", "Plus Jakarta Sans", "system-ui", "sans-serif"],
        mono: ["Azeret Mono", "ui-monospace", "SFMono-Regular"],
      },
      colors: {
        bg: "#050816",
        "bg-alt": "#0B1124",
        surface: "#0F172A",
        "surface-soft": "#101F3C",
        "brand-soft": "#9BA4FF",
        brand: "#7C3AED",
        "brand-dark": "#5B21B6",
        "brand-glow": "#4F46E5",
        "accent-pink": "#F472B6",
        "accent-pink-soft": "#FBCFE8",
        "accent-yellow-soft": "#FDE68A",
        "accent-yellow": "#F59E0B",
        "accent-green": "#34D399",
        "neutral-soft": "#1E293B",
        "neutral-muted": "#94A3B8",
        "accent-rose-bg": "#241734",
        "accent-sky": "#38BDF8",
      },
      borderRadius: {
        xl2: "1.25rem",
        "3xl": "2rem",
      },
    },
  },
  plugins: [],
};
