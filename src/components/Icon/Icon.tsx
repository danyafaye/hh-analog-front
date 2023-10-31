import { FC } from 'react';

import * as ST from './styled.ts';
import { iconsDictionary, IconsType } from '@src/constants/iconsDictionary.ts';

type IconsProps = {
  type: IconsType;
};

const Icon: FC<IconsProps> = ({ type }) => {
  //TODO:нужно добавить сайзы фиксированные (ширина высота)
  const Icon = iconsDictionary[type];

  return (
    <ST.IconsWrapper>
      <Icon />
    </ST.IconsWrapper>
  );
};

export { Icon };
