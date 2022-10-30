/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      boxShadow: {
        'md': '0 0px 6px -1px rgb(0 0 0 / 0.1), 0 4px 4px -2px rgb(0 0 0 / 0.1)',
        'xl': '0 0px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      },
      colors: {
        'main': '#67a957',
        'main-light': '#68A957',
        'black': '#1E1E1E',
        'gray-dark': '#E3E8E9',
        'gray-light': '#C9CECE',
        'gray-very-light': 'rgba(37, 37, 37, 0.1)',
        'gray': 'rgba(0, 0, 0, 0.4)',
        'button-disabled-bg': 'rgba(104, 169, 87, 0.2);',
        'button-disabled-text': '#68A957'

      },
      gradientColorStops: {
        'button-from-bg': '#68A957',
        'button-to-bg': '#74B463',
      },
      screens: {
        'hover-hover': { 'raw': '(hover: hover)' },
      }
    },
  },
  plugins: [],
};