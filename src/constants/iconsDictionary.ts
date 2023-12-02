import ButtonArrowRightSVG from '@assets/icons/ButtonArrow.svg?react';
import FilterIconSVG from '@assets/icons/filter.svg?react';
import RefreshIconSVG from '@assets/icons/refresh.svg?react';

export const iconsDictionary = {
  default: ButtonArrowRightSVG,
  filter: FilterIconSVG,
  refresh: RefreshIconSVG,
};

export type IconsType = keyof typeof iconsDictionary;
