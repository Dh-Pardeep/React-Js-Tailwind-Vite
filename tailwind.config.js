/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontSize: {
        xs: "14px",
        sm: "16px",
        md: "32px",
        lg: "40px",
        xl: "60px",
    },
    colors: {
        lite_white: "#CEEBEB",
        fade_blue: "#5CBDBC",
        gray: "#B3B3B3",
        gray_two: "#4D4D4D",
        white: "#FFF",
        black: "#000",
    },
    boxShadow: {
        'xl': '0px 1px 30.600000381469727px 0px #00000014',
    }
},
 backgroundColor: {
        fade_blue: '#5CBDBC',
        fade_lite_blue: '#61C0BF',
        lite_black: '#010101',
        white: "#FFF",
        black: "#000",
},
  plugins: [],
}

