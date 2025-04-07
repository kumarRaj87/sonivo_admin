/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A1F31',
          200: '#F7FAFC',
          300:'#626A72',
          400:'#21374B',
          500:'#0A1F31'
        },
        accent:{
          DEFAULT: '#808080'
        },
        background:{
          DEFAULT: "#ffffff"
        }
      },
    },
  },
  plugins: [],
};
 