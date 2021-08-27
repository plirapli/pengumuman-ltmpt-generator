module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        dark: {
          300: "#5d5d5d",
          400: "#303030",
          500: "#181818",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
