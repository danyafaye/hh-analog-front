import ButtonArrowRightSVG from '@assets/icons/ButtonArrow.svg?react';
import FilterIconSVG from '@assets/icons/filter.svg?react';
import RefreshIconSVG from '@assets/icons/refresh.svg?react';
import FavoriteActiveSvg from '@assets/icons/Union2.svg?react';
import FavoriteCircleSvg from '@assets/icons/favorite-circle.svg?react';
import DeleteSvg from '@assets/icons/delete.svg?react';
import EditSvg from '@assets/icons/edit.svg?react';
import TelegramSvg from '@assets/icons/telegram.svg?react';
import GithubSvg from '@assets/icons/github.svg?react';
import GoogleSvg from '@assets/icons/google.svg?react';
import AddressSvg from '@assets/icons/address.svg?react';

export const iconsDictionary = {
  default: ButtonArrowRightSVG,
  filter: FilterIconSVG,
  refresh: RefreshIconSVG,
  favoriteActive: FavoriteActiveSvg,
  favoriteCircle: FavoriteCircleSvg,
  edit: EditSvg,
  delete: DeleteSvg,
  address: AddressSvg,
  telegram: TelegramSvg,
  github: GithubSvg,
  google: GoogleSvg,
};

export type IconsType = keyof typeof iconsDictionary;
