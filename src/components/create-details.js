/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import { Formik } from 'formik';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import InputField from './input-field';
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

const CreateModalDetails = ({ details, message, action }) => {
  let initialValues;
  let initialValuesList;

  const setInitialValues = () => {
    const initValues = {};
    const detailsList = Object.keys(details);

    for (let i = 0; i < detailsList.length; i += 1) {
      initValues[detailsList[i]] = '';
    }

    initialValues = initValues;
    initialValuesList = detailsList;
  };

  setInitialValues();

  const CreateSchema = () => {
    const initValues = {};
    const detailsList = Object.keys(details);

    for (let i = 0; i < detailsList.length; i += 1) {
      initValues[detailsList[i]] = Yup.string().required('Required');
    }

    return Yup.object().shape({
      ...initValues,
    });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={CreateSchema()}
      onSubmit={(values, { setSubmitting }) => {
        action(values);
        setSubmitting(false);
      }}
    >
      {({
        isSubmitting, errors, values, handleChange, handleSubmit,
      }) => (
        <Form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
          <h2>{message}</h2>
          {
            initialValuesList && initialValuesList.map((detail) => (
              <InputFieldContainer key={detail}>
                <InputField
                  label={detail}
                  id={detail}
                  name={detail}
                  type={'text'}
                  value={values[detail]}
                  setValue={handleChange}
                  error={errors[detail]}
                  errorColor={THEME.colors.error.main}
                />
              </InputFieldContainer>
            ))
          }

          <ButtonContainer>
            <Button
              disabled={isSubmitting}
              className="update-button"
              type="secondary"
              text={isSubmitting ? 'Adding...' : 'Create'}
            />
          </ButtonContainer>
        </Form>
      )}
    </Formik>
  );
};

CreateModalDetails.propTypes = {
  details: PropTypes.objectOf(PropTypes.string).isRequired,
  message: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

export default CreateModalDetails;
