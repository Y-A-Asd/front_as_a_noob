/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      flexGrow: { 10:'10', 4:'4', 5:'5',
        2: '2'},
      fontFamily:{
        allfont:['Nunito'],farsi:['Vazirmatn'],Merriweather:['Merriweather']
      },
      textColor:{
        Exx:'#343661', 
      },
      backgroundColor:{
        ours:'#F5DDD3'
      },
      listStyleImage: {
        checkmark: 'url("")',
      }
    },
  },
  plugins: [],
}
