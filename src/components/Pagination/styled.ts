import styled from 'styled-components';
import { COLORS } from '@src/constants/styles.ts';

export const ContentWrapper = styled.div`
  margin-top: 20px;
  padding-block: 20px;
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
`

export const PagesContainer = styled.div`
  display: flex;
  place-items: center;
  gap: 8px;
`

export const PageButton = styled.button<{ isActive: boolean }>`
  border-radius: 8px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 32px;
  background-color: transparent;
  color: ${COLORS.$SECONDARY_GRAY};
  ${({ isActive }) =>
    isActive &&
    `
      background-color: ${COLORS.$BLACK_100};
      color: ${COLORS.$WHITE_100};
    `}
`

export const Delimiter = styled.span`
  color: ${COLORS.$SECONDARY_GRAY};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 32px;
`
