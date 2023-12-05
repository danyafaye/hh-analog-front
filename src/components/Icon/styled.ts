import styled from 'styled-components';
import { IconsSize } from '@components/Icon/Icon.tsx';

export const IconsWrapper = styled.div<{ size?: IconsSize }>`
  display: flex;
  ${({ size }) => {
    switch (size) {
      case 'sm':
        return `
          height: 16px;
          width: 16px;
        `;
      case 'md':
        return `
          height: 24px;
          width: 24px;
        `;
    }
  }}
`;
