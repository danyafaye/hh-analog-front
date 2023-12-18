import styled from 'styled-components';
import { COLORS } from '@src/constants/styles.ts';

import LogoSvg from '@assets/icons/union.svg?react';
import FavoritesSvg from '@assets/icons/favorites.svg?react';
import NotificationSvg from '@assets/icons/notification.svg?react';
import UserSvg from '@assets/icons/user.svg?react';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.header`
  display: flex;
  height: 70px;
  padding: 20px 40px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid black;
`;

export const Logo = styled(LogoSvg)<{ active: boolean }>`
  cursor: pointer;
  transition: transform 0.1s ease-in-out;
  path {
    fill: ${COLORS.$BLACK_100};
  }
  &:hover {
    transform: scale(1.035);
  }
  &:active {
    transform: scale(0.95);
  }
  ${({ active }) =>
    active &&
    `
      path {
    fill: ${COLORS.$PRIMARY_ORANGE};
  }
  `}
`;

export const NavMenu = styled.div`
  display: flex;
  column-gap: 18px;
`;
export const Link = styled(NavLink)<{ active?: boolean }>`
  background: none;
  font-size: 18px;
  font-weight: 400;
  transition: color 0.2s ease-in-out;
  padding: 4px 0;
  border-bottom: 2px solid transparent;
  color: ${COLORS.$PRIMARY_DARK_GRAY};
  &:hover {
    color: ${COLORS.$PRIMARY_ORANGE};
  }
  ${({ active }) =>
    active &&
    `
      font-weight: 500;
      color: ${COLORS.$PRIMARY_ORANGE};
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

export const Profile = styled(UserSvg)<{ isActive: boolean }>`
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
  ${({ isActive }) =>
    isActive &&
    `
    path {
      fill: ${COLORS.$PRIMARY_ORANGE};
    }
    `}
`;
