// tailwind.config.js
module.exports = {
  darkMode: "media",
  // 追記
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "original-blue": "#E6F2FE",
        "original-gray": "#C4C4C4",
        "original-white": "#f7f7f7",
        "original-dayTime": "#696969",
      },
      fontFamily: {
        tourney: ["tourney"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
