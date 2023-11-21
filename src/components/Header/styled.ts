import styled from 'styled-components';
import { COLORS } from '@src/constants/styles.ts';

import LogoSvg from '@assets/icons/union.svg?react';
import FavoritesSvg from '@assets/icons/favorites.svg?react';
import NotificationSvg from '@assets/icons/notification.svg?react';
import UserSvg from '@assets/icons/user.svg?react';

export const Wrapper = styled.header`
  display: flex;
  height: 70px;
  padding: 20px 40px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid black;
`;

export const Logo = styled(LogoSvg)`
  path {
    fill: ${COLORS.$BLACK_100};
  }
`;

export const NavMenu = styled.div`
  display: flex;
  column-gap: 18px;
`;
export const NavButton = styled.button<{ active?: boolean }>`
  background: none;
  font-size: 18px;
  font-weight: 400;
  transition: color 0.2s ease-in-out;
  padding: 4px 0;
  border-bottom: 2px solid transparent;
  &:hover {
    color: ${COLORS.$PRIMARY_ORANGE};
  }
  ${({ active }) =>
    active &&
    `
      font-weight: 500;
      border-bottom: 2px solid ${COLORS.$PRIMARY_ORANGE};
  `}
`;

export const Favorites = styled(FavoritesSvg)`
  cursor: pointer;
  path {
    fill: ${COLORS.$BLACK_100};
    transition: fill 0.2s ease-in-out;
  }
  &:hover {
    path {
      fill: ${COLORS.$PRIMARY_ORANGE};
    }
  }
`;

export const Notifications = styled(NotificationSvg)`
  cursor: pointer;
  path {
    fill: ${COLORS.$BLACK_100};
    transition: fill 0.2s ease-in-out;
  }
  &:hover {
    path {
      fill: ${COLORS.$PRIMARY_ORANGE};
    }
  }
`;

export const Profile = styled(UserSvg)`
  cursor: pointer;
  path {
    fill: ${COLORS.$BLACK_100};
    transition: fill 0.2s ease-in-out;
  }
  &:hover {
    path {
      fill: ${COLORS.$PRIMARY_ORANGE};
    }
  }
`;
