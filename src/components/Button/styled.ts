import styled from 'styled-components';
import { ButtonStyles, MainColors } from '@components/Button/Button.tsx';
import { COLORS } from '@src/constants/styles.ts';

export const ButtonWrapper = styled.button<{ styles: ButtonStyles; mainColor: MainColors }>`
  padding: 8px 16px;
  display: flex;
  align-items: center;
  font-size: 14px;
  column-gap: 8px;
  border: 2px solid black;
  border-radius: 4px;
  box-shadow: 4px 4px 0 0 rgba(0, 0, 0, 1);
  font-weight: 600;
  ${({ styles, mainColor }) => {
    switch (styles) {
      case 'default':
        return `
          background-color: ${mainColor};
          `;
      case 'unFilled':
        return `
          background-color: ${COLORS.$WHITE_100};
        `;
    }
  }}
`;
