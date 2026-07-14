/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: {
    colors: {
      teal: {
        950: 'rgb(var(--color-teal-950) / <alpha-value>)',
        900: 'rgb(var(--color-teal-900) / <alpha-value>)',
        800: 'rgb(var(--color-teal-800) / <alpha-value>)',
        700: 'rgb(var(--color-teal-700) / <alpha-value>)',
      },
      ivory: 'rgb(var(--color-ivory) / <alpha-value>)',
      gold: 'rgb(var(--color-gold) / <alpha-value>)',
      sage: {
        100: 'rgb(var(--color-sage-100) / <alpha-value>)',
        300: 'rgb(var(--color-sage-300) / <alpha-value>)',
        700: 'rgb(var(--color-sage-700) / <alpha-value>)',
      },
    },
    fontFamily: { display: ['Georgia', 'Cambria', 'serif'], sans: ['Inter', 'system-ui', 'sans-serif'] },
    boxShadow: { soft: '0 16px 40px rgba(9,47,48,.09)' }
  }},
  plugins: []
}
