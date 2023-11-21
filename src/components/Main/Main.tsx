import { FC, useMemo } from 'react';

import * as ST from './styled.ts';
/*import IconSvg from '@assets/icons/Icon.svg?react';*/
import { mockData } from '@components/Main/mockData.ts';

const Main: FC = () => {
  const renderCards = useMemo(
    () =>
      mockData.map((it) => (
        <ST.CardWrapper>
          <ST.CardContentWrapper>
            <ST.CardContentHeader>
              <ST.CardWidgets>
                <ST.CardDate>{it.createdAt}</ST.CardDate>
                {it.favorite ? <ST.FavoriteActive /> : <ST.FavoriteCircle />}
              </ST.CardWidgets>
              <ST.CardName>{it.vacancyName}</ST.CardName>
            </ST.CardContentHeader>
            <ST.CardContentTags>
              {it.vacancyTags.map((it) => (
                <ST.CardTag>{it}</ST.CardTag>
              ))}
            </ST.CardContentTags>
          </ST.CardContentWrapper>
          <ST.Line />
          <ST.CardFooterWrapper>
            <ST.CardFooterSalary>от 60 000 до 100 000 ₽</ST.CardFooterSalary>
            <ST.CardFooterInfo>
              <ST.CardCompanyWrapper>
                <ST.CardCompanyName>{it.companyName}</ST.CardCompanyName>
                <ST.CardCompanyCity>{it.companyCity}</ST.CardCompanyCity>
              </ST.CardCompanyWrapper>
              <ST.CardCompanyButton>Отклик</ST.CardCompanyButton>
            </ST.CardFooterInfo>
          </ST.CardFooterWrapper>
        </ST.CardWrapper>
      )),
    [mockData],
  );

  /*  const onInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    const pattern = /[A-Za-zА-Яа-яЁё]/g;
    return (e.target.value = e.target.value.replace(pattern, ''));
  }; //TODO: вынести это в отдельную компоненту InputNumber*/

  return (
    <ST.Wrapper>
      {/*      <ST.HeaderFilters>
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
          <ST.FilterWrapper>
            <ST.CurrencyWrapper>
              <ST.RubleIcon />
              <ST.DollarIcon />
            </ST.CurrencyWrapper>
            <ST.FilterInput
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              onInput={onInputValue}
            />
            <ST.FilterInput
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              onInput={onInputValue}
            />
          </ST.FilterWrapper>
        </ST.SalaryFilter>
      </ST.HeaderFilters>*/}
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
          <ST.ContentFilters>
            <ST.FiltersWrapper>
              <ST.ContentFilter>
                <>По соответствию</>
                <ST.ArrowRight />
              </ST.ContentFilter>
              <ST.ContentFilter>
                <>За всё время</>
                <ST.ArrowRight />
              </ST.ContentFilter>
            </ST.FiltersWrapper>
            <ST.FiltersPagination>
              <>На странице</>
              <ST.UpperPaginationWrapper>
                <ST.PaginationBlock isActive>8</ST.PaginationBlock>
                <ST.PaginationBlock>50</ST.PaginationBlock>
                <ST.PaginationBlock>150</ST.PaginationBlock>
                <ST.PaginationBlock>200</ST.PaginationBlock>
              </ST.UpperPaginationWrapper>
            </ST.FiltersPagination>
          </ST.ContentFilters>
          <ST.ContentCards>{renderCards}</ST.ContentCards>
        </ST.Content>
      </ST.ContentWrapper>
    </ST.Wrapper>
  );
};

export { Main };
