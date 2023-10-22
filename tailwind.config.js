/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {   
    extend: {
      colors: {
        'brown': '#60463B',
        'blue': '#484552',
        'yellow': '#EBDD54',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
      },
    },
  },
  plugins: [
    '@tailwindcss/forms',
    '@tailwindcss/aspect-ratio',
    '@tailwindcss/typography',
    'tailwindcss-children'
  ],
}

