module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      lato: ['Lato', 'sans-serif'],
      sbmFonts: [
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
    },
    extend: {
      screens: {
        sbmLg: '992px',
        sbmXl: '1200px',
      },
      maxWidth: {
        sbmSm: '540px',
        sbmMd: '720px',
        sbmLg: '960px',
        sbmXl: '1140px',
      },
      opacity: {
        3: '.03',
      },
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
        sbmOriginal: {
          gray: '#f8f8f8',
          blueLine: '#27519a',
          teal: '#17a2b8',
          tealHover: '#138496',
          green: '#28a745',
          greenHover: '#1e7e34',
          blueLink: '#007bff',
          blueLinkHover: '#0056b3',
        },
      },
      backgroundImage: {
        snmOriginal: "url('/src/assets/images/snmOriginal/background.jpg')",
      },
      animation: {
        sbmPulse: 'pulse 1s linear infinite;',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
