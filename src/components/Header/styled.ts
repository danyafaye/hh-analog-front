import styled from 'styled-components';
import { COLORS } from '@src/constants/styles.ts';

import LogoSvg from '@assets/icons/union.svg?react';
import FavoritesSvg from '@assets/icons/favorites.svg?react';
import NotificationSvg from '@assets/icons/notification.svg?react';
import UserSvg from '@assets/icons/user.svg?react';

export const Wrapper = styled.header`
  display: flex;
  background-color: ${COLORS.$PURPLE_70};
  height: 70px;
  padding: 20px 40px;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled(LogoSvg)`
  path {
    fill: ${COLORS.$WHITE_100};
  }
`;

export const NavMenu = styled.div`
  display: flex;
  column-gap: 18px;
`;
export const NavButton = styled.button<{ active?: boolean }>`
  background: none;
  color: ${COLORS.$WHITE_100};
  font-size: 15px;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${COLORS.$YELLOW_80};
  }
  ${({ active }) =>
    active &&
    `
    color: ${COLORS.$YELLOW_80};
  `}
`;

export const Favorites = styled(FavoritesSvg)`
  cursor: pointer;
  path {
    fill: ${COLORS.$WHITE_100};
    transition: fill 0.2s ease-in-out;
  }
  &:hover {
    path {
      fill: ${COLORS.$YELLOW_80};
    }
  }
`;

export const Notifications = styled(NotificationSvg)`
  cursor: pointer;
  path {
    fill: ${COLORS.$WHITE_100};
    transition: fill 0.2s ease-in-out;
  }
  &:hover {
    path {
      fill: ${COLORS.$YELLOW_80};
    }
  }
`;

export const Profile = styled(UserSvg)`
  cursor: pointer;
  path {
    fill: ${COLORS.$WHITE_100};
    transition: fill 0.2s ease-in-out;
  }
  &:hover {
    path {
      fill: ${COLORS.$YELLOW_80};
    }
  }
`;
