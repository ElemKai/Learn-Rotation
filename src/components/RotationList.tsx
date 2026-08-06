import { useState } from 'react';

interface Spell {
  id: number;
  name: string;
  icon: string;
  description?: string;
  cooldown?: string;
  cost?: string;
}

interface APLAction {
  id: string;
  name: string;
  description: string;
  conditions: string[];
  spell: Spell;
  priority: number;
}

interface RotationListProps {
  actions: APLAction[];
  title?: string;
  showConditions?: boolean;
  targetCount?: number;
}

export const RotationList: React.FC<RotationListProps> = ({
  actions,
  title = 'Ротация',
  showConditions = true,
  targetCount = 1,
}) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="wow-card">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold">{title}</h3>
        {targetCount > 1 && (
          <span className="px-3 py-1 rounded-full bg-wow-purple/20 text-wow-purple text-sm font-medium border border-wow-purple">
            Целей: {targetCount}
          </span>
        )}
      </div>

      <div className="space-y-3">
        {actions.map((action, index) => (
          <div
            key={action.id}
            className={`rounded-lg border transition-all duration-200 ${
              expandedId === action.id
                ? 'bg-wow-bg-hover border-wow-purple'
                : 'bg-wow-bg-secondary border-wow-border hover:border-wow-purple/50'
            }`}
          >
            {/* Заголовок действия */}
            <button
              onClick={() => toggleExpand(action.id)}
              className="w-full flex items-center gap-4 p-4 text-left"
            >
              {/* Приоритет */}
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-wow-gradient flex items-center justify-center text-sm font-bold text-white">
                {index + 1}
              </div>

              {/* Иконка заклинания */}
              <img
                src={action.spell.icon}
                alt={action.spell.name}
                className="w-12 h-12 rounded-lg border-2 border-wow-purple object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://wow.zamimg.com/images/wow/icons/large/inv_misc_questionmark.jpg';
                }}
              />

              {/* Информация */}
              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-bold text-wow-text-primary">{action.name}</h4>
                  {action.spell.cooldown && (
                    <span className="text-xs px-2 py-0.5 rounded bg-blue-500/20 text-blue-400">
                      КД: {action.spell.cooldown}
                    </span>
                  )}
                  {action.spell.cost && (
                    <span className="text-xs px-2 py-0.5 rounded bg-yellow-500/20 text-yellow-400">
                      {action.spell.cost}
                    </span>
                  )}
                </div>
                <p className="text-sm text-wow-text-secondary line-clamp-1">
                  {action.description}
                </p>
              </div>

              {/* Индикатор раскрытия */}
              <svg
                className={`w-5 h-5 text-wow-text-muted transition-transform ${
                  expandedId === action.id ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Детали условия */}
            {showConditions && expandedId === action.id && (
              <div className="px-4 pb-4 pt-0 border-t border-wow-border mt-2">
                <div className="mt-3 ml-12">
                  <h5 className="text-sm font-bold text-wow-gold mb-2">Условия использования:</h5>
                  <ul className="space-y-1">
                    {action.conditions.map((condition, idx) => (
                      <li key={idx} className="text-sm text-wow-text-secondary flex items-start gap-2">
                        <span className="text-wow-purple mt-1">•</span>
                        <span>{condition}</span>
                      </li>
                    ))}
                  </ul>

                  {action.description && (
                    <div className="mt-3 p-3 rounded-lg bg-wow-bg-primary border border-wow-border">
                      <p className="text-sm text-wow-text-secondary">
                        {action.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {actions.length === 0 && (
        <div className="text-center py-8 text-wow-text-muted">
          <p>Нет данных для отображения</p>
        </div>
      )}
    </div>
  );
};
