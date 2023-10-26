import { FC } from 'react';

import * as ST from './styled.ts';
import { ROUTES } from '@src/routes';
import { useRoutes } from 'react-router-dom';

const App: FC = () => {
  const routes = useRoutes(ROUTES);

  return (
    <>
      <ST.AppWrapper>{routes}</ST.AppWrapper>
      <ST.GlobalStyles />
    </>
  );
};

export { App };
