/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        allfont:['Nunito']
      },
      colors:{
      primary: '#FF6363',
      secondary: {
          100: '#E2E2D5',
          200: '#888883',
        }
    },
  },
  plugins: []
}}