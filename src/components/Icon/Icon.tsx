import { FC } from 'react';

import * as ST from './styled.ts';
import { iconsDictionary, IconsType } from '@src/constants/iconsDictionary.ts';

export type IconsSize = 'sm';

type IconsProps = {
  type: IconsType;
  size: IconsSize;
};

const Icon: FC<IconsProps> = ({ type, size = 'sm' }) => {
  const Icon = iconsDictionary[type];

  return (
    <ST.IconsWrapper size={size}>
      <Icon />
    </ST.IconsWrapper>
  );
};

export { Icon };
