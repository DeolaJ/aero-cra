/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable max-lines-per-function */
import React from 'react';
import { Formik } from 'formik';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { loginUser, useAuthState, useAuthDispatch } from '../auth';

import InputField from './input-field-wrapper';
import { Button } from './button';
import THEME from '../constants';

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 14px;
  justify-content: center;
  align-items: center;

  @media (min-width: ${THEME.breakpoints.md}) {
    justify-content: flex-end;
  }
`;

const InputFieldContainer = styled.div`
  margin-bottom: 25px;

  @media (max-width: ${THEME.breakpoints.sm}) {
    margin-bottom: 10px;
  }
`;

const Form = styled.form`
  max-width: 400px;
  padding: 3rem 1.5rem;
  background: white;
  margin: 0 auto;
  width: 100%;
  margin-bottom: 2rem;

  h2 {
    margin-top: 0;
  }

  .login-button {
    width: 100%;
    text-align: center;
  }

  p button {
    padding: 0;
    margin: 0;
  }

  @media (min-width: 768px) {
    padding: 4rem 3rem;
  }
`;

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
});

const LoginForm = ({ setMode, type, closeModal }) => {
  const history = useHistory();
  const initialValues = {
    email: 'ben@ben.ben',
    password: 'passed',
  };
  const dispatch = useAuthDispatch();
  const { loading, errorMessage } = useAuthState();

  switch (type) {
    case 'nav': {
      return (
        <Formik
          initialValues={initialValues}
          validationSchema={LoginSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(async () => {
              const data = {
                ...values,
              };
              const response = await loginUser(dispatch, data);
              setSubmitting(false);
              if (!response.user) return;
              toast.success('Logged in successfully');
              history.replace('/dashboard');
            }, 1000);
          }}
        >
          {({
            isSubmitting, errors, values, handleChange, handleSubmit,
          }) => (
            <Form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
              <h2>Welcome back!</h2>
              {
                errorMessage ? (
                  <p styles={{ color: THEME.colors.error.main }}>
                    {errorMessage}
                  </p>
                ) : null
              }
              <InputFieldContainer>
                <InputField
                  label="email"
                  placeholder="Enter email address"
                  id="email"
                  name="email"
                  type="email"
                  value={values.email}
                  setValue={handleChange}
                  error={values.email && errors.email}
                  errorColor={THEME.colors.error.main}
                />
              </InputFieldContainer>

              <InputFieldContainer>
                <InputField
                  label="password"
                  placeholder="Enter password"
                  id="password"
                  name="password"
                  type="password"
                  value={values.password}
                  setValue={handleChange}
                  error={values.password && errors.password}
                  errorColor={THEME.colors.error.main}
                />
              </InputFieldContainer>

              <ButtonContainer>
                <Button
                  disabled={isSubmitting || loading}
                  className="login-button"
                  type="primary"
                  text={isSubmitting ? 'Logging in...' : 'Login'}
                />
              </ButtonContainer>

              <p>
                {"Don't"}
                {' '}
                have an account? Click
                {' '}
                <Button
                  text="here"
                  type="default"
                  onClick={() => setMode((currentStatus) => ({
                    ...currentStatus,
                    open: true,
                    mode: 'sign-up',
                  }))}
                />
                {' '}
                to sign up
              </p>
            </Form>
          )}
        </Formik>
      );
    }

    case 'booking': {
      return (
        <Formik
          initialValues={initialValues}
          validationSchema={LoginSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(async () => {
              const data = {
                ...values,
              };
              const response = await loginUser(dispatch, data);
              setSubmitting(false);
              if (!response.user) return;
              toast.success('Logged in successfully');
              history.replace('/dashboard');
            }, 1000);
          }}
        >
          {({
            isSubmitting, errors, values, handleChange, handleSubmit,
          }) => (
            <Form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
              <h2>Welcome back!</h2>
              {
                errorMessage ? (
                  <p styles={{ color: THEME.colors.error.main }}>
                    {errorMessage}
                  </p>
                ) : null
              }
              <InputFieldContainer>
                <InputField
                  label="email"
                  placeholder="Enter email address"
                  id="email"
                  name="email"
                  type="email"
                  value={values.email}
                  setValue={handleChange}
                  error={values.email && errors.email}
                  errorColor={THEME.colors.error.main}
                />
              </InputFieldContainer>

              <InputFieldContainer>
                <InputField
                  label="password"
                  placeholder="Enter password"
                  id="password"
                  name="password"
                  type="password"
                  value={values.password}
                  setValue={handleChange}
                  error={values.password && errors.password}
                  errorColor={THEME.colors.error.main}
                />
              </InputFieldContainer>

              <ButtonContainer>
                <Button
                  disabled={isSubmitting || loading}
                  className="login-button"
                  type="primary"
                  text={isSubmitting ? 'Logging in...' : 'Login'}
                />
              </ButtonContainer>

              <ButtonContainer>
                <Button
                  onClick={closeModal}
                  type="secondary"
                  className="login-button"
                  text={'Proceed without logging in'}
                />
              </ButtonContainer>
            </Form>
          )}
        </Formik>
      );
    }

    default: return null;
  }
};

LoginForm.defaultProps = {
  closeModal: () => null,
};

LoginForm.propTypes = {
  setMode: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  closeModal: PropTypes.func,
};

export default LoginForm;
