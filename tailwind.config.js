/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: '967px',
      md: '968px',
      lg: '1280px',
      xl: '1428px',
    },
    colors: {
      'primary': '#0a68ff',
      'modal': '#00000087',
      'title': '#27272a',
      'tx-1': '#787878',
      'tx-2': '#808080',
      'tx-3': '#e0e0e0',
      'tx-4': '#808089',
      'tx-5': '#38383d',
      'background': "#f5f5fa",
      'white': '#fff',
      'red': '#ff424e',
      'blue-100': '#eaf5ff',
      'blue-300': '#0d5cb6',
      'blue-400': '#0b74e5',
      'gray': '#6b7280',
      'gray-blur': '#e5e7eb',
      'gray-100': '#81aaf1',
      'gray-400': '#9ca3af',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}
// npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch