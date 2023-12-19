import styled, { css, keyframes } from 'styled-components';
import { COLORS } from '@src/constants/styles.ts';

const scale = keyframes`
  0%{
    transform: scaleY(1);
  }

  100%{
    transform: scaleY(0);
  }
`;

export const LoaderWrapper = styled.div`
  display: grid;
  height: 100dvh;
  width: 100%;
  place-items: center;
`;

export const LoaderContent = styled.div`
  width: 4rem;
  height: 4rem;
  display: flex;
  gap: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: nowrap;
`;

const animation = ({index}) =>
  css<({index})>`
    ${scale} 1s ${.24 - .12 * +index}s ease-in-out alternate infinite;
  `

export const LoaderElement = styled.div<{index}>`
  background-color: ${COLORS.$PRIMARY_ORANGE};
  flex: 1;
  animation: ${animation};
`;
