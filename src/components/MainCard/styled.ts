import styled from 'styled-components';
import { COLORS } from '@src/constants/styles.ts';
import { iconsDictionary } from '@src/constants/iconsDictionary.ts';

export const Line = styled.hr`
  height: 2px;
  background: ${COLORS.$SECONDARY_GRAY};
  margin: 0 auto;
  width: 90%;
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
  box-shadow: 2px 2px 0 0 rgba(0, 0, 0, 1);
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

export const FavoriteCircle = styled(iconsDictionary.favoriteCircle)`
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

export const FavoriteActive = styled(iconsDictionary.favoriteActive)`
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

export const CardSubjectWrapper = styled.div``;

export const CardSubjectName = styled.div`
  font-size: 16px;
  font-weight: 700;
`;

export const CardSubjectCity = styled.div`
  font-size: 14px;
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 351px;
  box-shadow: 5px 5px 0 0 ${COLORS.$SECONDARY_LIGHT_GRAY};
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
