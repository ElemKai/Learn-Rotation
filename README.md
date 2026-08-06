# WoW Midnight Guides

Стильный сайт с гайдами для World of Warcraft: Midnight. Автоматически обновляемые ротации, таланты и BiS списки для всех классов.

## Особенности

- ⚡ **Автообновление** - Данные APL обновляются каждые 3 часа из SimulationCraft
- 🎯 **Для всех уровней** - Понятные объяснения для новичков и продвинутые советы для опытных игроков
- 📊 **Актуальные данные** - Таланты, ротации и BiS для текущего патча Midnight
- 🌓 **Темы оформления** - Темная и светлая тема в стиле WoW
- 📱 **Адаптивность** - Полная поддержка мобильных устройств

## Технологический стек

- **Frontend**: React + TypeScript + Vite
- **Стили**: Tailwind CSS
- **Хостинг**: GitHub Pages
- **CI/CD**: GitHub Actions (автодеплой + автообновление данных)

## Структура проекта

```
wow-midnight-guides/
├── src/
│   ├── components/       # UI компоненты
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── ClassCard.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── RotationList.tsx
│   ├── data/            # Данные (классы, APL)
│   ├── hooks/           # Custom React хуки
│   └── lib/             # Утилиты и парсеры
├── scripts/             # Скрипты обновления данных
├── .github/workflows/   # GitHub Actions workflow
└── public/              # Статические файлы
```

## Разработка

```bash
# Установка зависимостей
npm install

# Запуск dev сервера
npm run dev

# Сборка для продакшена
npm run build

# Предпросмотр сборки
npm run preview
```

## Деплой

Сайт автоматически деплоится на GitHub Pages при пуше в ветку `main`.

## Обновление данных

APL данные обновляются автоматически каждые 3 часа через GitHub Actions.
Также можно запустить вручную через вкладку Actions на GitHub.

## Лицензия

MIT

---

**Примечание**: Этот проект не связан с Blizzard Entertainment. World of Warcraft и логотип Blizzard являются зарегистрированными товарными знаками Blizzard Entertainment, Inc.
