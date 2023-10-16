/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container:{
      center:true,
      padding:'16px',

    },
    extend: {
      colors:{
        primary: "#0f766e",
        dark : '#0f172a',
        slate : '#64748b'
      },
      screens:{
        '2xl' : '1320px'
      }
    },
  },
  plugins: [],
}

