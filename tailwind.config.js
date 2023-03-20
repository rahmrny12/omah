const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'body': 'Poppins, sans-serif',
      },
      colors: {
        'primary': '#1B2021',
        'secondary': '#F58634',
        'neutral': '#828282',
        'background': '#FCFCFC',
      },
    },
  },
  plugins: [],
}
