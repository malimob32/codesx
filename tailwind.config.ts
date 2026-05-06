import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#060B14',
        surface: '#0F172A',
        neon: {
          purple: '#8B5CF6',
          red: '#FB7185',
          blue: '#38BDF8'
        }
      },
      boxShadow: {
        neon: '0 0 45px rgba(56,189,248,0.28)'
      },
      backgroundImage: {
        mesh: 'radial-gradient(circle at top, rgba(56,189,248,.28), transparent 45%), radial-gradient(circle at 80% 20%, rgba(14,165,233,.22), transparent 35%), radial-gradient(circle at 20% 80%, rgba(99,102,241,.2), transparent 40%)'
      }
    }
  },
  plugins: []
};

export default config;
