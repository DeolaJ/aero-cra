/* eslint-disable max-lines */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable max-lines-per-function */
import React from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
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
  firstName: Yup.string().min(1, 'Too Short!').max(50, 'Too Long!').required('Required'),
  lastName: Yup.string().min(1, 'Too Short!').max(50, 'Too Long!').required('Required'),
  phoneNumber: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Too Short!').max(50, 'Too Long!').required('Required'),
  confirmPassword: Yup.string()
    .min(6, 'Too Short!')
    .max(50, 'Too Long!')
    .oneOf([Yup.ref('password'), null], 'Passwords must match!')
    .required('Required'),
});

const SignupForm = ({ setMode, closeModal }) => {
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

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={UserSignUpSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(async () => {
          const data = {
            ...values,
          };
          const response = await signUpUser(dispatch, data);
          setSubmitting(false);
          if (response.error) {
            toast.error(response.error);
            closeModal();
            return;
          }
          toast.success('Signed up successfully');
        }, 1000);
      }}
    >
      {({
        isSubmitting, errors, values, handleChange, handleSubmit,
      }) => (
        <Form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
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
              value={values.firstName || ''}
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
              value={values.lastName || ''}
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
              value={values.email || ''}
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
              name="phoneNumber"
              type="phone"
              value={values.phoneNumber || ''}
              setValue={handleChange}
              error={values.phoneNumber && errors.phoneNumber}
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
              value={values.password || ''}
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
              value={values.confirmPassword || ''}
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
              disabled={isSubmitting || loading}
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
};

SignupForm.defaultProps = {
  closeModal: () => null,
};

SignupForm.propTypes = {
  setMode: PropTypes.func.isRequired,
  closeModal: PropTypes.func,
};

export default SignupForm;
