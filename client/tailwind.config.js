// tailwind.config.js
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        buenard: ["'Buenard'", "serif"],
        league: ["'League Spartan'", "serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")], // included by ShadCN
};
