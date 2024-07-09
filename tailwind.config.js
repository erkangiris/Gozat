/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './layout/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  important: true,
  theme: {
    screens: {
      'sm': {'min': '640px', 'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': '1599px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1600px', 'max': '1921px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    },container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        'body': "url('/images/static/bg.png')",
      },
      maxWidth:{
        "8xl": "1440px",
        "xxl": "600px"
      },
      maxHeight:{
        "8xl": "80vh"
      },
      colors: {
        'primary-bg': '#1F1E23',
        'gozatgray-500':'#AFAFB1',
        'gozatgray-200':'#262D37',
        'gozatblue-400':'#026CDF',
        'card-bg':'#242529',
        'cardupper-bg': '#27292E',
      },
      width: {
        '140':'140px',
        '280': '280px',
        '300': '300px',
        '350': '350px',
        '400': '400px',
        '430': '430px',
        '560': '560px',
        '600': '600px',
      },
      height: {
        '140':'140px',
        '180':'180px',
        '186':'186px',
        '300': '300px',
        '375': '375px',
        '400': '400px',
        '430': '430px',
        '500': '500px',
        '560': '560px',
        '800': '800px',
        "60vh": "60vh",
        "70vh": "70vh",
        "80vh": "80vh",
        "90vh": "90vh",
      },
      boxShadow: {
        'search-shadow': ' 0px 0px 20px rgba(0, 0, 0, 0.05)',
        'btn-shadow': '0px 0px 20px rgba(0, 0, 0, 0.1)',
        'card-shadow': '0px 0px 20px rgba(0, 0, 0, 0.07)',
        
      },
      margin: {
        'line-margin': '60px',
      },
      padding: {
        'line-padding': '80px',
      },

      zIndex: {
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
      },
      fontSize: {
        'xxs': '10px',
        '26': '26px',
        '28': '28px',
      },
      aspectRatio: {
        '7/10': '7/10',
      },
    },
  },
  plugins: [
    // require('tailwind-scrollbar'),
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/line-clamp'),
  ],
}