import styled from 'styled-components';
import { COLORS } from '@src/constants/styles.ts';

import LogoSvg from '@assets/icons/union.svg?react';
import FavoritesSvg from '@assets/icons/favorites.svg?react';
import BurgerSvg from '@assets/icons/burger.svg?react';
import CloseSvg from '@assets/icons/close.svg?react';
import UserSvg from '@assets/icons/user.svg?react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

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
  @media (max-width: 576px) {
    display: none;
  }
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

export const Burger = styled(BurgerSvg)`
  cursor: pointer;
  path {
    stroke: ${COLORS.$BLACK_100};
    transition: stroke 0.2s ease-in-out;
  }
  &:hover {
    path {
      stroke: ${COLORS.$PRIMARY_ORANGE};
    }
  }
  display: none;
  @media (max-width: 576px) {
    display: block;
  }
`;

export const Close = styled(CloseSvg)`
  cursor: pointer;
  path {
    stroke: ${COLORS.$BLACK_100};
    transition: stroke 0.2s ease-in-out;
  }
  &:hover {
    path {
      stroke: ${COLORS.$PRIMARY_ORANGE};
    }
  }
  position: relative;
  z-index: 2;
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

export const SideMenuBack = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100dvh;
  width: 100%;
  overflow: clip;
  z-index: 1;
`;

export const SideMenu = styled(motion.div)`
  position: fixed;
  right: 0;
  top: 70px;
  height: calc(100dvh - 70px);
  display: flex;
  flex-direction: column;
  padding: 12px 36px;
  gap: 12px;
  align-items: end;
  justify-content: space-between;
  z-index: 2;
  background-color: ${COLORS.$WHITE_100};
  border-left: 2px solid black;
`;

export const SideMenuFlex = styled(motion.div)`
  display: flex;
  align-items: baseline;
  gap: 16px;
`;

export const SideMenuGif = styled.img`
  width: 100%;
  max-width: 160px;
`;

export const SideMenuContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
