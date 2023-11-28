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
      spacing: {
        '50rem': '50rem',
        '35rem': '35rem',
        '70rem': '70rem',
        '100rem': '100rem',
        '150rem': '150rem',
        '175rem': '175rem',
        '200rem': '200rem'
      },
      listStyleImage: {
        checkmark: 'url("")',
      }
    },
  },
  plugins: [],
}
