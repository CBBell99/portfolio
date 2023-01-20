/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{jsx,js}",
    "./components/**.*.{js,ts,jsx.tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGrey: "#212428",
        lightText: "#c4cfde",
      },
      fontFamily: {
        inter: ["inter", "serif"],
      },
    },
  },
  plugins: [],
};
