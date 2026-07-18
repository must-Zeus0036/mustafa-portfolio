/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#071323',
          850: '#0E2038',
          800: '#142A4D',
          700: '#243D67',
          400: '#8DA7C9',
          200: '#C6D4EB',
          100: '#EEF3FB',
        },
        brass: {
          300: '#80B3FF',
          400: '#5A9CFF',
          500: '#2C78FF',
        },
        mint: {
          400: '#f80303',
        },
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
        mono: ['var(--font-mono)'],
      },
    },
  },
  plugins: [],
};
