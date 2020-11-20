/* eslint-disable max-lines-per-function */
import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import THEME from '../constants';

const InputFieldWrapper = styled.div`
  margin-bottom: 1.5rem;
`;

const InputLabel = styled.label`
  font-size: .875rem;
  font-weight: 500;
  display: block;
  margin-bottom: .325rem;
  text-transform: capitalize;
`;

const InputFieldError = styled.label`
  font-size: .75rem;
  color: ${(props) => (props.color)}
`;

const InputWrapper = styled.div`
  .input-value {
    padding: .8rem 1.325rem;
    width: 100%;
    background: transparent;
    line-height: 16px;
    color: #3F3E3E;
    border-radius: 2px;
    font-weight: 400;
    font-size: 12px;
    border: 1px solid #C4C4C4;
    border-radius: 1px;
    -moz-appearance: textfield;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &.error {
      border-color: ${THEME.colors.error.main};
      box-shadodw: 0 0 1px 0 ${THEME.colors.error.main};
    }
  }
`;

const InputField = ({
  setValue, value, placeholder, label, error, errorColor, id, name, type,
}) => (
  <InputFieldWrapper>
    <InputLabel htmlFor={id}>
      {label}
    </InputLabel>
    <InputWrapper>
      <input
        className={error.length > 1 ? 'input-value error' : 'input-value'}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={setValue}
        onBlur={setValue}
        id={id}
        name={name}
      />
    </InputWrapper>
    {
      error && (
        <InputFieldError color={errorColor}>
          {error}
        </InputFieldError>
      )
    }
  </InputFieldWrapper>
);

InputField.defaultProps = {
  placeholder: '',
  error: '',
  type: '',
};

InputField.propTypes = {
  value: PropTypes.oneOfType(
    [PropTypes.string, PropTypes.number, PropTypes.bool],
  ).isRequired,
  setValue: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  errorColor: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default InputField;
