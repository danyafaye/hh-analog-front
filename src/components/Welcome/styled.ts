import styled, { keyframes } from 'styled-components';
import { COLORS } from '@src/constants/styles.ts';
import CodeIconSvg from '@assets/icons/codeIcon.svg?react';
import PencilIconSvg from '@assets/icons/pencilIcon.svg?react';
import PenIconSvg from '@assets/icons/penIcon.svg?react';
import StickIconSvg from '@assets/icons/stickIcon.svg?react';
import DashboardIconSvg from '@assets/icons/dashboardIcon.svg?react';
import VacancyIconSvg from '@assets/icons/vacancyIcon.svg?react';
import ResumeIconSvg from '@assets/icons/resumeIcon.svg?react';

const moveLeft = keyframes`
  0%{
    transform: translate(0, 0);
  }

  100%{
    transform: translate(-100%, 0);
  }
`;

export const WelcomeWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const WelcomeFooter = styled.footer`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  border-top: 2px solid ${COLORS.$PRIMARY_DARK_GRAY};
  font-size: 16px;
  background-color: ${COLORS.$PRIMARY_DARK_GRAY};
  color: ${COLORS.$WHITE_100};
`;

export const WelcomeContent = styled.main`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
`;

export const FooterUpper = styled.div``;

export const FooterBottom = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
`;

export const FooterBlock = styled.div`
  display: flex;
  justify-content: center;
`;

export const ContainerBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  padding: 32px 40px;
  width: 100%;
`;

export const ContainerBlockCopyright = styled(ContainerBlock)`
  align-items: center;
  border-top: 2px solid ${COLORS.$SECONDARY_GRAY};
  padding: 16px 40px;
`;

export const SloganWrapper = styled.div`
  background-color: #fee9ce;
  border-bottom: 2px solid ${COLORS.$PRIMARY_DARK_GRAY};
  position: relative;
`;

export const SloganContentWrapper = styled.div`
  padding: 32px 40px;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

export const Slogan = styled.div`
  font-size: 56px;
  font-weight: 700;
  text-transform: uppercase;
  width: 80%;
`;
export const SloganDescription = styled.div`
  width: 60%;
`;
export const SloganButtonWrapper = styled.div`
  width: 180px;
`;

export const LinePurple = styled.div`
  background-color: #814cfc;
  border-bottom: 2px solid ${COLORS.$PRIMARY_DARK_GRAY};
  color: ${COLORS.$WHITE_100};
  padding: 16px 0;
  overflow: hidden;
  width: 100%;
  display: flex;
`;

export const WordBlock = styled.div`
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  animation: ${moveLeft} 18s infinite linear;
  padding-left: 100%;
  font-size: 20px;
  white-space: nowrap;
`;

export const ImageWrapper = styled.img`
  height: 100%;
  bottom: 0;
  right: 0;
  position: absolute;
`;

export const VideosWrapper = styled.div`
  background-color: #b8ffdd;
  border-bottom: 2px solid ${COLORS.$PRIMARY_DARK_GRAY};
  display: flex;
  justify-content: space-between;
  column-gap: 36px;
  padding: 32px 40px;
`;

export const VideoBlock = styled.video`
  width: 30%;
  border: 2px solid ${COLORS.$PRIMARY_DARK_GRAY};
  box-shadow: 4px 4px 0 0 rgba(0, 0, 0, 1);
`;

export const DeveloperWrapper = styled.div`
  border-bottom: 2px solid ${COLORS.$PRIMARY_DARK_GRAY};
  background: #8a55ff;
  padding: 80px 32px;
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 124px;
`;

export const CompaniesWrapper = styled.div`
  background: #fed80b;
  border-bottom: 2px solid ${COLORS.$PRIMARY_DARK_GRAY};
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
`;

export const CompaniesUpper = styled.div`
  font-weight: 700;
  font-size: 48px;
  padding: 40px 40px 0;
  align-self: center;
`;

export const CompaniesBottom = styled.div`
  display: flex;
  padding: 0 40px 32px;
  column-gap: 32px;
  position: relative;
  top: 75px;
  width: 80%;
`;

export const StarParticle = styled.img`
  width: 64px;
  height: 96px;
`;

export const DeveloperUpper = styled.div`
  color: ${COLORS.$WHITE_100};
  font-weight: 700;
  font-size: 48px;
`;

export const DeveloperContent = styled.div`
  display: flex;
`;

export const ConnectingImage = styled.img`
  background: ${COLORS.$BLACK_100};
  border: 2px solid ${COLORS.$PRIMARY_DARK_GRAY};
  box-shadow: 4px 4px 0 0 rgba(0, 0, 0, 1);
  height: 285px;
`;

export const DeveloperBlock = styled.div<{
  color: string;
  angle: string;
  xPixels: string;
  yPixels: string;
}>`
  border: 2px solid ${COLORS.$PRIMARY_DARK_GRAY};
  box-shadow: 4px 4px 0 0 rgba(0, 0, 0, 1);
  padding: 24px;
  row-gap: 36px;
  padding-right: 36px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-size: 24px;
  position: relative;
  ${({ color }) => `background: ${color}`};
  ${({ angle, xPixels, yPixels }) =>
    `transform: rotateZ(${angle}) translateX(${xPixels}) translateY(${yPixels})`};
`;

export const CodeIcon = styled(CodeIconSvg)`
  height: 72px;
`;
export const PencilIcon = styled(PencilIconSvg)`
  height: 72px;
`;
export const PenIcon = styled(PenIconSvg)`
  height: 72px;
`;
export const StickIcon = styled(StickIconSvg)`
  height: 72px;
`;

export const DeveloperText = styled.span`
  font-weight: 800;
`;

export const ShortDescriptionLine = styled.div`
  border-bottom: 2px solid ${COLORS.$PRIMARY_DARK_GRAY};
  padding: 24px 0;
  display: flex;
  column-gap: 32px;
  overflow: hidden;
  justify-content: center;
`;

export const ShortDescription = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
`;

export const ShortDescriptionText = styled.span`
  font-weight: 600;
  font-size: 24px;
`;

export const DashboardIcon = styled(DashboardIconSvg)`
  height: 34px;
`;
export const VacancyIcon = styled(VacancyIconSvg)`
  height: 34px;
`;
export const ResumeIcon = styled(ResumeIconSvg)`
  height: 34px;
`;

export const LongDescriptionWrapper = styled.div`
  background: #fee9ce;
  border-bottom: 2px solid ${COLORS.$PRIMARY_DARK_GRAY};
  padding: 84px 40px;
  display: flex;
  flex-direction: column;
  row-gap: 84px;
`;

export const PreFooterWrapper = styled.div`
  background: #69d043;
  padding: 32px 40px;
  text-align: center;
`;

export const PreFooterText = styled.span`
  font-size: 144px;
  font-weight: 800;
`;

export const LongDescriptionContainer = styled.div`
  display: flex;
  column-gap: 32px;
  align-items: center;
`;

export const LongDescriptionContainerRight = styled(LongDescriptionContainer)`
  justify-content: flex-end;
`;

export const LongDescriptionScreen = styled.img`
  width: 700px;
  border: 2px solid ${COLORS.$PRIMARY_DARK_GRAY};
  box-shadow: 4px 4px 0 0 rgba(0, 0, 0, 1);
`;

export const LongDescriptionText = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
`;

export const LongDescriptionTextRight = styled(LongDescriptionText)`
  text-align: end;
`;

export const LongDescriptionTitle = styled.span`
  font-size: 48px;
  font-weight: 800;
`;

export const LongDescriptionInfo = styled.span`
  font-size: 18px;
  font-weight: 600;
`;
