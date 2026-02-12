import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#D4AF37",
          dark: "#BFA15F",
        },
        luxury: {
          cream: "#FDFCF8",
          secondary: "#F7F4EF",
          accent: "#2C3E50",
          textMuted: "#64748B",
          foreground: "#1A202C",
        },
      },
      fontFamily: {
        cinzel: ["var(--font-cinzel)"],
        poppins: ["var(--font-poppins)"],
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
      },

      /* 🔽 ADD THIS */
      keyframes: {
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideLeft: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        slideUp: "slideUp 0.7s ease-out forwards",
        slideLeft: "slideLeft 0.7s ease-out forwards",
        slideRight: "slideRight 0.7s ease-out forwards",
      },
      /* 🔼 END */
    },
  },
  plugins: [],
} satisfies Config;
