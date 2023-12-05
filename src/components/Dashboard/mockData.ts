import { IconsType } from '@src/constants/iconsDictionary.ts';

type ProfileLink = {
  icon: IconsType;
  link: string;
  text?: string;
};

type ProfileInfo = {
  name: string;
  age: string;
  birthdayDate: string;
  avatar: string;
  address: string;
};

export type FeedbackStatus = 'invited' | 'rejected' | 'viewed' | 'notViewed';

export type ProfileFeedbackData = {
  name: string;
  company: string;
  status: FeedbackStatus;
  price: string[];
  date: string;
};

export type ProfileViewsData = {
  date: string;
  count: number;
};

type DashboardMockData = {
  info: ProfileInfo;
  tags: string[];
  links: ProfileLink[];

  feedback?: ProfileFeedbackData[];
  views?: ProfileViewsData[];
};

const mockData: DashboardMockData = {
  info: {
    name: 'Петр Петрович',
    age: '20 лет',
    birthdayDate: '01.11.2003',
    avatar:
      'https://www.figma.com/file/u3WM9IFfg4LqD4Dfpq3wnY/image/aa73e64136fab335d1d3c2f26ec09d713e6e84f6',
    address: 'Россия, Москва',
  },
  tags: ['Senior', 'Опыт: 3-6 лет', 'Удаленная работа', 'Полная занятость'],
  links: [
    {
      icon: 'telegram',
      link: '/',
      text: '@petr762008',
    },
    {
      icon: 'github',
      link: '/',
    },
    {
      icon: 'google',
      link: '/',
    },
  ],
  feedback: [
    {
      name: 'Backend программист',
      company: 'IT RUSSIA',
      status: 'invited',
      price: ['60000', '100000'],
      date: '30 октября 2023',
    },
    {
      name: 'Backend программист',
      company: 'IT RUSSIA',
      status: 'rejected',
      price: ['', '100000'],
      date: '30 октября 2023',
    },
    {
      name: 'Backend программист',
      company: 'IT RUSSIA',
      status: 'viewed',
      price: ['100000', ''],
      date: '30 октября 2023',
    },
    {
      name: 'Backend программист',
      company: 'IT RUSSIA',
      status: 'notViewed',
      price: [],
      date: '30 октября 2023',
    },
  ],
  views: [
    {
      date: '15.10',
      count: 5,
    },
    {
      date: '16.10',
      count: 7,
    },
    {
      date: '19.10',
      count: 10,
    },
    {
      date: '20.10',
      count: 17,
    },
    {
      date: '29.10',
      count: 19,
    },
    {
      date: '30.10',
      count: 14,
    },
  ],
};

export { mockData };
