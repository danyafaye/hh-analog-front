import { FC } from 'react';

import * as ST from './styled.ts';
import { ROUTES } from '@src/routes';
import { useRoutes } from 'react-router-dom';
import { Header } from '@components/Header';

const App: FC = () => {
  const routes = useRoutes(ROUTES);

  return (
    <>
      <Header />
      <ST.AppWrapper>{routes}</ST.AppWrapper>
      <ST.GlobalStyles />
    </>
  );
};

export { App };
