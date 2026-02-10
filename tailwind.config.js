/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        uniform: {
          primary: '#0a1d37', // Deep Navy
          secondary: '#1e40af', // Royal Blue
          accent: '#e11d48', // Crimson Red
          light: '#f8fafc', // Light Slate
        }
      }
    },
  },
  plugins: [],
};
