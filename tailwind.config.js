/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0083BB',
        secondary: '#868686',
        hoverPri: '#049CDD',
        hoverSec: '#BEBDBD'
      }
    },
  },
  plugins: [],
};
