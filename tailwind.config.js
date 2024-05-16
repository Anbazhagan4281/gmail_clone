/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        purple: '#3f3cbb',
        whitelilac: '#f6f8fc',
        porcelain: '#ecf1f9',
        bluezodiac: '#102d53',
        hawkesblue: '#d3e3fe',
        'bubble-gum': '#ff77e9',
        bermuda: '#78dcca',
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    },
  ],
}
