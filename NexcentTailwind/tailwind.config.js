/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      fontFamily:{
        sans:['Inter',],
      },
      colors:{
        primary: '#4CAF4F', 
        neutralSilver: '#F5F7FA'
      },
      padding:{
        '10px': '10px',
        '20px': '20px',
      },
    },
  },
  plugins: [],
};
