import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#09090B',
        surface: '#111217',
        neon: {
          purple: '#9F58FF',
          red: '#FF385C',
          blue: '#3B82F6'
        }
      },
      boxShadow: {
        neon: '0 0 50px rgba(159,88,255,0.35)'
      },
      backgroundImage: {
        mesh: 'radial-gradient(circle at top, rgba(159,88,255,.28), transparent 40%), radial-gradient(circle at 80% 30%, rgba(255,56,92,.22), transparent 35%), radial-gradient(circle at 30% 80%, rgba(59,130,246,.2), transparent 35%)'
      }
    }
  },
  plugins: []
};

export default config;
