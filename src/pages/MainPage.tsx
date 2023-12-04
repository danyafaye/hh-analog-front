import { FC } from 'react';

import { Main } from 'src/components/Main';
import {mainPageType, vacanciesContent} from "@src/constants/common";

const MainPage: FC = () => {
  return <Main page={mainPageType.vacancies} content={vacanciesContent}/>;
};

export default MainPage;
