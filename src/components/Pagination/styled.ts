import styled from 'styled-components';
import { COLORS } from '@src/constants/styles.ts';

export const ContentWrapper = styled.div`
  padding-block: 16px;
  position: sticky;
  bottom: 0;
  background-color: ${COLORS.$WHITE_100};
  border-top: 2px solid ${COLORS.$PRIMARY_DARK_GRAY};
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-inline: auto;
  width: fit-content;
  background: ${COLORS.$PRIMARY_LIGHT_GRAY};
  color: ${COLORS.$PRIMARY_GRAY};
  padding: 7px;
  box-shadow: 4px 2px 0 0 ${COLORS.$SECONDARY_LIGHT_GRAY};
`;

export const PagesContainer = styled.div`
  display: flex;
  place-items: center;
  gap: 8px;
`;

export const PageButton = styled.button<{ isActive?: boolean }>`
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 4px 8px;
  background-color: transparent;
  color: ${COLORS.$PRIMARY_GRAY};
  ${({ isActive }) =>
    isActive &&
    `
    background-color: ${COLORS.$PRIMARY_DARK_GRAY};
    color: white;
    box-shadow: 2px 2px 0px 0px ${COLORS.$SECONDARY_DARK_GRAY};
    `}
`;

export const Delimiter = styled.span`
  color: ${COLORS.$SECONDARY_GRAY};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 32px;
`;
