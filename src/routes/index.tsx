import { Navigate, RouteObject } from 'react-router-dom';
import { lazy } from 'react';

import { LINKS } from '@src/links';

const MainPage = lazy(() => import('@src/pages/MainPage.tsx'));

const ROUTES: RouteObject[] = [
  {
    path: LINKS.home,
    element: <MainPage />,
  },
  {
    path: '*',
    element: <Navigate to="/" />,
  },
];

export { ROUTES };
