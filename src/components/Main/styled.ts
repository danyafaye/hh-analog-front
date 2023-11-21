import styled from 'styled-components';
import { COLORS } from '@src/constants/styles.ts';

import DollarSvg from '@assets/icons/dollar-icon.svg?react';
import RubleSvg from '@assets/icons/ruble-icon.svg?react';
import ArrowDownSvg from '@assets/icons/arrow-down.svg?react';
import FavoriteActiveSvg from '@assets/icons/Union2.svg?react';
import FavoriteCircleSvg from '@assets/icons/favorite-circle.svg?react';
import ArrowRightSvg from '@assets/icons/Icon3.svg?react';

export const Wrapper = styled.div`
  height: 100%;
`;

export const HeaderFilters = styled.div`
  display: flex;
  border-bottom: 2px solid black;
`;

export const SideFilters = styled.aside`
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 300px;
  position: sticky;
  row-gap: 28px;
  padding: 28px 20px;
`;

export const Content = styled.div`
  padding: 28px 20px;
  display: flex;
  row-gap: 20px;
  flex-direction: column;
  width: calc(100% - 300px);
`;

export const SelectFilter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
  font-size: 15px;
  font-weight: 600;
  flex: 1;
  height: 50px;
  border-right: 2px solid black;
`;

export const SalaryFilter = styled(SelectFilter)`
  flex-direction: column;
  align-items: flex-start;
  padding: 8px 20px;
  border-right: none;
`;

export const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const CurrencyWrapper = styled.div`
  display: flex;
  column-gap: 8px;
`;

export const FilterInput = styled.input`
  padding: 0 4px;
  width: 40%;
  font-size: 18px;
  border: 2px solid black;
  box-shadow: 6px 6px 0px 0px rgba(0, 0, 0, 1);
`;

export const DollarIcon = styled(DollarSvg)`
  path {
    fill: black;
  }
  cursor: pointer;
  width: 24px;
  height: 32px;
  padding: 4px;
`;
export const RubleIcon = styled(RubleSvg)`
  path {
    fill: black;
  }
  cursor: pointer;
  width: 24px;
  padding: 4px;
  height: 32px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  height: 100%;
  overflow-y: auto;
`;

export const TitleWrapper = styled.div`
  display: flex;
  height: fit-content;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const ArrowDown = styled(ArrowDownSvg)``;

export const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
`;

export const FilterBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

export const FilterTitle = styled.div`
  font-weight: 600;
  font-size: 16px;
`;

export const FilterItem = styled.div`
  display: flex;
  column-gap: 12px;
`;

export const FilterCheck = styled.input``;

export const FilterName = styled.div`
  font-size: 14px;
`;

export const Reset = styled.div`
  font-size: 14px;
  cursor: pointer;
  color: ${COLORS.$SECONDARY_RED};
`;

export const FilterRadio = styled.input``;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 351px;
  box-shadow: 5px 5px 0px 0px ${COLORS.$SECONDARY_LIGHT_GRAY};
  border: 2px solid ${COLORS.$PRIMARY_DARK_GRAY};
`;

export const CardContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  padding: 20px;
  row-gap: 20px;
  justify-content: space-between;
`;

export const CardFooterWrapper = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  row-gap: 20px;
  border-radius: 0 0 4px 4px;
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
  grid-template-columns: repeat(auto-fill, 382px);
  gap: 16px;
`;

export const CardContentHeader = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const CardContentTags = styled.div`
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  gap: 8px;
  align-self: stretch;
  flex-wrap: wrap;
`;

export const CardTag = styled.div`
  display: flex;
  padding: 8px 16px;
  align-items: center;
  color: white;
  font-weight: 500;
  border: 1px solid black;
  background-color: ${COLORS.$SECONDARY_GREEN};
  box-shadow: 2px 2px 0px 0px rgba(0, 0, 0, 1);
  font-size: 14px;
`;

export const CardWidgets = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardName = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

export const CardDate = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${COLORS.$SECONDARY_GRAY};
`;

export const FavoriteCircle = styled(FavoriteCircleSvg)`
  cursor: pointer;
  background-color: white;
  width: 40px;
  height: 40px;
  padding: 8px;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: ${COLORS.$SECONDARY_RED};
  }
`;

export const FavoriteActive = styled(FavoriteActiveSvg)`
  cursor: pointer;
  background-color: white;
  width: 40px;
  height: 40px;
  padding: 8px;
  path {
    fill: ${COLORS.$SECONDARY_RED};
  }
`;

export const CardFooterSalary = styled.div`
  font-size: 18px;
  font-weight: 700;
`;

export const CardFooterInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardCompanyWrapper = styled.div``;

export const CardCompanyName = styled.div`
  font-size: 16px;
  font-weight: 700;
`;

export const CardCompanyCity = styled.div`
  font-size: 14px;
`;

export const CardCompanyButton = styled.button`
  padding: 8px 28px;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  border: 2px solid black;
  border-radius: 4px;
  box-shadow: 4px 4px 0px 0px rgba(0, 0, 0, 1);
  background-color: ${COLORS.$PRIMARY_ORANGE};
`;

export const ContentFilters = styled.div`
  display: flex;
  align-items: center;
  column-gap: 12px;
  justify-content: space-between;
`;

export const FiltersWrapper = styled.div`
  display: flex;
  column-gap: 12px;
`;

export const FiltersPagination = styled.div`
  display: flex;
  column-gap: 12px;
  align-items: center;
`;

export const ContentFilter = styled.div`
  display: flex;
  border: 2px solid black;
  padding: 8px 16px;
  column-gap: 40px;
  cursor: pointer;
  box-shadow: 3px 3px 0px 0px rgba(0, 0, 0, 1);
  align-items: center;
`;

export const ArrowRight = styled(ArrowRightSvg)`
  height: 24px;
`;

export const PaginationBlock = styled.div<{ isActive?: boolean }>`
  padding: 4px 8px;
  display: flex;
  align-items: center;
  cursor: pointer;
  ${({ isActive }) =>
    isActive &&
    `
    background-color: ${COLORS.$PRIMARY_DARK_GRAY};
    color: white;
    box-shadow: 2px 2px 0px 0px ${COLORS.$SECONDARY_DARK_GRAY};
      `}
`;

export const Line = styled.hr`
  height: 2px;
  background: ${COLORS.$SECONDARY_GRAY};
  margin: 0 auto;
  width: 90%;
`;

export const UpperPaginationWrapper = styled.div`
  display: flex;
  column-gap: 8px;
  align-items: center;
  background: ${COLORS.$PRIMARY_LIGHT_GRAY};
  color: ${COLORS.$PRIMARY_GRAY};
  padding: 7px;
  box-shadow: 4px 2px 0px 0px ${COLORS.$SECONDARY_LIGHT_GRAY};
`;
