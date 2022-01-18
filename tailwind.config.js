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
  eslint: {
    dirs: ['pages', 'utils'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ]
}