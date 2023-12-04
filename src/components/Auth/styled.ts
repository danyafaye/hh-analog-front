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
  gap: 96px;
  box-shadow: 0 7px 15px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  overflow-y: auto;
  width: 36.6%;
  background-color: ${COLORS.$WHITE_100};
`;

export const ControlWrapper = styled.div`
  display: flex;
  gap: 28px;
  flex-direction: column;
`;
