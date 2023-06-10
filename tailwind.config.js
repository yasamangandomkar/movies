/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        black:'#04152d',
        black2:'#041226',
        black3:'#020c1b',
        blackLighter:'#1c4b91',
        blackLight:'#173d77',
        pink:"#da2f68",
        orang:'#f89e00',
        gradient:'linear-gradient(98.37deg, #f89e00 0.99%, #da2f68 100%),',
        white:'#fff'
      },
    },
  },
  plugins: [],
}