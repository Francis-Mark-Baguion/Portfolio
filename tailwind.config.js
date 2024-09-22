/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      
      colors:{
        mint: '#73B88A',
        yelgreen: '#AFD146',
        platinum: '#E9E9E9',
        polygreen: '#303E1E',
        jet: '#292929',
        white: '#ffffff',
      },
      screens:{
        sm:"480px",
        md:"768px",
        lg:"1024px",
        xl:"1280px",
      },
      spacing:{
        "big": "48rem"
      }
    },
  },
  plugins: [],
}

