import { ButtonHTMLAttributes, FC } from 'react';

import * as ST from './styled.ts';
import { IconsType } from '@src/constants/iconsDictionary.ts';
import { Icon } from '@components/Icon/Icon.tsx';
import { COLORS } from '@src/constants/styles.ts';

export type ButtonStyles = 'default' | 'unFilled' | 'text';
export type MainColors = COLORS.$PRIMARY_ORANGE | COLORS.$SECONDARY_RED;
export type ButtonFontSizes = 'sm' | 'md';

export type ButtonProps = {
  text: string;
  renderIcon?: IconsType;
  onClickHandler?: () => void;
  styles?: ButtonStyles;
  mainColor?: MainColors;
  fontSize?: ButtonFontSizes;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({
  text,
  renderIcon,
  onClickHandler,
  styles = 'default',
  mainColor = COLORS.$PRIMARY_ORANGE,
  fontSize = 'sm',
  ...restProps
}) => {
  return (
    <ST.ButtonWrapper
      styles={styles}
      fontSize={fontSize}
      onClick={onClickHandler}
      mainColor={mainColor}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
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
