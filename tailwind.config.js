/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      screens: {
        'custom': '850px', // Example custom breakpoint at 850px
      },
    colors: {
      backgound: "#f8f8eb",
      orange: "#FFA75C",
      cardscolor: "#D9D9D9"
    },

  },
  plugins: [],
}
}
