import { type Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0e0e0e",
        primary: "#d97706",
        secondary: "#22c55e",
        text: "#e5e7eb",
        highlight: "#fde68a",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
