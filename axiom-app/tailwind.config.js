/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        obsidian: '#0B0B0C',
        'neon-cyan': '#00F2FE',
        'champagne-gold': '#D4AF37',
        'glass-border': 'rgba(255, 255, 255, 0.12)',
        'glass-bg': 'rgba(18, 18, 20, 0.75)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
