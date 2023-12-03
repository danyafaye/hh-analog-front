import styled from 'styled-components';
import { COLORS } from '@src/constants/styles.ts';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 36px 20px;
`;

export const Header = styled.header`
  font-size: 18px;
  font-weight: 500;
`;

export const BlockContainer = styled.div<{ column?: boolean; noMargin?: boolean }>`
  display: flex;
  gap: 20px;
  overflow-x: auto;
  overflow-y: hidden;
  ${({ column, noMargin }) => {
    return `
    flex-direction: ${column ? 'column' : 'row'};
    margin-bottom: ${noMargin ? '0px' : '36px'};
    `;
  }}
`;

export const BlockContent = styled.div`
  display: flex;
  gap: 16px;
`;

export const ProfileWrapper = styled(BlockContainer)`
  display: grid;
  grid-template-columns: 1fr 500px;
  grid-template-rows: repeat(2, 1fr);
  width: 100%;
`;

export const ProfileContainer = styled.div`
  grid-column-start: 2;
  grid-row-start: 1;
  grid-row-end: 3;
`;

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  box-shadow: 5px 5px 0 0 ${COLORS.$SECONDARY_LIGHT_GRAY};
  border: 2px solid ${COLORS.$PRIMARY_DARK_GRAY};
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
  background: ${COLORS.$PRIMARY_LIGHT_GRAY};
  border: 1px solid ${COLORS.$PRIMARY_DARK_GRAY};
  padding: 0 8px;
`;

export const EditAction = styled(EditSvg)`
  height: 19px;
  width: 19px;
  cursor: pointer;
  path {
    fill: ${COLORS.$BLACK_100};
  }
`;

export const DeleteAction = styled(DeleteSvg)`
  height: 19px;
  width: 19px;
  cursor: pointer;
  path {
    fill: ${COLORS.$BLACK_100};
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

export const LocationIcon = styled(AddressSvg)`
  height: 25px;
  width: 25px;
`;

export const ProfileTagsContainer = styled(ProfileBlock)`
  gap: 8px;
  flex-wrap: wrap;
  justify-content: flex-start;
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
`;

export const ProfileLink = styled(Link)`
  padding: 0 10px;
  height: 40px;
`;

export const TelegramIcon = styled;

export const GithubIcon = styled;

export const GoogleIcon = styled;
