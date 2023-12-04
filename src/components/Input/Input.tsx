import { FC, InputHTMLAttributes, ReactNode } from 'react';


import * as ST from './styled';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  inputLabel?: string;
  icon?: ReactNode;
  error?: boolean;
};

const Input: FC<InputProps> = ({
  inputLabel,
  icon,
  error = false,
  ...props
}) => {
  return (
    <ST.Label>
      {inputLabel}
      <ST.InputWrapper>
        <ST.Input
          error={error}
          icon={Boolean(icon)}
          {...props}
        />
        <ST.InputRightIcon>{icon}</ST.InputRightIcon>
      </ST.InputWrapper>
    </ST.Label>
  );
};

export { Input };
export type { InputProps };