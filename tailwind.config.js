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
        'button-disabled-bg': 'rgba(104, 169, 87, 0.2);',
        'button-disabled-text': '#68A957'

      },
      gradientColorStops: {
        'button-from-bg': '#68A957',
        'button-to-bg': '#74B463',
      }
    },
  },
  plugins: [],
};