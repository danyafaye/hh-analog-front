import { COLORS } from '@src/constants/styles';
import styled from 'styled-components';

export const AuthPageWrapper = styled.div`
  display: flex;
  overflow-x: hidden;
  row-gap: 16px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${COLORS.$PRIMARY_LIGHT_GRAY};
`;

export const AuthForm = styled.div`
  display: flex;
  flex-direction: column;
  padding: 55px;
  gap: 64px;
  overflow-y: auto;
  width: 40%;
  background-color: ${COLORS.$WHITE_100};
  box-shadow: 5px 5px 0 0 ${COLORS.$SECONDARY_LIGHT_GRAY};
  border: 2px solid ${COLORS.$PRIMARY_DARK_GRAY};
`;

export const ControlWrapper = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
`;

export const BottomWrapper = styled.div`
  display: flex;
  gap: 28px;
`;
