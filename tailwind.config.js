/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "830px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "428px" },
      // => @media (max-width: 639px) { ... }
    },
    colors: {
      grr: "rgba(59, 185, 109, 1)",
      grey: "rgba(244, 246, 250, 1)",
    },
    extend: {},
  },
  plugins: [],
};
