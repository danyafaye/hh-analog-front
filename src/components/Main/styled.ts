import styled from 'styled-components';
import { COLORS } from '@src/constants/styles.ts';
export const Wrapper = styled.div`
  height: 100%;
`;

export const ContentForm = styled.form`
  display: flex;
  row-gap: 20px;
  flex-direction: column;
  width: 100%;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
`;

export const ContentTitleWrapper = styled.div`
  display: flex;
  column-gap: 12px;
  align-items: center;
`;

export const ContentTitle = styled.div`
  font-size: 28px;
  font-weight: 600;
`;

export const ContentCount = styled.div`
  color: ${COLORS.$SECONDARY_GRAY};
  font-size: 24px;
  font-weight: 600;
`;

export const ContentCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px,382px));
  gap: 16px;
`;

export const ContentFilters = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const FiltersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const FiltersPagination = styled.div`
  display: flex;
  column-gap: 12px;
  align-items: center;
`;

export const FiltersLine = styled.div<{ isWrapped: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: space-between;
  box-shadow: 4px 4px 0 0 ${COLORS.$SECONDARY_LIGHT_GRAY};
  border: 2px solid ${COLORS.$PRIMARY_DARK_GRAY};
  padding: 16px;
  ${({ isWrapped }) =>
    isWrapped &&
    `
      display: none;
    `}
`;

export const UpperFiltersWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  align-items: start;
`;

export const SelectFilters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const SalaryFilters = styled.div`
  display: flex;
  column-gap: 16px;
`;

export const FilterButtonsWrapper = styled.div`
  display: flex;
  column-gap: 12px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  padding: 20px 40px;
  flex-grow: 1;
  @media(max-width: 480px){
    padding-inline: 16px;
  }
`;
