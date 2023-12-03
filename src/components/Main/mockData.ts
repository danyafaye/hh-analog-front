type CardProps = {
  createdAt: string;
  favorite: boolean;
  cardName: string;
  cardTags: string[];
  cardPrice: string[];
  companyName: string;
  companyCity: string;
};

const mockData: CardProps[] = [
  {
    createdAt: '26.09.23',
    favorite: true,
    cardName: 'Backend-разработчик PHP (Bitrix framework)',
    cardTags: ['Senior', 'Опыт: 3-6 лет', 'Удаленная работа', 'Полная занятость'],
    cardPrice: ['60000', '100000'],
    companyName: 'Names',
    companyCity: 'Москва',
  },
  {
    createdAt: '24.10.23',
    favorite: false,
    cardName: 'Middle/Senior Backend разработчик (Python)',
    cardTags: ['Middle', 'Senior', 'Опыт: 3-6 лет', 'Удаленная работа', 'Полная занятость'],
    cardPrice: ['180000', ''],
    companyName: 'WEBLY.LL',
    companyCity: 'Санкт-Петербург',
  },
  {
    createdAt: '20.10.23',
    favorite: false,
    cardName: 'HTML-Верстальщик',
    cardTags: ['Middle', 'Опыт: 1-3 лет', 'Удаленная работа', 'Полная занятость'],
    cardPrice: ['', '100000'],
    companyName: 'Lazyrit Analytics',
    companyCity: 'Вологда',
  },
  {
    createdAt: '18.10.23',
    favorite: true,
    cardName: 'Frontend-разработчик',
    cardTags: ['Middle', 'Опыт: 1-3 лет', 'Удаленная работа', 'Полная занятость'],
    cardPrice: ['', '100000'],
    companyName: 'IT-TI Company',
    companyCity: 'Новгород',
  },
  {
    createdAt: '29.10.23',
    favorite: false,
    cardName: 'Фуллстек веб-разработчик / Web Developer',
    cardTags: ['Senior', 'Опыт: 3-6 лет', 'Удаленная работа', 'Полная занятость'],
    cardPrice: ['200000', ''],
    companyName: 'DragonRu',
    companyCity: 'Москва',
  },
  {
    createdAt: '15.10.23',
    favorite: true,
    cardName: 'PHP разработчик в веб-студию',
    cardTags: ['Middle', 'Junior', 'Опыт: 3-6 лет', 'Удаленная работа', 'Полная занятость'],
    cardPrice: ['60000', '100000'],
    companyName: 'ITECHNOLOGY',
    companyCity: 'Саратов',
  },
  {
    createdAt: '26.09.23',
    favorite: false,
    cardName: 'Backend программист',
    cardTags: ['Junior', 'Middle', 'Опыт: 1-3 лет', 'Удаленная работа', 'Полная занятость'],
    cardPrice: ['', '50000'],
    companyName: 'IT RUSSIA',
    companyCity: 'Камышин',
  },
  {
    createdAt: '26.09.23',
    favorite: true,
    cardName: 'Fullstack разработчик Bitrix | Wordpress',
    cardTags: ['Middle', 'Опыт: 1-3 лет', 'Удаленная работа', 'Полная занятость'],
    cardPrice: ['55000', '70000'],
    companyName: 'REDFOX IT Company',
    companyCity: 'Ершов',
  },
];

export { mockData };
export type { CardProps };
