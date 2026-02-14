/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        neon: {
          cyan: '#00f5ff',
          purple: '#a855f7',
        },
      },
      spacing: {
        grid: '8px',
      },
      borderRadius: {
        card: '1.5rem',
      },
      boxShadow: {
        soft: '0 4px 24px -4px rgba(0, 0, 0, 0.08), 0 8px 16px -6px rgba(0, 0, 0, 0.04)',
        'soft-dark': '0 4px 24px -4px rgba(0, 0, 0, 0.4), 0 8px 16px -6px rgba(0, 0, 0, 0.3)',
        glow: '0 0 24px -4px rgba(0, 245, 255, 0.4), 0 0 48px -8px rgba(168, 85, 247, 0.3)',
        'glow-hover': '0 0 32px -4px rgba(0, 245, 255, 0.5), 0 0 64px -8px rgba(168, 85, 247, 0.4)',
      },
      transitionDuration: {
        theme: '500ms',
      },
      animation: {
        'pulse-ring': 'pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        sparkle: 'sparkle 1.5s ease-in-out infinite',
      },
      keyframes: {
        'pulse-ring': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.1)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
      },
    },
  },
  plugins: [],
}
