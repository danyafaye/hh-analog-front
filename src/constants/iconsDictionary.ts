import ButtonArrowRightSVG from '@assets/icons/ButtonArrow.svg?react';
import FilterIconSVG from '@assets/icons/filter.svg?react';
import RefreshIconSVG from '@assets/icons/refresh.svg?react';
import FavoriteActiveSvg from '@assets/icons/Union2.svg?react';
import FavoriteCircleSvg from '@assets/icons/favorite-circle.svg?react';

export const iconsDictionary = {
  default: ButtonArrowRightSVG,
  filter: FilterIconSVG,
  refresh: RefreshIconSVG,
  favoriteActive: FavoriteActiveSvg,
  favoriteCircle: FavoriteCircleSvg,
};

export type IconsType = keyof typeof iconsDictionary;
