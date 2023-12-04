import styled, { css } from 'styled-components';

import { COLORS } from '@src/constants/styles';

import { InputProps } from '@components/Input/Input';

export const Input = styled.input<Partial<InputProps>>`
  background-color: ${COLORS.$WHITE_100};
  color: ${COLORS.$BLACK_100};
  ${(props) => {
    if (props.icon) {
      return css`
        padding-right: 55px !important;
      `;
    }
  }}
  ${(props) => {
    if (props.error) {
      return css`
        border-bottom: 1px solid red !important;
      `;
    }
  }};
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: ${COLORS.$PRIMARY_ORANGE};

  font-size: 24px;
  gap: 5px;
  width: 100%;
`;

export const InputWrapper = styled.div`
  position: relative;
  padding: 4px 8px;
  height: 100%;
  width: 100%
  
  max-width: 200px;
  border: 2px solid black;
  box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 1);
  display: flex;
  align-items: center;
`;

export const InputRightIcon = styled.div<Partial<InputProps>>`
  position: absolute;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
`;
