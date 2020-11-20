/* eslint-disable max-lines */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable max-lines-per-function */
import React from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import { signUpUser, useAuthState, useAuthDispatch } from '../auth';

import InputField from './input-field-wrapper';
import { Button } from './button';
import PasswordStrength from './password-strength';
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

  .signup-button {
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

const UserSignUpSchema = Yup.object().shape({
  firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  phone: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Too Short!').max(50, 'Too Long!').required('Required'),
  confirmPassword: Yup.string()
    .min(6, 'Too Short!')
    .max(50, 'Too Long!')
    .oneOf([Yup.ref('password'), null], 'Passwords must match!')
    .required('Required'),
});

const SignupForm = ({ setMode, type, closeModal }) => {
  const history = useHistory();
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  };
  const dispatch = useAuthDispatch();
  const { loading, errorMessage } = useAuthState();

  switch (type) {
    case 'nav': {
      return (
        <Formik
          initialValues={initialValues}
          validationSchema={UserSignUpSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(async () => {
              // console.log(JSON.stringify(values, null, 2));
              const data = {
                ...values,
              };
              const response = await signUpUser(dispatch, data);
              if (!response.user) return;
              history.replace('/dashboard');
              setSubmitting(false);
            }, 1000);
          }}
        >
          {({
            isSubmitting, errors, values, handleChange, submitForm,
          }) => (
            <Form>
              <h2>
                Create an account
              </h2>
              {
                errorMessage ? (
                  <p styles={{ color: THEME.colors.error.main }}>
                    {errorMessage}
                  </p>
                ) : null
              }
              <InputFieldContainer>
                <InputField
                  label="First name"
                  placeholder="Enter first name"
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={values.firstName}
                  setValue={handleChange}
                  error={values.firstName && errors.firstName}
                  errorColor={THEME.colors.error.main}
                />
              </InputFieldContainer>

              <InputFieldContainer>
                <InputField
                  label="Last name"
                  placeholder="Enter last name"
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={values.lastName}
                  setValue={handleChange}
                  error={values.lastName && errors.lastName}
                  errorColor={THEME.colors.error.main}
                />
              </InputFieldContainer>

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
                  label="phone"
                  placeholder="Enter phone number"
                  id="phone"
                  name="phone"
                  type="phone"
                  value={values.phone}
                  setValue={handleChange}
                  error={values.phone && errors.phone}
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

              <InputFieldContainer>
                <InputField
                  label="confirm password"
                  placeholder="Enter confirm password"
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={values.confirmPassword}
                  setValue={handleChange}
                  error={values.confirmPassword && errors.confirmPassword}
                  errorColor={THEME.colors.error.main}
                />
              </InputFieldContainer>

              {
                values.password && (
                  <InputFieldContainer>
                    <PasswordStrength password={values.password} />
                  </InputFieldContainer>
                )
              }

              <ButtonContainer>
                <Button
                  disabled={isSubmitting && loading}
                  onClick={submitForm}
                  type="primary"
                  className="signup-button"
                  text={isSubmitting ? 'Signing up...' : 'Sign up'}
                />
              </ButtonContainer>

              <p>
                Have have an account? Click
                {' '}
                <Button
                  text="here"
                  type="default"
                  onClick={() => setMode((currentStatus) => ({
                    ...currentStatus,
                    open: true,
                    mode: 'login',
                  }))}
                />
                {' '}
                to login
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
          validationSchema={UserSignUpSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(async () => {
              // console.log(JSON.stringify(values, null, 2));
              const data = {
                ...values,
              };
              const response = await signUpUser(dispatch, data);
              if (response.user) {
                closeModal();
              }
              setSubmitting(false);
            }, 1000);
          }}
        >
          {({
            isSubmitting, errors, values, handleChange, submitForm,
          }) => (
            <Form>
              <h2>
                Sign up to continue your booking!
              </h2>
              {
                errorMessage ? (
                  <p styles={{ color: THEME.colors.error.main }}>
                    {errorMessage}
                  </p>
                ) : null
              }
              <InputFieldContainer>
                <InputField
                  label="First name"
                  id="firstName"
                  name="firstName"
                  type="text"
                  value={values.firstName}
                  setValue={handleChange}
                  error={errors.firstName}
                  errorColor={THEME.colors.error.main}
                />
              </InputFieldContainer>

              <InputFieldContainer>
                <InputField
                  label="last name"
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={values.lastName}
                  setValue={handleChange}
                  error={errors.lastName}
                  errorColor={THEME.colors.error.main}
                />
              </InputFieldContainer>

              <InputFieldContainer>
                <InputField
                  label="email"
                  id="email"
                  name="email"
                  type="email"
                  value={values.email}
                  setValue={handleChange}
                  error={errors.email}
                  errorColor={THEME.colors.error.main}
                />
              </InputFieldContainer>

              <InputFieldContainer>
                <InputField
                  label="phone"
                  id="phone"
                  name="phone"
                  type="phone"
                  value={values.phone}
                  setValue={handleChange}
                  error={errors.phone}
                  errorColor={THEME.colors.error.main}
                />
              </InputFieldContainer>

              <InputFieldContainer>
                <InputField
                  label="password"
                  id="password"
                  name="password"
                  type="password"
                  value={values.password}
                  setValue={handleChange}
                  error={errors.password}
                  errorColor={THEME.colors.error.main}
                />
              </InputFieldContainer>

              <InputFieldContainer>
                <InputField
                  label="confirm password"
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={values.confirmPassword}
                  setValue={handleChange}
                  error={errors.confirmPassword}
                  errorColor={THEME.colors.error.main}
                />
              </InputFieldContainer>

              {
                values.password && (
                  <InputFieldContainer>
                    <PasswordStrength password={values.password} />
                  </InputFieldContainer>
                )
              }

              <ButtonContainer>
                <Button
                  disabled={isSubmitting && loading}
                  onClick={submitForm}
                  type="primary"
                  className="signup-button"
                  text={isSubmitting ? 'Signing up...' : 'Sign up'}
                />
              </ButtonContainer>

              <ButtonContainer>
                <Button
                  onClick={closeModal}
                  type="secondary"
                  className="signup-button"
                  text={'Proceed without creating an account'}
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

SignupForm.defaultProps = {
  closeModal: () => null,
};

SignupForm.propTypes = {
  setMode: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  closeModal: PropTypes.func,
};

export default SignupForm;
