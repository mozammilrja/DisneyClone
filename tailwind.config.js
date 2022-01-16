module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home': "url('/images/background.png')",
      }
    },
    fontFamily: {
      fonts: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ]
}