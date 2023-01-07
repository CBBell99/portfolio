/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{jsx,js}",
    "./components/**.*.{js,ts,jsx.tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter", "serif"],
      },
    },
  },
  plugins: [],
};
