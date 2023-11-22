/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      flexGrow: { 10:'10', 4:'4', 5:'5',
        2: '2'},
      fontFamily:{
        allfont:['Nunito']
      }
    },
  },
  plugins: [],
}

