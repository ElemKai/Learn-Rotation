import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ClassCard } from './components/ClassCard';
import { classesData } from './data/classes';

function App() {
  return (
    <>
      <Header />
      
      <main className="container mx-auto px-4 py-8 flex-grow">
        {/* Hero секция */}
        <section className="text-center mb-12">
          <h1 className="mb-4 bg-wow-gradient bg-clip-text text-transparent">
            World of Warcraft: Midnight
          </h1>
          <p className="text-xl text-wow-text-secondary max-w-2xl mx-auto mb-8">
            Полные гайды для всех классов. Актуальные ротации, таланты и BiS списки.
            Данные обновляются автоматически каждые 3 часа.
          </p>
          
          {/* Быстрый выбор класса */}
          <div className="flex justify-center gap-4 mb-8">
            <a href="#classes" className="wow-button">
              Выбрать класс
            </a>
            <a href="/guides" className="wow-button wow-button--gold">
              Гайды для новичков
            </a>
          </div>
        </section>

        {/* Секция классов */}
        <section id="classes" className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Выберите класс
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {classesData.map((cls) => (
              <ClassCard
                key={cls.slug}
                name={cls.name}
                slug={cls.slug}
                icon={cls.icon}
                description={cls.description}
                specs={cls.specs.map(s => s.name)}
                faction={cls.faction}
              />
            ))}
          </div>
        </section>

        {/* Особенности сайта */}
        <section className="wow-card mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center text-wow-gold">
            Почему наши гайды?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-wow-gradient flex items-center justify-center text-3xl">
                ⚡
              </div>
              <h3 className="font-bold mb-2">Автообновление</h3>
              <p className="text-sm text-wow-text-secondary">
                Данные APL обновляются каждые 3 часа из SimulationCraft
              </p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-wow-gradient flex items-center justify-center text-3xl">
                🎯
              </div>
              <h3 className="font-bold mb-2">Для всех уровней</h3>
              <p className="text-sm text-wow-text-secondary">
                Понятные объяснения для новичков и продвинутые советы для опытных
              </p>
            </div>
            <div className="text-center p-4">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-wow-gradient flex items-center justify-center text-3xl">
                📊
              </div>
              <h3 className="font-bold mb-2">Актуальные данные</h3>
              <p className="text-sm text-wow-text-secondary">
                Таланты, ротации и BiS для текущего патча Midnight
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
