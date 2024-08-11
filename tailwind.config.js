/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'ml': '10px'
      },
      height: {
        '7.5/10': '75%',
        '50vh': '50vh',
        '75vh': '75vh'
      },
      scale: {
        '10': '0.1',
        '115': '1.15',
        '120': '1.2'
      },
      transitionProperty: {
        'height': 'height',
        'opacity': 'opacity',
      },
      transitionDuration: {
        '300': '300ms',
        '500': '500ms',
      },
      transitionTimingFunction: {
        'in-out': 'ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 300ms ease-in-out',
        fadeOut: 'fadeOut 300ms ease-in-out',
      },
    },
  },
  plugins: [],
}
