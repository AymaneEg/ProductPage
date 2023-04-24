/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}" , "./src/**/*"],
  theme: {
    extend: { 
      colors : {
          Corange: "hsl(26, 100%, 55%)" ,
          Pale_orange: 'hsl(25, 100%, 94%)' , 
          Very_dark_blue: 'hsl(220, 13%, 13%)',
          Dark_grayish_blue: 'hsl(219, 9%, 45%)',
          Grayish_blue: 'hsl(220, 14%, 75%)',
          Light_grayish_blue: 'hsl(223, 64%, 98%)',
          CWhite: 'hsl(0, 0%, 100%)',
          CBlack: 'hsl(0, 0%, 0% , 0.7)'
      }
    },
  },
  plugins: [],
}
