module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Karla"', 'sans-serif'],
      },
      boxShadow: {
        '3xl': '8px 10px 20px 0 rgb(0 0 0 / 22%)',
      },
      backgroundImage: theme => ({
        'intro-bg': "url('/images/shape-3.png')",
       }),
      lineHeight: {
        'extra-loose': '2.5',
        '12': '4rem',
        '11': '3rem',
      },
    } 
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
