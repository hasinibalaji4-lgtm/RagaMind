/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: {
    colors: { teal: { 950: '#092f30', 900: '#123f3f', 800: '#185756', 700: '#246d69' }, ivory: '#fbf7ed', gold: '#b38a3e', sage: { 100: '#e8eee6', 300: '#b9c9b4', 700: '#506a51' } },
    fontFamily: { display: ['Georgia', 'Cambria', 'serif'], sans: ['Inter', 'system-ui', 'sans-serif'] },
    boxShadow: { soft: '0 16px 40px rgba(9,47,48,.09)' }
  }},
  plugins: []
}
