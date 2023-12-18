import styled from 'styled-components';
import { COLORS } from '@src/constants/styles.ts';

export const Wrapper = styled.div`
  height: 360px;
  width: 100%;
  box-shadow: 5px 5px 0 0 ${COLORS.$SECONDARY_LIGHT_GRAY};
  border: 2px solid ${COLORS.$PRIMARY_DARK_GRAY};
  overflow: hidden;
`;
