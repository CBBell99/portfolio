/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    './index.html',
    './src/**/*.{jsx,js}',
    './components/**.*.{js,ts,jsx.tsx}',
  ],
  theme: {
    extend: {
      colors: {
        greyDark: '#212428',
        greyLight: '#c4cfde',
        greyMid: '#373c42',
        accent: '#ff014f',
      },
      fontFamily: {
        titleText: ['Montserrat', 'san-seriff'],
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
