/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#fafaea',
        brown: '#6d5f4c',
        sage: '#b8b09f',
        taupe: '#9c9484',
        mushroom: '#a49c8c'
      },
      fontFamily: {
        'serif': ['Georgia', 'serif']
      }
    },
  },
  plugins: [],
}