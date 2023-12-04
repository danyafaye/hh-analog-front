import { FC, useState } from 'react';

import { useFormik } from 'formik';

import { Input } from '@components/Input';
import { Button } from '@components/Button';

import * as ST from '../styled';

type LoginFormType = {
  toggleRegistration: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const LoginForm: FC<LoginFormType> = ({ toggleRegistration }) => {
  //const { login } = useAuth();
  //const [isPassword, setIsPassword] = useState(true);
  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    //validationSchema: AUTH_SCHEMA,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <ST.AuthForm>
      <ST.ControlWrapper>
        <div>
          <Input
            inputLabel="Электронная почта"
            placeholder="example@gmail.com"
            name="email"
            onChange={loginForm.handleChange}
            value={loginForm.values.email}
            error={Boolean(loginForm.errors.email)}
          />
          {loginForm.errors && <div style={{ color: 'red' }}>{loginForm.errors.email}</div>}
        </div>
        <div>
          <Input
            inputLabel="Пароль"
            placeholder="********"
            type="password"
            name="password"
            onChange={loginForm.handleChange}
            value={loginForm.values.password}
            error={Boolean(loginForm.errors.password)}
          />
          {loginForm.errors && <div style={{ color: 'red' }}>{loginForm.errors.password}</div>}
        </div>
      </ST.ControlWrapper>
      <ST.ControlWrapper>
        <Button
          type="submit"
          text="Войти"
        />
        <Button
          onClick={toggleRegistration}
          text="Ещё не зарегистрированы?"
          type="button"
        />
      </ST.ControlWrapper>
    </ST.AuthForm>
  );
};

export { LoginForm };
