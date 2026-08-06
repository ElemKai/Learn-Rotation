/**
 * Скрипт для парсинга APL данных из SimulationCraft
 * Запускается каждые 3 часа через GitHub Actions
 */

const fs = require('fs');
const path = require('path');

// URL репозитория SimulationCraft с APL файлами
const SIMC_APL_BASE_URL = 'https://raw.githubusercontent.com/simulationcraft/simc/midnight/ActionPriorityLists/default';

// Маппинг классов WoW к именам файлов в simc
const classFileMapping = {
  'warrior': 'warrior',
  'paladin': 'paladin',
  'hunter': 'hunter',
  'rogue': 'rogue',
  'priest': 'priest',
  'death-knight': 'deathknight',
  'shaman': 'shaman',
  'mage': 'mage',
  'warlock': 'warlock',
  'monk': 'monk',
  'druid': 'druid',
  'demon-hunter': 'demonhunter',
  'evoker': 'evoker',
};

// Спеки для каждого класса
const specMapping = {
  'warrior': ['arms', 'fury', 'protection'],
  'paladin': ['holy', 'protection', 'retribution'],
  'hunter': ['beast_mastery', 'marksmanship', 'survival'],
  'rogue': ['assassination', 'outlaw', 'subtlety'],
  'priest': ['discipline', 'holy', 'shadow'],
  'death-knight': ['blood', 'frost', 'unholy'],
  'shaman': ['elemental', 'enhancement', 'restoration'],
  'mage': ['arcane', 'fire', 'frost'],
  'warlock': ['affliction', 'demonology', 'destruction'],
  'monk': ['brewmaster', 'mistweaver', 'windwalker'],
  'druid': ['balance', 'feral', 'guardian', 'restoration'],
  'demon-hunter': ['havoc', 'vengeance'],
  'evoker': ['devastation', 'preservation', 'augmentation'],
};

/**
 * Парсит один APL файл
 */
async function parseAPLFile(className, specName) {
  const simcClassName = classFileMapping[className];
  const fileName = `${simcClassName}_${specName}.apl`;
  const url = `${SIMC_APL_BASE_URL}/${fileName}`;

  try {
    // В реальном скрипте здесь будет fetch запрос
    // Для примера возвращаем заглушку
    console.log(`Парсинг: ${url}`);
    
    return {
      singleTarget: [],
      aoe: [],
      cooldowns: [],
    };
  } catch (error) {
    console.error(`Ошибка при парсинге ${fileName}:`, error.message);
    return null;
  }
}

/**
 * Основная функция обновления данных
 */
async function updateAPLData() {
  const outputDir = path.join(__dirname, '..', 'src', 'data', 'apl');
  
  // Создаем директорию если не существует
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log('Начало обновления APL данных...');

  for (const [className, specs] of Object.entries(specMapping)) {
    console.log(`\nОбработка класса: ${className}`);
    
    const classData = {};
    
    for (const spec of specs) {
      console.log(`  - Обработка спека: ${spec}`);
      const aplData = await parseAPLFile(className, spec);
      
      if (aplData) {
        classData[spec] = aplData;
      }
    }
    
    // Сохраняем данные для класса
    if (Object.keys(classData).length > 0) {
      const outputPath = path.join(outputDir, `${className}.json`);
      fs.writeFileSync(outputPath, JSON.stringify(classData, null, 2));
      console.log(`  ✓ Сохранено: ${outputPath}`);
    }
  }

  console.log('\n✓ Обновление APL данных завершено!');
}

// Запуск
updateAPLData().catch(console.error);
