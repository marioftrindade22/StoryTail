/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  
  theme: {
    extend: {
      colors: {
        under: '#38383B',
        tabela: '#2B3674',
        campos: '#A3AED0',
        laranja: '#E1700F'
      },
    },
  },
  plugins: [],
}

