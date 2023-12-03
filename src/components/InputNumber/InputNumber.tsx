import { ChangeEvent, FC, InputHTMLAttributes } from 'react';

type InputNumberProps = InputHTMLAttributes<HTMLInputElement>;

import * as ST from './styled.ts';

const InputNumber: FC<InputNumberProps> = ({ ...props }) => {
  const onInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    const pattern = /[A-Za-zА-Яа-яЁё]/g;
    return (e.target.value = e.target.value.replace(pattern, ''));
  };

  return (
    <ST.InputWrapper>
      <ST.InputNumberStyled
        type="text"
        inputMode="numeric"
        pattern="[0-9]*"
        onInput={onInputValue}
        {...props}
      />
      <ST.RubleWrapper>₽</ST.RubleWrapper>
    </ST.InputWrapper>
  );
};

export { InputNumber };
