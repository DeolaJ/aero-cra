/* eslint-disable max-lines-per-function */
import React, { useState, useCallback, useEffect } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import PropTypes from 'prop-types';
import InputField from './input-field';

const InputFieldWrapper = ({
  setValue, value, placeholder, label, error, errorColor, id, name,
  type, regular,
}) => {
  switch (regular) {
    case true: {
      return (
        <InputField
          label={label}
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          setValue={setValue}
          errorColor={errorColor}
        />
      );
    }

    case false: {
      const [inputValue, setInputValue] = useState(value);

      useEffect(() => {
        if (value) {
          setInputValue(value);
        } else {
          setInputValue('');
        }
      }, [value]);

      const debouncedHandleOnChange = useDebouncedCallback((event) => {
        if (setValue) {
          setValue(event);
        }
      }, 800);

      const handleOnChange = useCallback((event) => {
        event.persist();

        const newValue = event.currentTarget.value;
        setInputValue(newValue);
        debouncedHandleOnChange.callback(event);
      }, []);

      return (
        <InputField
          label={label}
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={inputValue}
          setValue={handleOnChange}
          error={error}
          errorColor={errorColor}
        />
      );
    }

    default: return null;
  }
};

InputFieldWrapper.defaultProps = {
  placeholder: '',
  error: '',
  type: '',
  regular: false,
};

InputFieldWrapper.propTypes = {
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
  regular: PropTypes.bool,
};

export default InputFieldWrapper;
