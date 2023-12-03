import { ButtonHTMLAttributes, FC } from 'react';

import * as ST from './styled.ts';
import { IconsType } from '@src/constants/iconsDictionary.ts';
import { Icon } from '@components/Icon/Icon.tsx';
import { COLORS } from '@src/constants/styles.ts';

export type ButtonStyles = 'default' | 'unFilled';
export type MainColors = COLORS.$PRIMARY_ORANGE | COLORS.$SECONDARY_RED;

export type ButtonProps = {
  text: string;
  renderIcon?: IconsType;
  onClickHandler: () => void;
  styles?: ButtonStyles;
  mainColor?: MainColors;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
  text,
  renderIcon,
  onClickHandler,
  styles = 'default',
  mainColor = COLORS.$PRIMARY_ORANGE,
  ...restProps
}) => {
  return (
    <ST.ButtonWrapper
      styles={styles}
      onClick={onClickHandler}
      mainColor={mainColor}
      {...restProps}
    >
      {renderIcon && (
        <Icon
          size="sm"
          type={renderIcon as IconsType}
        />
      )}
      {text}
    </ST.ButtonWrapper>
  );
};

export { Button };
