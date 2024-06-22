/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      red:"#b91c1c",
      transparent: 'transparent',
      white:'#FFFFFF',
      black:'#000000',
      gray:'#ECECEC',
      litegray: '#bab9b3',
      primary:'#fbfbf9',
      backPrimary: "#EEECE3",
      darkgray:'#463F3C',
      backSecondary: '#73726C',
      dark:'#1B1E20',
      liteblue:'#5C8B9E',
      cyan:'#1A5866',
      grey:'#2D2E31',
    },

  },
  plugins: [],
}
