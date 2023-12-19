import { FC, useState } from 'react';

import { useFormik } from 'formik';

import { Input } from '@components/Input';
import { Button } from '@components/Button';

import * as ST from '../styled';
import { BottomWrapper } from '../styled';

type RegistrationFormType = {
  toggleRegistration: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const RegistrationForm: FC<RegistrationFormType> = ({ toggleRegistration }) => {
  //const { login } = useAuth();
  //const [isPassword, setIsPassword] = useState(true);
  const registrationForm = useFormik({
    initialValues: {
      name: '',
      surname: '',
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
            inputLabel="Имя"
            placeholder="Имя"
            name="name"
            onChange={registrationForm.handleChange}
            value={registrationForm.values.name}
            error={Boolean(registrationForm.errors.name)}
          />
          {registrationForm.errors && (
            <div style={{ color: 'red' }}>{registrationForm.errors.name}</div>
          )}
        </div>
        <div>
          <Input
            inputLabel="Фамилия"
            placeholder="Фамилия"
            name="surname"
            onChange={registrationForm.handleChange}
            value={registrationForm.values.surname}
            error={Boolean(registrationForm.errors.surname)}
          />
          {registrationForm.errors && (
            <div style={{ color: 'red' }}>{registrationForm.errors.surname}</div>
          )}
        </div>
        <div>
          <Input
            inputLabel="Электронная почта"
            placeholder="example@gmail.com"
            name="email"
            onChange={registrationForm.handleChange}
            value={registrationForm.values.email}
            error={Boolean(registrationForm.errors.email)}
          />
          {registrationForm.errors && (
            <div style={{ color: 'red' }}>{registrationForm.errors.email}</div>
          )}
        </div>
        <div>
          <Input
            inputLabel="Пароль"
            placeholder="********"
            type="password"
            name="password"
            onChange={registrationForm.handleChange}
            value={registrationForm.values.password}
            error={Boolean(registrationForm.errors.password)}
          />
          {registrationForm.errors && (
            <div style={{ color: 'red' }}>{registrationForm.errors.password}</div>
          )}
        </div>
      </ST.ControlWrapper>
      <ST.BottomWrapper>
        <Button
          type="submit"
          text="Зарегистрироваться"
        />
        <Button
          styles="unFilled"
          onClick={toggleRegistration}
          text="Войти в аккаунт"
          type="button"
        />
      </ST.BottomWrapper>
    </ST.AuthForm>
  );
};

export { RegistrationForm };
