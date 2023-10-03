/** @type {import('tailwindcss').Config} */

const glob = require('glob-all');

module.exports = {
  content: glob.sync(['./src/**/*.html', './assets/js/*.js']),
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        greatVibes: ["Great Vibes", "cursive"],
      },

      backgroundImage: {
        space: "url('https://www.spacejam.com/1996/img/bg_stars.gif')",
      },

      button: {
        outline: "",
        solid: "none",
      },
    },
  },
  plugins: [],
};
