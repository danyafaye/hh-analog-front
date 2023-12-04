import { FC, useMemo, useState } from 'react';

import * as ST from './styled.ts';
import { mockData } from '@components/Main/mockData.ts';
import { Button } from '@components/Button';
import { Select } from '@components/Select/index.ts';
import { InputNumber } from '@components/InputNumber';
import { BlocksLine } from 'src/components/BlocksLine';
import { useVacanciesContext } from '@src/providers/VacanciesProvider';
import { MainCard } from '@components/MainCard';
import { useFormik } from 'formik';
import { SelectOptions } from '@components/Select/Select.tsx';

const Dashboard: FC = () => {
  //TODO: хуевый адаптив я совсем забыл про него, нужно проработать
  //TODO: подумать над тем чтобы вынести все что связано со шрифтами в константы

  const vacanciesForm = useFormik({
    initialValues: {
      sortFilterOption: null as SelectOptions | null,
      timeFilterOption: null as SelectOptions | null,
      scheduleOption: null as SelectOptions | null,
      employmentTypeOption: null as SelectOptions | null,
      experienceOption: null as SelectOptions | null,
      educationOption: null as SelectOptions | null,
      regionOption: null as SelectOptions | null,
      gradeOption: null as SelectOptions | null,
      priceLow: 0,
      priceHigh: 0,
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const {
    sortFilterOptions,
    timeFilterOptions,
    employmentTypeOptions,
    educationOptions,
    experienceOptions,
    scheduleOptions,
    regionOptions,
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

  console.log(vacanciesForm.values);

  return (
    <ST.Wrapper>
      <ST.ContentWrapper>
        <ST.Content onSubmit={vacanciesForm.handleSubmit}>
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
                  value={vacanciesForm.values.scheduleOption}
                  onChange={(option) => vacanciesForm.setFieldValue('scheduleOption', option)}
                />
                <Select
                  options={employmentTypeOptions}
                  placeholder="Тип занятости"
                  value={vacanciesForm.values.employmentTypeOption}
                  onChange={(option) => vacanciesForm.setFieldValue('employmentTypeOption', option)}
                />
                <Select
                  options={experienceOptions}
                  placeholder="Опыт работы"
                  value={vacanciesForm.values.experienceOption}
                  onChange={(option) => vacanciesForm.setFieldValue('experienceOption', option)}
                />
                <Select
                  options={educationOptions}
                  placeholder="Образование"
                  value={vacanciesForm.values.educationOption}
                  onChange={(option) => vacanciesForm.setFieldValue('educationOption', option)}
                />
                <Select
                  options={regionOptions}
                  placeholder="Регион"
                  value={vacanciesForm.values.regionOption}
                  onChange={(option) => vacanciesForm.setFieldValue('regionOption', option)}
                />
                {/*//TODO: запилить стороннюю апишку для подсоса регионов (или влад сделает набор городов которые мы засунем сюда)*/}
                <Select
                  options={gradeOptions}
                  placeholder="Квалификация"
                  value={vacanciesForm.values.gradeOption}
                  onChange={(option) => vacanciesForm.setFieldValue('gradeOption', option)}
                />
              </ST.SelectFilters>
              <ST.SalaryFilters>
                <InputNumber
                  name="priceLow"
                  onChange={vacanciesForm.handleChange}
                  value={vacanciesForm.values.priceLow}
                  placeholder="Нижняя граница ЗП"
                />
                <InputNumber
                  name="priceHigh"
                  onChange={vacanciesForm.handleChange}
                  value={vacanciesForm.values.priceHigh}
                  placeholder="Верхняя граница ЗП"
                />
              </ST.SalaryFilters>
            </ST.UpperFiltersWrapper>
            <ST.FilterButtonsWrapper>
              <Button
                onClickHandler={() => {}}
                text="Применить"
                type="submit"
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

export { Dashboard };
