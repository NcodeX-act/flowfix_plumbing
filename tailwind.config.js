/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"TT Norms Pro"', 'Outfit', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        flow: {
          ink: '#13202B',
          deep: '#0F2B3D',
          teal: '#0E6E63',
          amber: '#E8742C',
        },
      },
    },
  },
  plugins: [],
}
