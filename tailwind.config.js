/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'light': '#ffffff',
        'll-light': '#f5f5f5',
        'l-light': '#e3e3e3',
        'l-dark': '#2c2c32',
        'dark': '#25252b ',
        'primary': '#0066b8',
      },
      fontFamily: {
       'Montserrat': 'sans-serif',
      }
    },
  },
  plugins: [],
};
