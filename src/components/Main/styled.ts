import styled from 'styled-components';
import { COLORS } from '@src/constants/styles.ts';

import DollarSvg from '@assets/icons/dollar-icon.svg?react';
import RubleSvg from '@assets/icons/ruble-icon.svg?react';
import ArrowDownSvg from '@assets/icons/arrow-down.svg?react';
import FavoriteCircleSvg from '@assets/icons/favorite-circle.svg?react';

export const Wrapper = styled.div`
  color: ${COLORS.$BLACK_100};
  height: 100%;
`;

export const HeaderFilters = styled.div`
  display: flex;
  border-bottom: 2px solid ${COLORS.$PURPLE_70};
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
  width: 100%;
`;

export const SelectFilter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  flex: 1;
  height: 70px;
`;

export const SalaryFilter = styled(SelectFilter)`
  flex-direction: column;
  align-items: flex-start;
  padding: 8px 20px;
  border-left: 2px solid ${COLORS.$PURPLE_70};
`;

export const FilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const FilterInput = styled.input`
  padding: 0 4px;
  width: 40%;
  border: 1px solid black;
  border-radius: 8px;
`;

export const DollarIcon = styled(DollarSvg)`
  background-color: ${COLORS.$PURPLE_70};
  width: 24px;
  border-radius: 8px;
  height: 32px;
  padding: 6px;
`;
export const RubleIcon = styled(RubleSvg)`
  background-color: ${COLORS.$PURPLE_70};
  border-radius: 8px;
  width: 24px;
  height: 32px;
  padding: 6px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  height: calc(100% - 72px);
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
  font-weight: 600;
  font-size: 16px;
`;

export const FilterBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

export const FilterTitle = styled.div`
  font-weight: 600;
  font-size: 14px;
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
  color: ${COLORS.$RED_30};
`;

export const FilterRadio = styled.input``;

export const CardWrapper = styled.div`
  border-radius: 20px;
  box-shadow: 0 4px 4px 0 rgba(205, 206, 205, 0.25);
  min-height: 351px;
`;

export const CardContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  row-gap: 20px;
  background-color: ${COLORS.$ORANGE_90};
  border-radius: 20px 20px 0 0;
  justify-content: space-between;
`;

export const CardFooterWrapper = styled.div`
  display: flex;
  padding: 20px;
  background-color: ${COLORS.$BLUE_80};
  flex-direction: column;
  row-gap: 20px;
  border-radius: 0 0 20px 20px;
`;

export const ContentTitleWrapper = styled.div`
  display: flex;
  column-gap: 12px;
`;

export const ContentTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

export const ContentCount = styled.div`
  color: ${COLORS.$GRAY_90};
  font-size: 20px;
  font-weight: 600;
`;

export const ContentCards = styled.div`
  display: grid;
  grid-template-columns: 382px;
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
  border-radius: 8px;
  border: 1px solid black;
  font-size: 14px;
`;

export const CardWidgets = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardName = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

export const CardDate = styled.div`
  font-size: 14px;
`;

export const FavoriteCircle = styled(FavoriteCircleSvg)`
  background-color: white;
  border-radius: 20px;
  width: 40px;
  height: 40px;
  padding: 10px;
`;

export const CardFooterSalary = styled.div`
  font-size: 16px;
  color: ${COLORS.$ORANGE_90};
`;

export const CardFooterInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardCompanyWrapper = styled.div``;

export const CardCompanyName = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${COLORS.$ORANGE_90};
`;

export const CardCompanyCity = styled.div`
  font-size: 14px;
  color: ${COLORS.$ORANGE_90};
`;

export const CardCompanyButton = styled.button`
  padding: 8px 28px;
  display: flex;
  align-items: center;
  background-color: ${COLORS.$ORANGE_90};
  border-radius: 8px;
`;
