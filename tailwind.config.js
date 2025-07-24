module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'border-spin': 'spin 8s linear infinite',
        'border-hover-spin': 'spin 2s linear infinite',
        'gradient-move': 'gradientMove 15s ease infinite',
      },
      keyframes: {
        borderSpin: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '200% 200%' },
        },
        gradientMove: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        'animated-gradient': 'linear-gradient(-45deg, #000000, #111111, #222222, #000000)',
      },
    },
  },
  plugins: [],
};
