module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screen:{
        "3xl": "2000"
      },
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