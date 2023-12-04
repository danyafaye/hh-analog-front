import {URLSearchParamsInit, useSearchParams} from "react-router-dom";
import {useVacanciesContext} from "@src/providers/VacanciesProvider";
import {useMemo} from "react";

const convertToUrlParams = (values): URLSearchParamsInit =>
  Object.fromEntries(
    (Object.entries(values))
      .filter(value => !!value[1])
      .map(value => [value[0], value[1] = value[1].value || value[1]])
  ) as URLSearchParams;

const useFilterParams = () => {
  const [search, setSearch] = useSearchParams();
  const {
    sortFilterOptions,
    timeFilterOptions,
    employmentTypeOptions,
    educationOptions,
    experienceOptions,
    scheduleOptions,
    regionOptions,
    gradeOptions,
  } = useVacanciesContext();

  const values = useMemo(() => {
    const {
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
      page,
      size
    } = Object.fromEntries(search.entries());
    return {
      sortFilterOption: sortFilterOptions.find((option) => option.value === sortFilterOption) || null,
      timeFilterOption: timeFilterOptions.find((option) => option.value === timeFilterOption) || null,
      scheduleOption: scheduleOptions.find((option) => option.value === scheduleOption) || null,
      employmentTypeOption: employmentTypeOptions.find((option) => option.value === employmentTypeOption) || null,
      experienceOption: experienceOptions.find((option) => option.value === experienceOption) || null,
      educationOption: educationOptions.find((option) => option.value === educationOption) || null,
      regionOption: regionOptions.find((option) => option.value === regionOption) || null,
      gradeOption: gradeOptions.find((option) => option.value === gradeOption) || null,
      priceLow,
      priceHigh,
      page: page || '1',
      size: size || '8'
    };
  }, [search]);

  const setFilterParams = (newValues): void => {
    if (!newValues) {
      setSearch({size:values.size} as URLSearchParamsInit);
      return;
    }
    const convertedValues = convertToUrlParams(newValues);
    setSearch((urlParams: URLSearchParams) => {
      return {...Object.fromEntries(urlParams.entries()),...convertedValues} as URLSearchParams
    });
  };

  return [values, setFilterParams]
};

export {useFilterParams};
