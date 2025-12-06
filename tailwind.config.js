/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        '12': 'repeat(2, minmax(4fr, 8fr))',
      }
    },
  },
  plugins: [require("daisyui")],
}

