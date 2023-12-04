import { FC } from 'react';

import { Main } from 'src/components/Main';
import {mainPageType, resumeContent} from "@src/constants/common";

const ResumePage: FC = () => {
  return <Main page={mainPageType.resume} content={resumeContent}/>;
};

export default ResumePage;
