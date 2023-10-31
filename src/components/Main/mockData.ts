type VacancyPreviewProps = {
  createdAt: string;
  favorite: boolean;
  vacancyName: string;
  vacancyTags: string[];
  vacancyPrice: string[];
  companyName: string;
  companyCity: string;
};

const mockData: VacancyPreviewProps[] = [
  {
    createdAt: '26.09.23',
    favorite: true,
    vacancyName: 'Backend-разработчик PHP (Bitrix framework)',
    vacancyTags: ['Senior', 'Опыт: 3-6 лет', 'Удаленная работа', 'Полная занятость'],
    vacancyPrice: ['60000', '100000'],
    companyName: 'Names',
    companyCity: 'Москва',
  },
  {
    createdAt: '24.10.23',
    favorite: false,
    vacancyName: 'Middle/Senior Backend разработчик (Python)',
    vacancyTags: ['Middle', 'Senior', 'Опыт: 3-6 лет', 'Удаленная работа', 'Полная занятость'],
    vacancyPrice: ['180000', ''],
    companyName: 'WEBLY.LL',
    companyCity: 'Санкт-Петербург',
  },
  {
    createdAt: '20.10.23',
    favorite: false,
    vacancyName: 'HTML-Верстальщик',
    vacancyTags: ['Middle', 'Опыт: 1-3 лет', 'Удаленная работа', 'Полная занятость'],
    vacancyPrice: ['', '100000'],
    companyName: 'Lazyrit Analytics',
    companyCity: 'Вологда',
  },
  {
    createdAt: '18.10.23',
    favorite: true,
    vacancyName: 'Frontend-разработчик',
    vacancyTags: ['Middle', 'Опыт: 1-3 лет', 'Удаленная работа', 'Полная занятость'],
    vacancyPrice: ['', '100000'],
    companyName: 'IT-TI Company',
    companyCity: 'Новгород',
  },
  {
    createdAt: '29.10.23',
    favorite: false,
    vacancyName: 'Фуллстек веб-разработчик / Web Developer',
    vacancyTags: ['Senior', 'Опыт: 3-6 лет', 'Удаленная работа', 'Полная занятость'],
    vacancyPrice: ['200000', ''],
    companyName: 'DragonRu',
    companyCity: 'Москва',
  },
  {
    createdAt: '15.10.23',
    favorite: true,
    vacancyName: 'PHP разработчик в веб-студию',
    vacancyTags: ['Middle', 'Junior', 'Опыт: 3-6 лет', 'Удаленная работа', 'Полная занятость'],
    vacancyPrice: ['60000', '100000'],
    companyName: 'ITECHNOLOGY',
    companyCity: 'Саратов',
  },
  {
    createdAt: '26.09.23',
    favorite: false,
    vacancyName: 'Backend программист',
    vacancyTags: ['Junior', 'Middle', 'Опыт: 1-3 лет', 'Удаленная работа', 'Полная занятость'],
    vacancyPrice: ['', '50000'],
    companyName: 'IT RUSSIA',
    companyCity: 'Камышин',
  },
  {
    createdAt: '26.09.23',
    favorite: true,
    vacancyName: 'Fullstack разработчик Bitrix | Wordpress',
    vacancyTags: ['Middle', 'Опыт: 1-3 лет', 'Удаленная работа', 'Полная занятость'],
    vacancyPrice: ['55000', '70000'],
    companyName: 'REDFOX IT Company',
    companyCity: 'Ершов',
  },
];

export { mockData };
