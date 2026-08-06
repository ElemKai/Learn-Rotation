/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        wow: {
          // Midnight Theme Colors
          dark: {
            bg: '#0a0e14',        // Основной темный фон
            card: '#12161f',      // Фон карточек
            hover: '#1a1f29',     // Ховер эффект
            border: '#2d3548',    // Границы
          },
          light: {
            bg: '#f5f0e6',        // Основной светлый фон
            card: '#ffffff',      // Фон карточек
            hover: '#e8e4dc',     // Ховер эффект
            border: '#d4cfc7',    // Границы
          },
          // Акцентные цвета WoW
          purple: '#7d5fff',      // Основной фиолетовый (Midnight)
          gold: '#ffd700',        // Золотой (легендарное)
          epic: '#a335ee',        // Эпический фиолетовый
          rare: '#0070dd',        // Редкий синий
          uncommon: '#1eff00',    // Необычный зеленый
          common: '#9d9d9d',      // Обычный серый
          alliance: '#0066cc',    // Альянс
          horde: '#cc0000',       // Орда
          // Текст
          text: {
            primary: '#ffffff',
            secondary: '#a0aec0',
            muted: '#718096',
          },
          textLight: {
            primary: '#1a202c',
            secondary: '#4a5568',
            muted: '#718096',
          },
        },
      },
      fontFamily: {
        heading: ['"Friz Quadrata"', '"Cinzel"', 'serif'],
        body: ['"Roboto"', '"Open Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'wow-gradient': 'linear-gradient(135deg, #7d5fff 0%, #5b3fa8 100%)',
        'wow-gold': 'linear-gradient(135deg, #ffd700 0%, #b8860b 100%)',
        'midnight-glow': 'radial-gradient(circle, rgba(125,95,255,0.15) 0%, transparent 70%)',
      },
      boxShadow: {
        'wow-card': '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.15)',
        'wow-glow': '0 0 20px rgba(125, 95, 255, 0.5)',
        'wow-gold': '0 0 15px rgba(255, 215, 0, 0.4)',
      },
      borderColor: {
        'wow-purple': '#7d5fff',
        'wow-gold': '#ffd700',
      },
    },
  },
  plugins: [],
}

