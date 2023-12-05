import { FC, useMemo } from 'react';

import * as ST from './styled.ts';
import { mockData, resumeMockData } from '@components/Main/mockData.ts';
import { Button } from '@components/Button';
import { Select } from '@components/Select/index.ts';
import { InputNumber } from '@components/InputNumber';
import { BlocksLine } from 'src/components/BlocksLine';
import { useVacanciesContext } from '@src/providers/VacanciesProvider';
import { MainCard } from '@components/MainCard';
import { useFormik } from 'formik';
import { SelectOptions } from '@components/Select/Select.tsx';
import { IMainContent, mainPageType } from '@src/constants/common';
import { useFilterParams } from '@hooks/useFilterParams';
import { Pagination } from '@components/Pagination';

interface IMainProps {
  page: mainPageType;
  content: IMainContent;
}

const Main: FC = ({ page, content }: IMainProps) => {
  //TODO: хуевый адаптив я совсем забыл про него, нужно проработать
  //TODO: подумать над тем чтобы вынести все что связано со шрифтами в константы
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
  const [
    {
      sortFilterOption,
      timeFilterOption,
      scheduleOption,
      employmentTypeOption,
      experienceOption,
      educationOption,
      regionOption,
      gradeOption,
      priceLow,
      priceHigh,
      size,
    },
    setFilterParams,
  ] = useFilterParams();
  const form = useFormik({
    initialValues: {
      sortFilterOption: sortFilterOption as SelectOptions | null,
      timeFilterOption: timeFilterOption as SelectOptions | null,
      scheduleOption: scheduleOption as SelectOptions | null,
      employmentTypeOption: employmentTypeOption as SelectOptions | null,
      experienceOption: experienceOption as SelectOptions | null,
      educationOption: educationOption as SelectOptions | null,
      regionOption: regionOption as SelectOptions | null,
      gradeOption: gradeOption as SelectOptions | null,
      priceLow: priceLow | 0,
      priceHigh: priceHigh | 0,
    },
    onSubmit: (values) => {
      setFilterParams(values);
    },
  });
  const onPageElements = ['8', '50', '150', '200'];

  const renderCards = useMemo(() => {
    const data = page === mainPageType.vacancies ? mockData : resumeMockData;
    return data.map((it) => {
      return (
        <MainCard
          key={it.id}
          cardData={it}
        />
      );
    });
  }, [page]);

  return (
    <ST.Wrapper>
      <ST.ContentWrapper>
        <ST.Content>
          <ST.ContentForm onSubmit={form.handleSubmit}>
            <ST.ContentTitleWrapper>
              <ST.ContentTitle>{content.contentTitle}</ST.ContentTitle>
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
                  type={'button'}
                />
              </ST.FiltersWrapper>
              <ST.FiltersPagination>
                <>На странице</>
                <BlocksLine
                  onClickHandler={(value) => {
                    setFilterParams({ size: value });
                  }}
                  value={size}
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
                    value={form.values.scheduleOption}
                    onChange={(option) => form.setFieldValue('scheduleOption', option)}
                  />
                  <Select
                    options={employmentTypeOptions}
                    placeholder="Тип занятости"
                    value={form.values.employmentTypeOption}
                    onChange={(option) => form.setFieldValue('employmentTypeOption', option)}
                  />
                  <Select
                    options={experienceOptions}
                    placeholder="Опыт работы"
                    value={form.values.experienceOption}
                    onChange={(option) => form.setFieldValue('experienceOption', option)}
                  />
                  <Select
                    options={educationOptions}
                    placeholder="Образование"
                    value={form.values.educationOption}
                    onChange={(option) => form.setFieldValue('educationOption', option)}
                  />
                  <Select
                    options={regionOptions}
                    placeholder="Регион"
                    value={form.values.regionOption}
                    onChange={(option) => form.setFieldValue('regionOption', option)}
                  />
                  {/*//TODO: запилить стороннюю апишку для подсоса регионов (или влад сделает набор городов которые мы засунем сюда)*/}
                  <Select
                    options={gradeOptions}
                    placeholder="Квалификация"
                    value={form.values.gradeOption}
                    onChange={(option) => form.setFieldValue('gradeOption', option)}
                  />
                </ST.SelectFilters>
                <ST.SalaryFilters>
                  <InputNumber
                    name="priceLow"
                    onChange={form.handleChange}
                    value={form.values.priceLow}
                    placeholder="Нижняя граница ЗП"
                  />
                  <InputNumber
                    name="priceHigh"
                    onChange={form.handleChange}
                    value={form.values.priceHigh}
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
                  onClickHandler={() => {
                    setFilterParams(null);
                    form.resetForm();
                  }}
                  type={'reset'}
                  text="Сбросить"
                  styles="unFilled"
                  renderIcon="refresh"
                />
              </ST.FilterButtonsWrapper>
            </ST.FiltersLine>
          </ST.ContentForm>
          <ST.ContentCards>{renderCards}</ST.ContentCards>
        </ST.Content>
        <Pagination totalCount={renderCards.length} />
      </ST.ContentWrapper>
    </ST.Wrapper>
  );
};

export { Main };
