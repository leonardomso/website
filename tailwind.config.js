const { colors } = require('tailwindcss/colors')
const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        '2xl': '1440px',
      },
    },
    letterSpacing: {
      1: '0em',
      2: '-0.025em',
      3: '-0.05em',
      4: '-0.1em',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
      },
      colors: {
        ...colors,
        brand: {
          50: '#f3f3f3',
          100: '#e7e7e7',
          200: '#c4c4c4',
          300: '#a0a0a0',
          400: '#585858',
          500: '#111111',
          600: '#0f0f0f',
          700: '#0d0d0d',
          800: '#0a0a0a',
          900: '#080808',
          DEFAULT: '#111111',
        },
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
  ],
}
