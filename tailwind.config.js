/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Colors used in the project
      colors: {
        primary: "#F6A64F",
        secondary: "#b56141",
        background: "#FFFCF8",
        white:'#FBFBFB',
      },

      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #00a6fb, #0582ca)',
      },
    },
  },
  plugins: [],
}

