import { Navigate, RouteObject } from 'react-router-dom';
import { lazy } from 'react';

import { LINKS } from '@src/links';

const MainPage = lazy(() => import('@src/pages/MainPage.tsx'));

const ROUTES: RouteObject[] = [
  {
    path: LINKS.home,
    element: <MainPage />, //TODO: изменить mainpAGE на vacanciespage и поменять саму ссылку, подумать над тем какая страница будет главной при открытии приложения
  },

  {
    path: '*',
    element: <Navigate to="/" />,
  },
];

export { ROUTES };
