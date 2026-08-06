import { Link } from 'react-router-dom';

interface ClassCardProps {
  name: string;
  slug: string;
  icon: string;
  description: string;
  specs: string[];
  faction?: 'alliance' | 'horde' | 'both';
}

export const ClassCard: React.FC<ClassCardProps> = ({
  name,
  slug,
  icon,
  description,
  specs,
  faction = 'both',
}) => {
  return (
    <Link to={`/classes/${slug}`} className="block group">
      <div className="wow-card h-full flex flex-col hover:border-wow-purple transition-all duration-300">
        {/* Иконка класса */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-xl bg-wow-gradient flex items-center justify-center text-4xl border-2 border-wow-purple group-hover:border-wow-gold group-hover:shadow-wow-glow transition-all">
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-bold group-hover:text-wow-gold transition-colors">
              {name}
            </h3>
            {faction !== 'both' && (
              <span className={`text-xs font-medium ${faction === 'alliance' ? 'faction-alliance' : 'faction-horde'}`}>
                {faction === 'alliance' ? 'Альянс' : 'Орда'}
              </span>
            )}
          </div>
        </div>

        {/* Описание */}
        <p className="text-wow-text-secondary text-sm mb-4 flex-grow">
          {description}
        </p>

        {/* Специализации */}
        <div className="pt-4 border-t border-wow-border">
          <p className="text-xs text-wow-text-muted mb-2">Специализации:</p>
          <div className="flex flex-wrap gap-2">
            {specs.map((spec) => (
              <span
                key={spec}
                className="px-2 py-1 rounded-md bg-wow-bg-hover text-xs text-wow-text-secondary border border-wow-border"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};
