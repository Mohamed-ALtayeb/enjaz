/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/**.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      fontFamily: {
        Arabic: ['Arabic', 'sans-serif'],
        Cairo: ['Cairo', 'sans-serif'],
        Felici: ['Felici', 'sans-serif'],
        Quran: ['Quran', 'sans-serif'],
        Lemonada: ['Lemonada', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
};
