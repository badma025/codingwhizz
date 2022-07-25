module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },

  fontFamily: {
    Poppins: ['Poppins, sans-serif'],
  },

  plugins: [
    require('tailwind-scrollbar-hide'),

  ],
}
