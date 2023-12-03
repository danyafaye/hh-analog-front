import { FC, PropsWithChildren, useState } from 'react';

import { VacanciesContext } from './VacanciesContext.ts';
import { SelectOptions } from '@components/Select/Select.tsx';

const VacanciesProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isFiltersWrapped, setIsFiltersWrapped] = useState(true); //TODO: сюда закинуть ещё логику с формами
  const changeFilterWrap = () => {
    setIsFiltersWrapped(!isFiltersWrapped);
  };
  const sortFilterOptions: SelectOptions[] = [
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
  const timeFilterOptions: SelectOptions[] = [
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
  ];
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
    <VacanciesContext.Provider
      value={{
        sortFilterOptions,
        scheduleOptions,
        educationOptions,
        employmentTypeOptions,
        experienceOptions,
        gradeOptions,
        timeFilterOptions,
        isFiltersWrapped,
        changeFilterWrap,
      }}
    >
      {children}
    </VacanciesContext.Provider>
  );
};

export { VacanciesProvider };
