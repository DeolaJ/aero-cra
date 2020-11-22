/* eslint-disable max-lines-per-function */
import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Select from 'react-select';
import isEqual from 'lodash/isEqual';

const DropdownWrapper = styled.div`
  font-size: .75rem;
  line-height: 1rem;
  width: 100%;
  color: #252525;

  > div > div {
    padding: .2rem;
    border-radius: 1px;
  }
`;

const DropdownOption = ({
  setValue, value, placeholder, options,
}) => {
  const defaultValue = {
    value,
    label: typeof value === 'string' ? `${value[0].toUpperCase()}${value.substring(1)}` : value,
  };
  const [dropdownValue, setDropdownValue] = useState(defaultValue);

  const updateFieldControl = useRef((newValue, currentValue) => {
    if (!isEqual(newValue, currentValue)) {
      setValue(newValue);
    }
  });

  useEffect(() => updateFieldControl.current(dropdownValue.value, value), [dropdownValue.value]);

  return (
    <DropdownWrapper>
      <Select
        options={options}
        defaultValue={dropdownValue}
        onChange={setDropdownValue}
        placeholder={placeholder}
      />
    </DropdownWrapper>
  );
};

DropdownOption.defaultProps = {
  placeholder: '',
  value: null,
};

DropdownOption.propTypes = {
  value: PropTypes.oneOfType(
    [PropTypes.string, PropTypes.number, PropTypes.bool],
  ),
  setValue: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.oneOfType(
      [PropTypes.object],
    ),
  ).isRequired,
};

export default DropdownOption;
