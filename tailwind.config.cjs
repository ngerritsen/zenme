/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: "'Source Sans Pro', sans-serif",
      serif: "'Source Serif Pro', serif"
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
};