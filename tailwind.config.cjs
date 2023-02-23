/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},

    fontFamily: {
      Nunito: ["Nunito Sans"]
    },

    screens: {
      'sm': '240px',
      'md': '375px',
      'lg': '640px',
      'xl': '1069px',
      '2xl': '1440px',
    },
  },
  plugins: [],
}
