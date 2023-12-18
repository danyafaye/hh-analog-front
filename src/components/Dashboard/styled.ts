import styled from 'styled-components';
import { COLORS } from '@src/constants/styles.ts';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 36px 40px;
  row-gap: 20px;
`;

export const Header = styled.header`
  font-size: 18px;
  font-weight: 500;
`;

export const BlockContainer = styled.div<{
  column?: boolean;
  noMargin?: boolean;
  noOverflow?: boolean;
}>`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  overflow-y: hidden;
  ${({ column, noMargin, noOverflow }) => {
    return `
    flex-direction: ${column ? 'column' : 'row'};
    margin-bottom: ${noMargin ? '0px' : '36px'};
    ${noOverflow && `overflow: inherit;`}
    `;
  }}
`;

export const BlockContent = styled.div`
  display: flex;
  gap: 16px;
  height: 100%;
  padding-bottom: 32px;
`;

export const ChartContainer = styled(BlockContainer)`
  flex-grow: 1;
  overflow: inherit;
`;

export const ProfileWrapper = styled(BlockContainer)`
  display: grid;
  grid-template-columns: 1fr 400px;
  width: 100%;
  margin: 0;
  overflow: inherit;
`;

export const ProfileContainer = styled.div`
  grid-column-start: 2;
  grid-row-start: 1;
  grid-row-end: 3;
  box-shadow: 5px 5px 0 0 ${COLORS.$SECONDARY_LIGHT_GRAY};
  border: 2px solid ${COLORS.$PRIMARY_DARK_GRAY};
`;

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;

  padding: 28px 20px 20px;
  gap: 20px;
`;
export const ProfileBlock = styled.div<{ column?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
  ${({ column }) => {
    return `
    flex-direction: ${column ? 'column' : 'row'};
    `;
  }}
`;

export const ProfileActionsContainer = styled(ProfileBlock)`
  gap: 12px;
  right: 20px;
  height: 40px;
  position: absolute;
  border: 1px solid ${COLORS.$PRIMARY_DARK_GRAY};
  box-shadow: 2px 2px 0 0 rgba(0, 0, 0, 1);
  padding: 0 8px;
  div {
    cursor: pointer;
  }
`;

export const ProfileAvatar = styled.img`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  object-fit: cover;
`;

export const ProfileName = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 12px;
`;

export const ProfileAge = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
`;

export const ProfileBirthday = styled.div`
  font-size: 14px;
  font-weight: 400;
`;

export const ProfileLocationContainer = styled(ProfileBlock)`
  gap: 12px;
  padding: 5px;
`;

export const ProfileLocationAddress = styled.div`
  font-size: 14px;
  font-weight: 400;
`;

export const ProfileTagsContainer = styled(ProfileBlock)`
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const ProfileTag = styled.div`
  display: flex;
  padding: 8px 16px;
  align-items: center;
  color: white;
  font-weight: 500;
  border: 1px solid black;
  background-color: ${COLORS.$SECONDARY_GREEN};
  box-shadow: 2px 2px 0 0 rgba(0, 0, 0, 1);
  font-size: 14px;
  white-space: nowrap;
`;

export const ProfileFooter = styled(ProfileBlock)`
  margin-top: auto;
  gap: 12px;
`;

export const ProfileLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  gap: 12px;
  height: 40px;
  color: ${COLORS.$PRIMARY_DARK_GRAY};
  border: 1px solid ${COLORS.$PRIMARY_DARK_GRAY};
  box-shadow: 2px 2px 0 0 rgba(0, 0, 0, 1);
`;

export const ResumeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  row-gap: 20px;
`;

export const FavoritesVacanciesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const FavoritesVacancies = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 382px);
  gap: 16px;
  margin-bottom: 20px;
`;

export const ResponseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;
