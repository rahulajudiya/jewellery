/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens:{
        tab:{
          max:'768'
        },
        mob:{
          max:'576'
        }
      },
      colors:{
        header:'#030b09',
        white:'#fff',
        black:'#000',
        red:'#ff0000',
        bgblack:'#030b09',
        update:'#f8efe4',
        upbtn:'#4a4949',
        uptext:'#a7a7a7'
      },
      backgroundImage:{
        'rahul':"url('/src/asset/image/homebanner.webp')"
      }
    }
  },
  plugins: [],
}

