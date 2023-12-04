type CardProps = {
  id: string;
  createdAt: string;
  favorite: boolean;
  cardName: string;
  cardTags: string[];
  cardPrice: string[];
  city: string;
};

type CompanyCardProps = CardProps & {
  companyName: string;
};

type ResumeCardProps = CardProps & {
  fullName: string;
}

const mockData: CompanyCardProps[] = [
  {
    id: '1',
    createdAt: '26.09.23',
    favorite: true,
    cardName: 'Backend-разработчик PHP (Bitrix framework)',
    cardTags: ['Senior', 'Опыт: 3-6 лет', 'Удаленная работа', 'Полная занятость'],
    cardPrice: ['60000', '100000'],
    companyName: 'Names',
    city: 'Москва',
  },
  {
    id: '2',
    createdAt: '24.10.23',
    favorite: false,
    cardName: 'Middle/Senior Backend разработчик (Python)',
    cardTags: ['Middle', 'Senior', 'Опыт: 3-6 лет', 'Удаленная работа', 'Полная занятость'],
    cardPrice: ['180000', ''],
    companyName: 'WEBLY.LL',
    city: 'Санкт-Петербург',
  },
  {
    id: '3',
    createdAt: '20.10.23',
    favorite: false,
    cardName: 'HTML-Верстальщик',
    cardTags: ['Middle', 'Опыт: 1-3 лет', 'Удаленная работа', 'Полная занятость'],
    cardPrice: ['', '100000'],
    companyName: 'Lazyrit Analytics',
    city: 'Вологда',
  },
  {
    id: '4',
    createdAt: '18.10.23',
    favorite: true,
    cardName: 'Frontend-разработчик',
    cardTags: ['Middle', 'Опыт: 1-3 лет', 'Удаленная работа', 'Полная занятость'],
    cardPrice: ['', '100000'],
    companyName: 'IT-TI Company',
    city: 'Новгород',
  },
  {
    id: '5',
    createdAt: '29.10.23',
    favorite: false,
    cardName: 'Фуллстек веб-разработчик / Web Developer',
    cardTags: ['Senior', 'Опыт: 3-6 лет', 'Удаленная работа', 'Полная занятость'],
    cardPrice: ['200000', ''],
    companyName: 'DragonRu',
    city: 'Москва',
  },
  {
    id: '6',
    createdAt: '15.10.23',
    favorite: true,
    cardName: 'PHP разработчик в веб-студию',
    cardTags: ['Middle', 'Junior', 'Опыт: 3-6 лет', 'Удаленная работа', 'Полная занятость'],
    cardPrice: ['60000', '100000'],
    companyName: 'ITECHNOLOGY',
    city: 'Саратов',
  },
  {
    id: '7',
    createdAt: '26.09.23',
    favorite: false,
    cardName: 'Backend программист',
    cardTags: ['Junior', 'Middle', 'Опыт: 1-3 лет', 'Удаленная работа', 'Полная занятость'],
    cardPrice: ['', '50000'],
    companyName: 'IT RUSSIA',
    city: 'Камышин',
  },
  {
    id: '8',
    createdAt: '26.09.23',
    favorite: true,
    cardName: 'Fullstack разработчик Bitrix | Wordpress',
    cardTags: ['Middle', 'Опыт: 1-3 лет', 'Удаленная работа', 'Полная занятость'],
    cardPrice: ['55000', '70000'],
    companyName: 'REDFOX IT Company',
    city: 'Ершов',
  },
];

const resumeMockData: ResumeCardProps[] = [
  {
    id: '1',
    createdAt: '26.09.23',
    favorite: true,
    cardName: 'Backend-разработчик PHP (Bitrix framework)',
    cardTags: ['Senior', 'Опыт: 3-6 лет', 'Удаленная работа', 'Полная занятость'],
    cardPrice: [],
    fullName: 'Игнатьев А. А.',
    city: 'Москва',
  },
  {
    id: '2',
    createdAt: '24.10.23',
    favorite: false,
    cardName: 'Middle/Senior Backend разработчик (Python)',
    cardTags: ['Middle', 'Senior', 'Опыт: 3-6 лет', 'Удаленная работа', 'Полная занятость'],
    cardPrice: ['180000', ''],
    fullName: 'Иванов А. А.',
    city: 'Москва',
  },
  {
    id: '3',
    createdAt: '20.10.23',
    favorite: false,
    cardName: 'HTML-Верстальщик',
    cardTags: ['Middle', 'Опыт: 1-3 лет', 'Удаленная работа', 'Полная занятость'],
    cardPrice: ['', '100000'],
    fullName: 'Попов А. А.',
    city: 'Москва',
  },
  {
    id: '4',
    createdAt: '18.10.23',
    favorite: true,
    cardName: 'Frontend-разработчик',
    cardTags: ['Middle', 'Опыт: 1-3 лет', 'Удаленная работа', 'Полная занятость'],
    cardPrice: ['', '100000'],
    fullName: 'Орлов К. А.',
    city: 'Москва',
  },
  {
    id: '5',
    createdAt: '29.10.23',
    favorite: false,
    cardName: 'Фуллстек веб-разработчик / Web Developer',
    cardTags: ['Senior', 'Опыт: 3-6 лет', 'Удаленная работа', 'Полная занятость'],
    cardPrice: ['200000', ''],
    fullName: 'Федоров А. А.',
    city: 'Москва',
  },
  {
    id: '6',
    createdAt: '15.10.23',
    favorite: true,
    cardName: 'PHP разработчик в веб-студию',
    cardTags: ['Middle', 'Junior', 'Опыт: 3-6 лет', 'Удаленная работа', 'Полная занятость'],
    cardPrice: ['60000', '100000'],
    fullName: 'Конюх А. А.',
    city: 'Москва',
  },
  {
    id: '7',
    createdAt: '26.09.23',
    favorite: false,
    cardName: 'Backend программист',
    cardTags: ['Junior', 'Middle', 'Опыт: 1-3 лет', 'Удаленная работа', 'Полная занятость'],
    cardPrice: ['', '50000'],
    fullName: 'Игнатьев А. А.',
    city: 'Москва',
  },
  {
    id: '8',
    createdAt: '26.09.23',
    favorite: true,
    cardName: 'Fullstack разработчик Bitrix | Wordpress',
    cardTags: ['Middle', 'Опыт: 1-3 лет', 'Удаленная работа', 'Полная занятость'],
    cardPrice: ['55000', '70000'],
    fullName: 'Игнатьев А. А.',
    city: 'Москва',
  },
];

export { mockData, resumeMockData};
export type { CardProps, CompanyCardProps, ResumeCardProps };
