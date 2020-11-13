/* eslint-disable max-lines-per-function */
import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';
import isEqual from 'lodash/isEqual';

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
  }
`;

const InputOption = ({
  setValue, value, placeholder, label, error, errorColor,
}) => {
  const [inputValue, setinputValue] = useState(value);

  const updateFieldControl = useRef(debounce((newValue, currentValue) => {
    if (!isEqual(currentValue, newValue)) {
      setValue(newValue);
    }
  }, 800));

  useEffect(() => updateFieldControl.current(inputValue, value), [inputValue]);

  return (
    <InputFieldWrapper>
      <InputLabel>
        {label}
      </InputLabel>
      <InputWrapper>
        <input
          className="input-value"
          type="text"
          value={inputValue}
          placeholder={placeholder}
          onChange={(e) => setinputValue(e.target.value)}
          onBlur={(e) => setinputValue(e.target.value)}
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
};

InputOption.defaultProps = {
  placeholder: '',
  error: '',
};

InputOption.propTypes = {
  value: PropTypes.oneOfType(
    [PropTypes.string, PropTypes.number, PropTypes.bool],
  ).isRequired,
  setValue: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  errorColor: PropTypes.string.isRequired,
};

export default InputOption;
