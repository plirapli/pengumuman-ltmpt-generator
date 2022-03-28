module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      lato: ['Lato', 'sans-serif'],
    },
    extend: {
      colors: {
        base: {
          500: '#F3F4F6',
        },
        dark: {
          300: '#5d5d5d',
          400: '#303030',
          500: '#181818',
        },
        snmOriginal: {
          accentBlue: '#88ccf0',
          link: '#008acf',
          lulus: {
            lGradient: '#083661',
            rGradient: '#006cbf',
          },
          gagal: {
            lGradient: '#B53424',
            rGradient: '#BE371B',
          },
        },
      },
      backgroundImage: {
        snmOriginal: "url('/src/assets/images/snmOriginal/background.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
