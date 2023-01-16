/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      boxShadow: {
        'md': '0 0px 6px -1px rgb(0 0 0 / 0.1), 0 4px 4px -2px rgb(0 0 0 / 0.1)',
        'xl': '0 0px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      },
      maxWidth: {
        'theme': '1200px'
      },
      colors: {
        "primary": '#E27488',
        "primary-light": '#FFF3F6',
        "secondary": '#719257',
        "secondary-light": 'rgba(143, 182, 112, 0.1)',
        "neutral": '#313131',
        "neutral-light": '#575757',
        "neutral-contrast": '#E27488',
        "neutral-contrast-dark": '#FFF9FA',
        'main': '#E27488',
        'main-light': '#E27488',
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
        'gray-light-opacity0': 'rgba(201, 206, 206, 0)'
      },
      screens: {
        'semi-md': '900px',
        'large': '1024px',
        'hover-hover': { 'raw': '(hover: hover)' },
        'hover-none': { 'raw': '(hover: none)' },
      },
      fontFamily: {
        poppins: ['"Poppins"', ...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [
    plugin(({ addUtilities, theme }) => {
      addUtilities({
        ".fade-up": {
          transition:
            "transform 1s cubic-bezier(0.64, 0.04, 0.26, 0.87), opacity 0.8s cubic-bezier(0.64, 0.04, 0.26, 0.87)",
          opacity: theme("opacity.0"),
          transform: "translate3d(0, 2rem, 0)",
        },
        ".highlight-none": {
          "-webkit-tap-highlight-color": "transparent",
          "-webkit-touch-callout": "none",
          "-webkit-user-select": "none",
          "-khtml-user-select": "none",
          "-moz-user-select": "none",
          "-ms-user-select": "none",
          "user-select": "none",
        },
      });
    })
  ],
};