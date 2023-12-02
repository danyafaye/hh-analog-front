import { ChangeEvent, FC, useMemo, useState } from 'react';

import * as ST from './styled.ts';
import { mockData } from '@components/Main/mockData.ts';
import { Button } from '@components/Button';
import { Select } from '@components/Select/index.ts';
import { SelectOptions } from '@components/Select/Select.tsx';

const Main: FC = () => {
  const [isFiltersWrapped, setIsFiltersWrapped] = useState(true); //TODO: тоже вынести в хук

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
              <Button
                onClickHandler={() => {}}
                text="Отклик"
              />
            </ST.CardFooterInfo>
          </ST.CardFooterWrapper>
        </ST.CardWrapper>
      )),
    [mockData],
  );

  const onInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    const pattern = /[A-Za-zА-Яа-яЁё]/g;
    return (e.target.value = e.target.value.replace(pattern, ''));
  }; //TODO: вынести это в отдельную компоненту InputNumber

  const firstFilterOptions: SelectOptions[] = [
    {
      value: 'dateNew',
      label: 'По актуальности',
    },
    {
      value: 'asc',
      label: 'По возрастанию',
    },
    {
      value: 'desc',
      label: 'По убыванию',
    },
  ];

  const secondFilterOptions: SelectOptions[] = [
    {
      value: 'allTime',
      label: 'За всё время',
    },
    {
      value: 'month',
      label: 'За последний месяц',
    },
  ];

  const scheduleOptions: SelectOptions[] = [
    {
      value: 'fullDay',
      label: 'Полный день',
    },
    {
      value: 'remote',
      label: 'Удаленная работа',
    },
    {
      value: 'flex',
      label: 'Гибкий график',
    },
    {
      value: 'shift',
      label: 'Сменный график',
    },
  ];

  const employmentTypeOptions: SelectOptions[] = [
    {
      value: 'fullEmployment',
      label: 'Полная занятость',
    },
    {
      value: 'partlyEmployment',
      label: 'Частичная занятость',
    },
    {
      value: 'projectWork',
      label: 'Проектная работа',
    },
    {
      value: 'internship',
      label: 'Полная занятость',
    },
  ]; //TODO: вынести все в хук и добавить форму для обработки фильтров

  const experienceOptions: SelectOptions[] = [
    {
      value: 'irrelevant',
      label: 'Не имеет значения',
    },
    {
      value: 'noExp',
      label: 'Нет опыта',
    },
    {
      value: '1-3',
      label: 'От 1 года до 3 лет',
    },
    {
      value: '3-6',
      label: 'От 3 до 6 лет',
    },
    {
      value: '6+',
      label: 'Более 6 лет',
    },
  ];

  const educationOptions: SelectOptions[] = [
    {
      value: 'notRequired',
      label: 'Не требуется или не указано',
    },
    {
      value: 'higherEd',
      label: 'Высшее',
    },
    {
      value: 'secondaryEd',
      label: 'Среднее профессиональное',
    },
  ];

  const gradeOptions: SelectOptions[] = [
    {
      value: 'internGrade',
      label: 'Стажёр',
    },
    {
      value: 'juniorGrade',
      label: 'Junior',
    },
    {
      value: 'middleGrade',
      label: 'Middle',
    },
    {
      value: 'seniorGrade',
      label: 'Senior',
    },
    {
      value: 'teamLeadGrade',
      label: 'Team Lead',
    },
  ];

  return (
    <ST.Wrapper>
      <ST.ContentWrapper>
        <ST.Content>
          <ST.ContentTitleWrapper>
            <ST.ContentTitle>Вакансий</ST.ContentTitle>
            <ST.ContentCount>160</ST.ContentCount>
          </ST.ContentTitleWrapper>
          <ST.ContentFilters>
            <ST.FiltersWrapper>
              <Select
                defaultValue={firstFilterOptions[0]}
                options={firstFilterOptions}
              />
              <Select
                options={secondFilterOptions}
                defaultValue={secondFilterOptions[0]}
              />
              <Button
                onClickHandler={() => setIsFiltersWrapped(!isFiltersWrapped)}
                text="Доп. фильтры"
                styles={isFiltersWrapped ? 'unFilled' : 'default'}
                renderIcon="filter"
              />
            </ST.FiltersWrapper>
            <ST.FiltersPagination>
              <>На странице</>
              <ST.UpperPaginationWrapper>
                <ST.PaginationBlock isActive>8</ST.PaginationBlock>
                <ST.PaginationBlock>50</ST.PaginationBlock>
                <ST.PaginationBlock>150</ST.PaginationBlock>
                <ST.PaginationBlock>200</ST.PaginationBlock>
              </ST.UpperPaginationWrapper>
              {/*TODO: вынести всю эту кашу в ButtonsLine? (ButtonsGroupLine?) надо подумать над названием*/}
            </ST.FiltersPagination>
          </ST.ContentFilters>
          <ST.FiltersLine isWrapped={isFiltersWrapped}>
            <ST.UpperFiltersWrapper>
              <ST.SelectFilters>
                <Select
                  options={scheduleOptions}
                  placeholder="График работы"
                />
                {/*TODO: когда появится бэк засунуть селекты в form*/}
                <Select
                  options={employmentTypeOptions}
                  placeholder="Тип занятости"
                />
                <Select
                  options={experienceOptions}
                  placeholder="Опыт работы"
                />
                <Select
                  options={educationOptions}
                  placeholder="Образование"
                />
                <Select
                  options={educationOptions}
                  placeholder="Регион"
                />
                <Select
                  options={gradeOptions}
                  placeholder="Квалификация"
                />
              </ST.SelectFilters>
              <ST.SalaryFilters>
                <ST.FilterInput
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  onInput={onInputValue}
                  placeholder="Нижняя граница ЗП"
                />
                <ST.FilterInput
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  onInput={onInputValue}
                  placeholder="Верхняя граница ЗП" //TODO: когда запилю InputNumber компонент надо добавить абсолют иконку в правой части со знаком рубля
                />
              </ST.SalaryFilters>
            </ST.UpperFiltersWrapper>
            <ST.FilterButtonsWrapper>
              <Button
                onClickHandler={() => {}}
                text="Применить"
              />
              <Button
                onClickHandler={() => {}}
                text="Сбросить"
                styles="unFilled"
                renderIcon="refresh"
              />
            </ST.FilterButtonsWrapper>
          </ST.FiltersLine>
          <ST.ContentCards>{renderCards}</ST.ContentCards>
        </ST.Content>
      </ST.ContentWrapper>
    </ST.Wrapper>
  );
};

export { Main };
