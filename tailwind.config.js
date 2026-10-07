/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Bai Jamjuree": ['Bai Jamjuree', 'sans-serif'],
      },
      colors: {
        accent:  'var(--c-accent)',
        surface: {
          DEFAULT: 'var(--c-surface)',
          deep:    'var(--c-surface-deep)',
        },
        content: {
          DEFAULT: 'var(--c-text)',
          card:    'var(--c-text-card)',
          dim:     'var(--c-text-dim)',
          icon:    'var(--c-icon)',
        },
      },
    },
  },
  plugins: [],
}
