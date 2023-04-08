/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-light': '#f8fafc',
        'primary-dark': '#030712'
      },
      boxShadow: {
        'light-mode': '6px 7px 0px 0px rgba(3,7,18,1)',
        'dark-mode': '6px 7px 0px 0px rgba(248,250,252,1)',
		  },
    },
  },
  plugins: [],
  darkMode: 'class'
}

