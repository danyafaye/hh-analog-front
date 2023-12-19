import { FC,Suspense } from 'react';

import * as ST from './styled.ts';
import { ROUTES } from '@src/routes';
import { useRoutes } from 'react-router-dom';
import { Header } from '@components/Header';
import { Loader } from '@components/Loader';

const App: FC = () => {
  const routes = useRoutes(ROUTES);

  return (
    <>
      <Header />
      <ST.AppWrapper><Suspense fallback={<Loader count={3}/>}>{routes}</Suspense></ST.AppWrapper>
      <ST.GlobalStyles />
    </>
  );
};

export { App };
