import { Navigate, RouteObject } from 'react-router-dom';
import { lazy } from 'react';

import { LINKS } from '@src/links';

const MainPage = lazy(() => import('@src/pages/VacanciesPage.tsx'));
const ResumePage = lazy(() => import('@src/pages/ResumePage.tsx'));
const DashboardPage = lazy(() => import('@src/pages/DashboardPage.tsx'));
const AuthPage = lazy(() => import('@src/pages/AuthPage.tsx'));
const WelcomePage = lazy(() => import('@src/pages/WelcomePage.tsx'));

const ROUTES: RouteObject[] = [
  {
    path: LINKS.vacancies,
    element: <MainPage />, //TODO: изменить mainpAGE на vacanciespage и поменять саму ссылку, подумать над тем какая страница будет главной при открытии приложения
  },
  {
    path: LINKS.resume,
    element: <ResumePage />,
  },
  {
    path: LINKS.dashboard,
    element: <DashboardPage />,
  },
  {
    path: LINKS.auth,
    element: <AuthPage />,
  },
  {
    path: LINKS.welcome,
    element: <WelcomePage />,
  },
  {
    path: '*',
    element: <Navigate to="/welcome" />,
  },
];

export { ROUTES };
