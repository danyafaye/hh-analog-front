import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
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

const rotate = keyframes`
  0% {
    transform: rotate(5deg);
  }
  100% {
    transform: rotate(-5deg);
  }
`

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
  @media(max-width: 480px){
    padding-inline: 16px;
  }
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
  display: grid;
  overflow: clip;
  grid-template-columns: 3fr 2fr;
  @media(max-width: 1024px) {
    grid-template-columns: 1fr;
  }
  @media(max-width: 480px){
    padding-inline: 16px;
  }
`;

export const SloganMain = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  flex: 1;
`;

export const Slogan = styled.div`
  font-size: clamp(32px,5vw,56px);
  font-weight: 700;
  text-transform: uppercase;
  text-wrap: balance;
`;
export const SloganDescription = styled.div`
  text-wrap: balance;
`;

export const SloganButtonWrapper = styled.div`
  max-width: 180px;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
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
  width: 100%;
  max-width: 600px;
  place-self: center;
  transform-origin: bottom center;
  animation: ${rotate} 2s ease-in-out alternate infinite;
`;

export const VideosWrapper = styled.div`
  background-color: #b8ffdd;
  border-bottom: 2px solid ${COLORS.$PRIMARY_DARK_GRAY};
  display: flex;
  justify-content: space-between;
  column-gap: clamp(16px,4vw,36px);
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
  row-gap: clamp(64px,8vw,124px);
  @media(max-width: 480px){
    padding-inline: 16px;
    overflow: clip;
  }
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
  font-size: clamp(32px,5vw,48px);
  padding: 40px 40px 0;
  align-self: center;
  text-wrap: balance;
  @media(max-width: 480px){
    padding-inline: 16px;
  }
`;

export const CompaniesBottom = styled.div`
  display: grid;
  grid-template-columns: 350px 1fr;
  padding: 0 0 32px;
  margin: 40px;
  gap: 32px;
  position: relative;
  max-width: 1200px;
  @media(max-width: 768px) {
    grid-template-columns: 1fr;
    place-items: center;
  }
  @media(max-width: 480px){
    margin-inline: 16px;
  }
`;

export const CompaniesDesc = styled.div`
  grid-column: 2;
  @media(max-width: 768px) {
    grid-column: 1;
  }
`;

export const StarParticle = styled.img`
  aspect-ratio: 2/3;
  width: clamp(32px,5vw,64px);
`;

export const DeveloperUpper = styled.div`
  color: ${COLORS.$WHITE_100};
  font-weight: 700;
  font-size: clamp(32px,5vw,48px);
  text-wrap: balance;
`;

export const DeveloperContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4,auto);
  @media(max-width: 1024px) {
    grid-template-columns: repeat(2,auto);
  }
`;

export const ConnectingImage = styled.img`
  background: ${COLORS.$BLACK_100};
  border: 2px solid ${COLORS.$PRIMARY_DARK_GRAY};
  box-shadow: 4px 4px 0 0 rgba(0, 0, 0, 1);
  height: 285px;
  max-width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  @media(max-width: 768px) {
    position: initial;
    grid-column: 1;
  }
`;

export const DeveloperBlock = styled(motion.div)<{
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
  font-size: clamp(14px,4vw,24px);
  position: relative;
  ${({ color }) => `background: ${color}`};
  ${({ angle, xPixels, yPixels }) =>
    `transform: rotateZ(${angle}deg) translateX(${xPixels}px) translateY(${yPixels}px)`};
  @media(max-width: 1024px) {
    ${({ angle, xPixels, yPixels }) =>
      `transform: rotateZ(${+angle/2}deg) translateX(${+xPixels/2}px) translateY(${+yPixels/2}px)`};
  }
`;

export const CodeIcon = styled(CodeIconSvg)`
  height: clamp(36px,4vw,72px);
`;
export const PencilIcon = styled(PencilIconSvg)`
  height: clamp(36px,4vw,72px);
`;
export const PenIcon = styled(PenIconSvg)`
  height: clamp(36px,4vw,72px);
`;
export const StickIcon = styled(StickIconSvg)`
  height: clamp(36px,4vw,72px);
`;

export const DeveloperText = styled.span`
  font-weight: 800;
`;

export const ShortDescriptionLine = styled.div`
  border-bottom: 2px solid ${COLORS.$PRIMARY_DARK_GRAY};
  padding: 24px 0;
  display: flex;
  column-gap: clamp(16px,3vw,32px);
  overflow: hidden;
  justify-content: center;
`;

export const ShortDescription = styled.div`
  display: flex;
  align-items: center;
  column-gap: clamp(8px,3vw,16px);
`;

export const ShortDescriptionText = styled.span`
  font-weight: 600;
  font-size: clamp(16px,3vw,24px);
`;

export const DashboardIcon = styled(DashboardIconSvg)`
  height: clamp(24px,4vw,34px);
`;
export const VacancyIcon = styled(VacancyIconSvg)`
  height: clamp(24px,4vw,34px);
`;
export const ResumeIcon = styled(ResumeIconSvg)`
  height: clamp(24px,4vw,34px);
`;

export const LongDescriptionWrapper = styled.div`
  background: #fee9ce;
  border-bottom: 2px solid ${COLORS.$PRIMARY_DARK_GRAY};
  padding: 84px 40px;
  display: flex;
  flex-direction: column;
  row-gap: clamp(64px,8vw,84px);
  overflow: clip;
  @media(max-width: 480px){
    padding-inline: 16px;
  }
`;

export const PreFooterWrapper = styled.div`
  background: #69d043;
  padding: 32px 40px;
  text-align: center;
  @media(max-width: 480px){
    padding-inline: 16px;
  }
`;

export const PreFooterText = styled.span`
  font-size: clamp(48px,10vw,144px);
  font-weight: 800;
`;

export const LongDescriptionContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
  column-gap: clamp(16px,4vw,32px);
  align-items: center;
`;

export const LongDescriptionContainerRight = styled(LongDescriptionContainer)`
  justify-content: flex-end;
`;

export const LongDescriptionScreen = styled.img`
  width: 100%;
  max-width: 700px;
  border: 2px solid ${COLORS.$PRIMARY_DARK_GRAY};
  box-shadow: 4px 4px 0 0 rgba(0, 0, 0, 1);
`;

export const LongDescriptionText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LongDescriptionTextRight = styled(LongDescriptionText)`
  text-align: end;
  @media(max-width: 726px) {
    grid-row: 2;
  }
`;

export const LongDescriptionTitle = styled.span`
  font-size: clamp(32px,4vw,48px);
  font-weight: 800;
`;

export const LongDescriptionInfo = styled.span`
  font-size: 18px;
  font-weight: 600;
`;
