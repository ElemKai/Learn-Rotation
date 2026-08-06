import { Link } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';

const classes = [
  { name: 'Воин', slug: 'warrior', icon: '⚔️' },
  { name: 'Паладин', slug: 'paladin', icon: '🛡️' },
  { name: 'Охотник', slug: 'hunter', icon: '🏹' },
  { name: 'Разбойник', slug: 'rogue', icon: '🗡️' },
  { name: 'Жрец', slug: 'priest', icon: '✨' },
  { name: 'Рыцарь смерти', slug: 'death-knight', icon: '💀' },
  { name: 'Шаман', slug: 'shaman', icon: '⚡' },
  { name: 'Маг', slug: 'mage', icon: '🔥' },
  { name: 'Чернокнижник', slug: 'warlock', icon: '🔮' },
  { name: 'Монах', slug: 'monk', icon: '👊' },
  { name: 'Друид', slug: 'druid', icon: '🌙' },
  { name: 'Охотник на демонов', slug: 'demon-hunter', icon: '😈' },
  { name: 'Еврей', slug: 'evoker', icon: '🐉' },
];

export const Header: React.FC = () => {
  return (
    <header className="wow-card sticky top-0 z-50 mb-8">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Логотип */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-lg bg-wow-gradient flex items-center justify-center border-2 border-wow-purple group-hover:border-wow-gold transition-colors">
              <span className="text-2xl">🌙</span>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold bg-wow-gradient bg-clip-text text-transparent">
                WoW Midnight
              </h1>
              <p className="text-xs text-wow-text-secondary hidden sm:block">
                Гайды для всех классов
              </p>
            </div>
          </Link>

          {/* Навигация */}
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              to="/classes" 
              className="text-wow-text-secondary hover:text-wow-gold transition-colors font-medium"
            >
              Классы
            </Link>
            <Link 
              to="/races" 
              className="text-wow-text-secondary hover:text-wow-gold transition-colors font-medium"
            >
              Расы
            </Link>
            <Link 
              to="/guides" 
              className="text-wow-text-secondary hover:text-wow-gold transition-colors font-medium"
            >
              Гайды
            </Link>
            <Link 
              to="/bis" 
              className="text-wow-text-secondary hover:text-wow-gold transition-colors font-medium"
            >
              БиС
            </Link>
          </nav>

          {/* Переключатель темы */}
          <ThemeToggle />
        </div>

        {/* Мобильная навигация - классы */}
        <div className="mt-4 pt-4 border-t border-wow-border md:hidden">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {classes.map((cls) => (
              <Link
                key={cls.slug}
                to={`/classes/${cls.slug}`}
                className="flex-shrink-0 flex items-center gap-2 px-3 py-2 rounded-lg bg-wow-bg-hover hover:border-wow-purple border border-transparent transition-all text-sm"
              >
                <span>{cls.icon}</span>
                <span className="whitespace-nowrap">{cls.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};
