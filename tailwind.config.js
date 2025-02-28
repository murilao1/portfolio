/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontFamily: {
      primary: ['var(--font-funnel-display)'],
      secondary: ['var(--font-redhat-mono)'],
    },
    extend: {},
  },
  plugins: [],
};
