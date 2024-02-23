/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.tsx",
  ],
  theme: {
    // screens: {
    //   'phone': '480px',
    //   'sm': '640px',
    //   'md': '768px',
    //   'lg': '1024px',
    //   'xl': '1280px',
    // },
    fontFamily: {
      'body': ['Roboto', 'sans-serif'],
      'input':['Roboto', 'sans-serif'],
      'textarea': ['Roboto', 'sans-serif'],
      'button': ['Roboto', 'sans-serif']
    },
    extend: {
      colors: {
        twitter: '#1da1f2',
        texto: '#0f1419',
        borda: '#ebeef0',
      },
      gridTemplateColumns: {
        'timeline': '300px minmax(100px, 1fr)',
        'tweet': '3rem minmax(100px, 1fr)',
        'phoneTimeline': '80px minmax(100px, 1fr)'
      }
    }
  },
  plugins: [],
}

