import styled from 'styled-components';
import { COLORS } from '@src/constants/styles.ts';

export const Wrapper = styled.div`
  height: 360px;
  min-width: 320px;
  width: 100%;
  box-shadow: 5px 5px 0 0 ${COLORS.$SECONDARY_LIGHT_GRAY};
  border: 2px solid ${COLORS.$PRIMARY_DARK_GRAY};
  overflow: hidden;
`;

export const EmptyData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 24px;
  font-weight: 500;
`;
