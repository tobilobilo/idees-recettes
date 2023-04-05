/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'body': ['Rubik', 'sans-serif']
      },
      colors: {
        'yellow': {
          975: '#42421f',
          'pure': "#ffff00"
        },
        'lime': {
          'pale': '#f2ffd1'
        }
      },
      backgroundImage: {
        'home-bloc-xs': "url('./img/home-640.jpg')",
        'home-bloc-md': "url('./img/home-1280.jpg')",
      }
    },
  },
  plugins: [],
}

