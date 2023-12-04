import { Navigate, RouteObject } from 'react-router-dom';
import { lazy } from 'react';

import { LINKS } from '@src/links';

const MainPage = lazy(() => import('@src/pages/MainPage.tsx'));
const ResumePage = lazy(() => import('@src/pages/ResumePage.tsx'));
const DashboardPage = lazy(() => import('@src/pages/DashboardPage.tsx'));

const ROUTES: RouteObject[] = [
  {
    path: LINKS.home,
    element: <MainPage />, //TODO: изменить mainpAGE на vacanciespage и поменять саму ссылку, подумать над тем какая страница будет главной при открытии приложения
  },
  {
    path: LINKS.resume,
    element: <ResumePage/>
  },
  {
    path: LINKS.dashboard,
    element: <DashboardPage />,
  },
  {
    path: '*',
    element: <Navigate to="/" />,
  },
];

export { ROUTES };
