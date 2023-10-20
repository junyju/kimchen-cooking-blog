/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        skranji: ["Skranji", "sans-serif"],
        dosis: ["Dosis", "sans-serif"],
        titillium: ["Titillium Web", "sans-serif"],
      },
    },
    fontFamily: {
      sans: ["Abel", "sans-serif"],
    },
  },
  plugins: [],
};
