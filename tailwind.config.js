/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container:{
      center:true,
      screens:{
        lg:'1140px',
        xl:'1140px',
        '2xl':'1140px',
      }
    },
    extend: {
      backgroundImage:{
        'food':"url('./food.PNG')",
      },
      fontFamily:{
        open:['Open Sans', 'sans-serif']
      },

      colors:{
        'repice-red' : '#9D5353',
        'repice-orange' : '#FFDCA9',
        'repice-orange2' : '#FAAB78',
        'repice-gray' : '#F9F9F9',
        'repice-yellow' : '#F0DD92',
        'repice-bg': '#F4F4F4'
      }
    },
  },
  plugins: [],
}

