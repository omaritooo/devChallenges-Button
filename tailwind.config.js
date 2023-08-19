/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        button: {
          'default': '#E0E0E0',
          outline: '#3D5AFE',
          'hover-default': '#AEAEAE',
          'hover-primary': '#0039CB',
          disabled: '#E0E0E0',
          'hover-outline': '#2962FF1A',
          'secondary': '#455A64',
          'hover-secondary': '#1C313A',
          danger: '#D32F2F',
          'hover-danger': '#9A0007'
        }
      },
      dropShadow: {
        'button': '0px 2px 3px 0px #33333333'
      }
    },
  },
  plugins: [],
}

