export interface ClassData {
  name: string;
  slug: string;
  icon: string;
  description: string;
  faction: 'alliance' | 'horde' | 'both';
  specs: SpecData[];
}

export interface SpecData {
  id: string;
  name: string;
  role: 'tank' | 'healer' | 'dps' | 'melee_dps' | 'ranged_dps';
  description: string;
  talents?: string;
  apl?: APLData;
}

export interface APLData {
  singleTarget: APLAction[];
  aoe: APLAction[];
  cooldowns: APLAction[];
}

export interface APLAction {
  id: string;
  name: string;
  description: string;
  conditions: string[];
  spell: SpellData;
  priority: number;
}

export interface SpellData {
  id: number;
  name: string;
  icon: string;
  description?: string;
  cooldown?: string;
  cost?: string;
}

// Пример данных для всех классов (будет заполнено из парсера)
export const classesData: ClassData[] = [
  {
    name: 'Воин',
    slug: 'warrior',
    icon: '⚔️',
    description: 'Мастер ближнего боя, использующий ярость для сокрушения врагов.',
    faction: 'both',
    specs: [
      {
        id: 'arms',
        name: 'Оружие',
        role: 'melee_dps',
        description: 'Медленные мощные атаки двуручным оружием.',
      },
      {
        id: 'fury',
        name: 'Неистовство',
        role: 'melee_dps',
        description: 'Быстрые атаки двумя оружиями в состоянии неистовства.',
      },
      {
        id: 'protection',
        name: 'Защита',
        role: 'tank',
        description: 'Танк с высоким запасом здоровья и защитой.',
      },
    ],
  },
  {
    name: 'Паладин',
    slug: 'paladin',
    icon: '🛡️',
    description: 'Святой воин, сочетающий силу света с тяжелой броней.',
    faction: 'both',
    specs: [
      {
        id: 'holy',
        name: 'Свет',
        role: 'healer',
        description: 'Исцеление силой святого света.',
      },
      {
        id: 'protection',
        name: 'Защита',
        role: 'tank',
        description: 'Танк, защищенный магией света.',
      },
      {
        id: 'retribution',
        name: 'Воздаяние',
        role: 'melee_dps',
        description: 'Боец ближнего боя, карающий врагов именем Света.',
      },
    ],
  },
  {
    name: 'Охотник',
    slug: 'hunter',
    icon: '🏹',
    description: 'Мастер лука и зверей, сражающийся на расстоянии.',
    faction: 'both',
    specs: [
      {
        id: 'beast-mastery',
        name: 'Повелитель зверей',
        role: 'ranged_dps',
        description: 'Приручение и использование сильных питомцев.',
      },
      {
        id: 'marksmanship',
        name: 'Стрельба',
        role: 'ranged_dps',
        description: 'Точная стрельба из лука или ружья.',
      },
      {
        id: 'survival',
        name: 'Выживание',
        role: 'melee_dps',
        description: 'Ближний бой с ловушками и копьем.',
      },
    ],
  },
  {
    name: 'Разбойник',
    slug: 'rogue',
    icon: '🗡️',
    description: 'Мастер скрытности и смертоносных комбинаций.',
    faction: 'both',
    specs: [
      {
        id: 'assassination',
        name: 'Ликвидация',
        role: 'melee_dps',
        description: 'Отравления и быстрые атаки кинжалами.',
      },
      {
        id: 'outlaw',
        name: 'Вне закона',
        role: 'melee_dps',
        description: 'Широкие атаки и случайные баффы.',
      },
      {
        id: 'subtlety',
        name: 'Скрытность',
        role: 'melee_dps',
        description: 'Атаки из скрытности с высокими критическими ударами.',
      },
    ],
  },
  {
    name: 'Жрец',
    slug: 'priest',
    icon: '✨',
    description: 'Мастер исцеления и теневой магии.',
    faction: 'both',
    specs: [
      {
        id: 'discipline',
        name: 'Послушание',
        role: 'healer',
        description: 'Исцеление через нанесение урона.',
      },
      {
        id: 'holy',
        name: 'Свет',
        role: 'healer',
        description: 'Классическое исцеление молитвами.',
      },
      {
        id: 'shadow',
        name: 'Тень',
        role: 'ranged_dps',
        description: 'Урон силами тьмы и безумия.',
      },
    ],
  },
  {
    name: 'Рыцарь смерти',
    slug: 'death-knight',
    icon: '💀',
    description: 'Мертвый воин, использующий силы некротической энергии.',
    faction: 'both',
    specs: [
      {
        id: 'blood',
        name: 'Нечестивость',
        role: 'tank',
        description: 'Танк, исцеляющийся через нанесение урона.',
      },
      {
        id: 'frost',
        name: 'Лёд',
        role: 'melee_dps',
        description: 'Медленные мощные атаки ледяной энергией.',
      },
      {
        id: 'unholy',
        name: 'Нечестивость',
        role: 'melee_dps',
        description: 'Призыв нежити и болезни.',
      },
    ],
  },
  {
    name: 'Шаман',
    slug: 'shaman',
    icon: '⚡',
    description: 'Мастер стихий, направляющий силы природы.',
    faction: 'both',
    specs: [
      {
        id: 'elemental',
        name: 'Стихии',
        role: 'ranged_dps',
        description: 'Урон от молний и огня на расстоянии.',
      },
      {
        id: 'enhancement',
        name: 'Совершенствование',
        role: 'melee_dps',
        description: 'Ближний бой с усилением стихиями.',
      },
      {
        id: 'restoration',
        name: 'Исцеление',
        role: 'healer',
        description: 'Исцеление цепными волнами и тотемами.',
      },
    ],
  },
  {
    name: 'Маг',
    slug: 'mage',
    icon: '🔥',
    description: 'Мастер тайной магии, огня и льда.',
    faction: 'both',
    specs: [
      {
        id: 'arcane',
        name: 'Тайная магия',
        role: 'ranged_dps',
        description: 'Управление маной для мощных заклинаний.',
      },
      {
        id: 'fire',
        name: 'Огонь',
        role: 'ranged_dps',
        description: 'Критические удары и горящие цели.',
      },
      {
        id: 'frost',
        name: 'Лёд',
        role: 'ranged_dps',
        description: 'Замораживание и контроль врагов.',
      },
    ],
  },
  {
    name: 'Чернокнижник',
    slug: 'warlock',
    icon: '🔮',
    description: 'Призыватель демонов и мастер темной магии.',
    faction: 'both',
    specs: [
      {
        id: 'affliction',
        name: 'Колдовство',
        role: 'ranged_dps',
        description: 'Множественные периодические эффекты урона.',
      },
      {
        id: 'demonology',
        name: 'Демонология',
        role: 'ranged_dps',
        description: 'Призыв армии демонов.',
      },
      {
        id: 'destruction',
        name: 'Разрушение',
        role: 'ranged_dps',
        description: 'Мощные взрывы хаотического огня.',
      },
    ],
  },
  {
    name: 'Монах',
    slug: 'monk',
    icon: '👊',
    description: 'Мастер боевых искусств, использующий ци.',
    faction: 'both',
    specs: [
      {
        id: 'brewmaster',
        name: 'Хранитель',
        role: 'tank',
        description: 'Танк, отклоняющий атаки и управляющий уроном.',
      },
      {
        id: 'mistweaver',
        name: 'Ткач туманов',
        role: 'healer',
        description: 'Исцеление туманами и боем.',
      },
      {
        id: 'windwalker',
        name: 'Ходок ветров',
        role: 'melee_dps',
        description: 'Быстрые комбинации ударов.',
      },
    ],
  },
  {
    name: 'Друид',
    slug: 'druid',
    icon: '🌙',
    description: 'Мастер превращений и сил природы.',
    faction: 'both',
    specs: [
      {
        id: 'balance',
        name: 'Баланс',
        role: 'ranged_dps',
        description: 'Урон от звездного огня и лунного света.',
      },
      {
        id: 'feral',
        name: 'Сила дикого зверя',
        role: 'melee_dps',
        description: 'Ближний бой в форме кошки.',
      },
      {
        id: 'guardian',
        name: 'Страж',
        role: 'tank',
        description: 'Танк в форме медведя.',
      },
      {
        id: 'restoration',
        name: 'Исцеление',
        role: 'healer',
        description: 'Исцеление периодическими эффектами.',
      },
    ],
  },
  {
    name: 'Охотник на демонов',
    slug: 'demon-hunter',
    icon: '😈',
    description: 'Быстрый боец, использующий силу демонов.',
    faction: 'horde',
    specs: [
      {
        id: 'havoc',
        name: 'Разорение',
        role: 'melee_dps',
        description: 'Быстрый урон хаосом.',
      },
      {
        id: 'vengeance',
        name: 'Возмездие',
        role: 'tank',
        description: 'Танк, поглощающий боль.',
      },
    ],
  },
  {
    name: 'Еврей',
    slug: 'evoker',
    icon: '🐉',
    description: 'Мастер драконьей магии времени и пространства.',
    faction: 'both',
    specs: [
      {
        id: 'devastation',
        name: 'Опустошение',
        role: 'ranged_dps',
        description: 'Урон драконьей магией.',
      },
      {
        id: 'preservation',
        name: 'Хранение',
        role: 'healer',
        description: 'Исцеление магией времени.',
      },
      {
        id: 'augmentation',
        name: 'Усиление',
        role: 'ranged_dps',
        description: 'Усиление союзников драконьей магией.',
      },
    ],
  },
];
