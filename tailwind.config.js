module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ['Inter, sans-serif']
      }
    },
    colors: {
      primary: "#FFC107",
      secondary: "#F5F5F6",
      gray: "#525252",
      white: "#FFFFFF"
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
