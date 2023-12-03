import { FC, useMemo, useState } from 'react';

import * as ST from './styled.ts';
import { mockData } from '@components/Main/mockData.ts';
import { Button } from '@components/Button';
import { Select } from '@components/Select/index.ts';
import { InputNumber } from '@components/InputNumber';
import { BlocksLine } from 'src/components/BlocksLine';
import { useVacanciesContext } from '@src/providers/VacanciesProvider';
import { MainCard } from '@components/MainCard';

const Main: FC = () => {
  //TODO: хуевый адаптив я совсем забыл про него, нужно проработать
  //TODO: подумать над тем чтобы вынести все что связано со шрифтами в константы

  const {
    sortFilterOptions,
    timeFilterOptions,
    employmentTypeOptions,
    educationOptions,
    experienceOptions,
    scheduleOptions,
    gradeOptions,
    isFiltersWrapped,
    changeFilterWrap,
  } = useVacanciesContext();

  const onPageElements = ['8', '50', '150', '200'];

  const [onPageElement, setOnPageElement] = useState(onPageElements[0]);

  const renderCards = useMemo(
    () =>
      mockData.map((it) => {
        return <MainCard cardData={it} />;
      }),
    [mockData],
  );

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
                defaultValue={sortFilterOptions[0]}
                options={sortFilterOptions}
              />
              <Select
                options={timeFilterOptions}
                defaultValue={timeFilterOptions[0]}
              />
              <Button
                onClickHandler={changeFilterWrap}
                text="Доп. фильтры"
                styles={isFiltersWrapped ? 'unFilled' : 'default'}
                renderIcon="filter"
              />
            </ST.FiltersWrapper>
            <ST.FiltersPagination>
              <>На странице</>
              <BlocksLine
                onClickHandler={setOnPageElement}
                value={onPageElement}
                valuesArray={onPageElements}
              />
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
                {/*//TODO: запилить стороннюю апишку для подсоса регионов*/}
                <Select
                  options={gradeOptions}
                  placeholder="Квалификация"
                />
              </ST.SelectFilters>
              <ST.SalaryFilters>
                <InputNumber placeholder="Нижняя граница ЗП" />
                <InputNumber placeholder="Верхняя граница ЗП" />
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
