import React, { useState } from 'react';
import * as ST from './styled.ts';
import { useFormik } from 'formik';
import { Button } from '@components/Button';
import { Input } from '@components/Input/Input.tsx';
import { LoginForm } from './LoginForm/LoginForm.tsx';
import { RegistrationForm } from './RegistrationForm/RegistrationForm.tsx';

const Auth = () => {
  const authForm = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <ST.AuthPageWrapper>
      {/* <Input inputLabel="Email" />
        <Input inputLabel="Password" />
        <Button
          text="Войти"
          type="submit"
        /> */}

      {!isRegistered ? (
        <LoginForm toggleRegistration={() => setIsRegistered(!isRegistered)} />
      ) : (
        <RegistrationForm toggleRegistration={() => setIsRegistered(!isRegistered)} />
      )}
    </ST.AuthPageWrapper>
  );
};

export { Auth };
