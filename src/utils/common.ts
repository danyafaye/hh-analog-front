import { FeedbackStatus } from '@components/Dashboard/mockData.ts';

const THOUSAND_SEPARATOR_REGEXP = /\B(?=(\d{3})+(?!\d))/g;
const numberSpacing = (number: number | string = ''): string => {
  return number.toString().replace(THOUSAND_SEPARATOR_REGEXP, ' ');
};

const getPriceString = (pricesArray: string[]) => {
  if (pricesArray[0] && pricesArray[1]) {
    return `От ${numberSpacing(pricesArray[0])} ₽  до ${numberSpacing(pricesArray[1])} ₽`; //TODO: спросить у пацанов про более лаконичное решение, на ночь нихуя в голову толкового не лезет
  }
  if (pricesArray[0]) {
    return `От ${numberSpacing(pricesArray[0])} ₽`;
  }
  if (pricesArray[1]) {
    return `До ${numberSpacing(pricesArray[1])} ₽`;
  }
};

const getStatusString = (status: FeedbackStatus) => {
  switch (status) {
    case 'invited':
      return 'Приглашение';
    case 'rejected':
      return 'Отказ';
    case 'viewed':
      return 'Просмотрено';
    case 'notViewed':
      return 'Не просмотрено';
  }
};

export { numberSpacing, getPriceString, getStatusString };
