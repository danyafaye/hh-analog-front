import styled from 'styled-components';
import { COLORS } from '@src/constants/styles.ts';
import { FeedbackStatus } from '@components/Dashboard/mockData.ts';

export const Wrapper = styled.div`
  height: 360px;
  width: 780px;
  box-shadow: 5px 5px 0 0 ${COLORS.$SECONDARY_LIGHT_GRAY};
  border: 2px solid ${COLORS.$PRIMARY_DARK_GRAY};
  overflow-y: auto;
`;

export const Content = styled.div<{ empty?: boolean }>`
  display: grid;
  grid-template-rows: 60px fit-content(60px);
  height: 100%;
`;

export const EmptyData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 24px;
  font-weight: 500;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 1fr 1fr 1fr;
  padding: 12px 20px;
  background: ${COLORS.$PRIMARY_LIGHT_GRAY};
  height: fit-content;
  &:nth-child(2n) {
    background: transparent;
  }
`;

export const Column = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  padding-right: 20px;

  &:not(&:first-child) {
    padding: 0 12px;
  }
`;

export const Header = styled(Row)``;

export const VacancyColumn = styled(Column)``;

export const VacancyName = styled.div`
  font-size: 14px;
  font-weight: 400;
`;

export const VacancyCompany = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${COLORS.$SECONDARY_DARK_GRAY};
`;

export const StatusColumn = styled(Column)<{ status: FeedbackStatus }>`
  ${({ status }) => {
    switch (status) {
      case 'invited':
        return `
          color: ${COLORS.$SECONDARY_GREEN};
        `;
      case 'rejected':
        return `
          color: ${COLORS.$SECONDARY_RED};
        `;
      case 'viewed':
        return `
          color: ${COLORS.$PRIMARY_DARK_GRAY};
        `;
      case 'notViewed':
        return `
          color: ${COLORS.$SECONDARY_DARK_GRAY};
        `;
    }
  }}
`;

export const PriceColumn = styled(Column)`
  font-size: 14px;
  font-weight: 400;
`;

export const DateColumn = styled(Column)`
  font-size: 14px;
  font-weight: 400;
  color: ${COLORS.$PRIMARY_GRAY};
`;
