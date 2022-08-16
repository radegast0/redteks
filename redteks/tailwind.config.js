const colors = require('tailwindcss/colors')

module.exports = {
  mode: "jit",
  content: ["./public/**/*.html", "./public/**/**.css"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        red: {
            "main_red": "#B01E34"
        }
      },
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif']
    },
  },
  plugins: [
  ],
};