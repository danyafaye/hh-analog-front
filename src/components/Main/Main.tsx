import { FC } from 'react';

import * as ST from './styled.ts';
import IconSvg from '@assets/icons/Icon.svg?react';

type VacancyPreviewProps = {
  createdAt: 'string';
  favorite: boolean;
  vacancyName: string;
  vacancyTags: string[];
  vacancyPrice: string[];
  companyName: string;
  companyCity: string;
};

const Main: FC = () => {
  const mockData: VacancyPreviewProps = [
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
      favorite: false,
      vacancyName: 'Frontend-разработчик',
      vacancyTags: ['Middle', 'Опыт: 1-3 лет', 'Удаленная работа', 'Полная занятость'],
      vacancyPrice: ['', '100000'],
      companyName: 'IT-TI Company',
      companyCity: 'Новгород',
    },
    {
      createdAt: '26.09.23',
      favorite: false,
      vacancyName: 'Backend-разработчик PHP (Bitrix framework)',
      vacancyTags: ['Senior', 'Опыт: 3-6 лет', 'Удаленная работа', 'Полная занятость'],
      vacancyPrice: ['60000', '100000'],
      companyName: 'Names',
      companyCity: 'Москва',
    },
    {
      createdAt: '26.09.23',
      favorite: false,
      vacancyName: 'Backend-разработчик PHP (Bitrix framework)',
      vacancyTags: ['Senior', 'Опыт: 3-6 лет', 'Удаленная работа', 'Полная занятость'],
      vacancyPrice: ['60000', '100000'],
      companyName: 'Names',
      companyCity: 'Москва',
    },
    {
      createdAt: '26.09.23',
      favorite: false,
      vacancyName: 'Backend-разработчик PHP (Bitrix framework)',
      vacancyTags: ['Senior', 'Опыт: 3-6 лет', 'Удаленная работа', 'Полная занятость'],
      vacancyPrice: ['60000', '100000'],
      companyName: 'Names',
      companyCity: 'Москва',
    },
    {
      createdAt: '26.09.23',
      favorite: false,
      vacancyName: 'Backend-разработчик PHP (Bitrix framework)',
      vacancyTags: ['Senior', 'Опыт: 3-6 лет', 'Удаленная работа', 'Полная занятость'],
      vacancyPrice: ['60000', '100000'],
      companyName: 'Names',
      companyCity: 'Москва',
    },
  ];

  return (
    <ST.Wrapper>
      <ST.HeaderFilters>
        <ST.SelectFilter>
          Специализация
          <IconSvg />
        </ST.SelectFilter>
        <ST.SelectFilter>
          Регион
          <IconSvg />
        </ST.SelectFilter>
        <ST.SelectFilter>
          Квалификация
          <IconSvg />
        </ST.SelectFilter>
        <ST.SalaryFilter>
          Доход
          <ST.FilterWrapper>
            <ST.RubleIcon />
            <ST.DollarIcon />
            <ST.FilterInput />
            <ST.FilterInput />
          </ST.FilterWrapper>
        </ST.SalaryFilter>
      </ST.HeaderFilters>
      <ST.ContentWrapper>
        <ST.SideFilters>
          <ST.TitleWrapper>
            <ST.Title>Фильтр</ST.Title>
            <ST.ArrowDown />
          </ST.TitleWrapper>
          <ST.FilterBlockWrapper>
            <ST.FilterTitle>График работы</ST.FilterTitle>
            <ST.FilterItem>
              <ST.FilterCheck type="checkbox" />
              <ST.FilterName>Полный день</ST.FilterName>
            </ST.FilterItem>
            <ST.FilterItem>
              <ST.FilterCheck type="checkbox" />
              <ST.FilterName>Удаленная работа</ST.FilterName>
            </ST.FilterItem>
            <ST.FilterItem>
              <ST.FilterCheck type="checkbox" />
              <ST.FilterName>Гибкий график</ST.FilterName>
            </ST.FilterItem>
            <ST.FilterItem>
              <ST.FilterCheck type="checkbox" />
              <ST.FilterName>Сменный график</ST.FilterName>
            </ST.FilterItem>
          </ST.FilterBlockWrapper>
          <ST.FilterBlockWrapper>
            <ST.FilterTitle>Тип занятости</ST.FilterTitle>
            <ST.FilterItem>
              <ST.FilterCheck type="checkbox" />
              <ST.FilterName>Полная занятость</ST.FilterName>
            </ST.FilterItem>
            <ST.FilterItem>
              <ST.FilterCheck type="checkbox" />
              <ST.FilterName>Частичная занятость</ST.FilterName>
            </ST.FilterItem>
            <ST.FilterItem>
              <ST.FilterCheck type="checkbox" />
              <ST.FilterName>Проектная работа</ST.FilterName>
            </ST.FilterItem>
            <ST.FilterItem>
              <ST.FilterCheck type="checkbox" />
              <ST.FilterName>Стажировка</ST.FilterName>
            </ST.FilterItem>
          </ST.FilterBlockWrapper>
          <ST.FilterBlockWrapper>
            <ST.FilterTitle>Опыт работы</ST.FilterTitle>
            <ST.FilterItem>
              <ST.FilterRadio type="radio" />
              <ST.FilterName>Не имеет значения</ST.FilterName>
            </ST.FilterItem>
            <ST.FilterItem>
              <ST.FilterRadio type="radio" />
              <ST.FilterName>Нет опыта</ST.FilterName>
            </ST.FilterItem>
            <ST.FilterItem>
              <ST.FilterRadio type="radio" />
              <ST.FilterName>От 1 года до 3 лет</ST.FilterName>
            </ST.FilterItem>
            <ST.FilterItem>
              <ST.FilterRadio type="radio" />
              <ST.FilterName>От 3 до 6 лет</ST.FilterName>
            </ST.FilterItem>
            <ST.FilterItem>
              <ST.FilterRadio type="radio" />
              <ST.FilterName>Более 6 лет</ST.FilterName>
            </ST.FilterItem>
          </ST.FilterBlockWrapper>
          <ST.FilterBlockWrapper>
            <ST.FilterTitle>Образование</ST.FilterTitle>
            <ST.FilterItem>
              <ST.FilterCheck type="checkbox" />
              <ST.FilterName>Не требуется или не указано</ST.FilterName>
            </ST.FilterItem>
            <ST.FilterItem>
              <ST.FilterCheck type="checkbox" />
              <ST.FilterName>Высшее</ST.FilterName>
            </ST.FilterItem>
            <ST.FilterItem>
              <ST.FilterCheck type="checkbox" />
              <ST.FilterName>Среднее профессиональное</ST.FilterName>
            </ST.FilterItem>
          </ST.FilterBlockWrapper>
          <ST.Reset>Сбросить всё</ST.Reset>
        </ST.SideFilters>
        <ST.Content>
          <ST.ContentTitleWrapper>
            <ST.ContentTitle>Вакансий</ST.ContentTitle>
            <ST.ContentCount>160</ST.ContentCount>
          </ST.ContentTitleWrapper>
          <ST.ContentCards>
            <ST.CardWrapper>
              <ST.CardContentWrapper>
                <ST.CardContentHeader>
                  <ST.CardWidgets>
                    <ST.CardDate>26.09.23</ST.CardDate>
                    <ST.FavoriteCircle />
                  </ST.CardWidgets>
                  <ST.CardName>Backend-разработчик PHP (Bitrix framework)</ST.CardName>
                </ST.CardContentHeader>
                <ST.CardContentTags>
                  <ST.CardTag>Senior</ST.CardTag>
                  <ST.CardTag>Опыт: 3-6 лет</ST.CardTag>
                  <ST.CardTag>Удаленная работа</ST.CardTag>
                  <ST.CardTag>Полная занятость</ST.CardTag>
                </ST.CardContentTags>
              </ST.CardContentWrapper>
              <ST.CardFooterWrapper>
                <ST.CardFooterSalary>от 60 000 до 100 000 ₽</ST.CardFooterSalary>
                <ST.CardFooterInfo>
                  <ST.CardCompanyWrapper>
                    <ST.CardCompanyName>Names</ST.CardCompanyName>
                    <ST.CardCompanyCity>Москва</ST.CardCompanyCity>
                  </ST.CardCompanyWrapper>
                  <ST.CardCompanyButton>Отклик</ST.CardCompanyButton>
                </ST.CardFooterInfo>
              </ST.CardFooterWrapper>
            </ST.CardWrapper>
          </ST.ContentCards>
        </ST.Content>
      </ST.ContentWrapper>
    </ST.Wrapper>
  );
};

export { Main };
