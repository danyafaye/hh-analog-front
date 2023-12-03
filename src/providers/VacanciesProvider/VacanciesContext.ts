import { createContext, useContext } from 'react';
import { SelectOptions } from '@components/Select/Select.tsx';

type VacanciesContextState = {
  sortFilterOptions: SelectOptions[];
  timeFilterOptions: SelectOptions[];
  scheduleOptions: SelectOptions[];
  employmentTypeOptions: SelectOptions[];
  experienceOptions: SelectOptions[];
  educationOptions: SelectOptions[];
  regionOptions: SelectOptions[];
  gradeOptions: SelectOptions[];
  isFiltersWrapped: boolean;
  changeFilterWrap: () => void;
};

const VacanciesContext = createContext({} as VacanciesContextState);

const useVacanciesContext = () => useContext(VacanciesContext);

export { VacanciesContext, useVacanciesContext };
