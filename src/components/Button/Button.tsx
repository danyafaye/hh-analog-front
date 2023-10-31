import { FC } from 'react';

import * as ST from './styled.ts';
import { IconsType } from '@src/constants/iconsDictionary.ts';
import { Icon } from '@components/Icon/Icon.tsx';

export type ButtonProps = {
  text?: string;
  renderIcon?: IconsType;
  needIcon?: boolean;
};

const Button: FC<ButtonProps> = ({ text, needIcon, renderIcon = 'default' }) => {
  return (
    <ST.Wrapper>
      <ST.ButtonWrapper>{text}</ST.ButtonWrapper>
      {needIcon && (
        <ST.IconWrapper>
          <Icon type={renderIcon as IconsType} />
        </ST.IconWrapper>
      )}
    </ST.Wrapper>
  );
};

export { Button };
