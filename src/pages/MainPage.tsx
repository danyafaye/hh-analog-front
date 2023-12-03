import { FC } from 'react';

import { Main } from 'src/components/Main';
import { VacanciesProvider } from '@src/providers/VacanciesProvider';

const MainPage: FC = () => {
  return (
    <VacanciesProvider>
      <Main />
    </VacanciesProvider>
  );
};

export default MainPage;
