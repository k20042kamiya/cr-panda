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
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
