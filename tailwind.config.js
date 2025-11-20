/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        azul: '#5E96FF',
        naranja: '#ff2e09',
      },
    },
  },
  plugins: [],
}
