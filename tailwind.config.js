/** @type {import('tailwindcss').Config} */
import { PhoneIcon } from '@heroicons/react/outline';

const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '567px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        'roboto-slab': ['"Roboto Slab"', 'serif'], // Add this line to include Roboto Slab
        'philosopher': ['"Philosopher"', 'sans-serif']

      },

      colors:{
        'indigo' : colors.blue,
        'orange' : colors.orange
        
      },
      screens: {
        'custom': '850px', // Example custom breakpoint at 850px
      },
    colors: {
      backgound: "#ffffff",


      orange: "#ffa75c",

      cardscolor: "#eaf3ff"
    },
    screens: {
      'max-w-700': '700px',
    },
  },
  plugins: [],
}

}

      
