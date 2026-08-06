export const Footer: React.FC = () => {
  return (
    <footer className="wow-card mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* О проекте */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-wow-gold">WoW Midnight Guides</h3>
            <p className="text-wow-text-secondary text-sm leading-relaxed">
              Актуальные гайды для World of Warcraft: Midnight. 
              Данные обновляются автоматически каждые 3 часа из SimulationCraft.
            </p>
          </div>

          {/* Быстрые ссылки */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-wow-gold">Разделы</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/classes" className="text-wow-text-secondary hover:text-wow-accent transition-colors">
                  Все классы
                </a>
              </li>
              <li>
                <a href="/races" className="text-wow-text-secondary hover:text-wow-accent transition-colors">
                  Расы
                </a>
              </li>
              <li>
                <a href="/guides" className="text-wow-text-secondary hover:text-wow-accent transition-colors">
                  Гайды для новичков
                </a>
              </li>
              <li>
                <a href="/bis" className="text-wow-text-secondary hover:text-wow-accent transition-colors">
                  Best in Slot
                </a>
              </li>
            </ul>
          </div>

          {/* Информация */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-wow-gold">Информация</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-wow-text-secondary">
                Данные APL: SimulationCraft
              </li>
              <li className="text-wow-text-secondary">
                Иконки: WoWHead
              </li>
              <li className="text-wow-text-secondary">
                Обновление: каждые 3 часа
              </li>
              <li className="text-wow-text-secondary pt-2">
                <span className="text-xs opacity-75">
                  Не связано с Blizzard Entertainment
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Копирайт */}
        <div className="mt-8 pt-6 border-t border-wow-border text-center">
          <p className="text-wow-text-muted text-sm">
            © {new Date().getFullYear()} WoW Midnight Guides. Все права защищены.
          </p>
          <p className="text-wow-text-muted text-xs mt-2">
            World of Warcraft и логотип Blizzard являются зарегистрированными товарными знаками Blizzard Entertainment, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};
