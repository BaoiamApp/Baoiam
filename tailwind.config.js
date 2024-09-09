/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: { max: "641px" },
        md: { max: "769px" },
      },
    },
  },
  plugins: [],
};
