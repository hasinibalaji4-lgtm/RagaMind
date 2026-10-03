/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: {
    colors: {
      burgundy: 'rgb(var(--color-burgundy) / <alpha-value>)',
      wine: 'rgb(var(--color-wine) / <alpha-value>)',
      cream: 'rgb(var(--color-cream) / <alpha-value>)',
      ink: 'rgb(var(--color-ink) / <alpha-value>)',
      'text-secondary': 'rgb(var(--color-text-secondary) / <alpha-value>)',
      surface: {
        burgundy: 'rgb(var(--color-surface-burgundy-soft) / <alpha-value>)',
        gold: 'rgb(var(--color-surface-gold-soft) / <alpha-value>)',
        cream: 'rgb(var(--color-surface-cream) / <alpha-value>)',
      },
      'border-warm': 'rgb(var(--color-border-warm) / <alpha-value>)',
      teal: {
        950: 'rgb(var(--color-teal-950) / <alpha-value>)',
        900: 'rgb(var(--color-teal-900) / <alpha-value>)',
        800: 'rgb(var(--color-teal-800) / <alpha-value>)',
        700: 'rgb(var(--color-teal-700) / <alpha-value>)',
      },
      ivory: 'rgb(var(--color-ivory) / <alpha-value>)',
      gold: {
        DEFAULT: 'rgb(var(--color-gold) / <alpha-value>)',
        700: 'rgb(var(--color-gold-700) / <alpha-value>)',
      },
      sage: {
        100: 'rgb(var(--color-sage-100) / <alpha-value>)',
        300: 'rgb(var(--color-sage-300) / <alpha-value>)',
        700: 'rgb(var(--color-sage-700) / <alpha-value>)',
      },
      mauve: 'rgb(var(--color-mauve) / <alpha-value>)',
      pink: 'rgb(var(--color-pink) / <alpha-value>)',
      rose: 'rgb(var(--color-rose) / <alpha-value>)',
      peach: 'rgb(var(--color-peach) / <alpha-value>)',
      yellow: 'rgb(var(--color-yellow) / <alpha-value>)',
    },
    fontFamily: { display: ['Georgia', 'Cambria', 'serif'], sans: ['Inter', 'system-ui', 'sans-serif'] },
    boxShadow: { soft: '0 16px 40px rgba(48,37,47,.09)' }
  }},
  plugins: []
}
