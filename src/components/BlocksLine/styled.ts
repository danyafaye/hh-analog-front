import styled from 'styled-components';
import { COLORS } from '@src/constants/styles.ts';

export const BlocksLineWrapper = styled.div`
  display: flex;
  column-gap: 8px;
  align-items: center;
  background: ${COLORS.$PRIMARY_LIGHT_GRAY};
  color: ${COLORS.$PRIMARY_GRAY};
  padding: 7px;
  box-shadow: 4px 2px 0 0 ${COLORS.$SECONDARY_LIGHT_GRAY};
`;

export const Block = styled.div<{ isActive?: boolean }>`
  padding: 4px 8px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  ${({ isActive }) =>
    isActive &&
    `
    background-color: ${COLORS.$PRIMARY_DARK_GRAY};
    color: white;
    box-shadow: 2px 2px 0px 0px ${COLORS.$SECONDARY_DARK_GRAY};
      `}
`;
