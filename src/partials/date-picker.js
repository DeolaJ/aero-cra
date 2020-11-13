/* eslint-disable no-underscore-dangle */
/* eslint-disable max-lines-per-function */
import React, { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Datetime from 'react-datetime';
import isEqual from 'lodash/isEqual';
import isEmpty from 'lodash/isEmpty';

const DatePickerWrapper = styled.div`
  border: 1px solid #C4C4C4;
  border-radius: 1px;
  padding: .625rem 1rem;
  font-size: .75rem;
  line-height: 1rem;
  color: #252525;

  input {
    border: none;
    outline: none;
  }
`;

const DatePickerOption = ({
  setValue, value,
}) => {
  const [dateValue, setDateValue] = useState(value);

  const updateFieldControl = useRef((newValue, currentValue) => {
    if (!isEqual(currentValue, newValue._d)) {
      setValue(newValue._d);
    }
  });

  useEffect(() => {
    if (!isEmpty(dateValue)) {
      updateFieldControl.current(dateValue, value);
    }
  }, [dateValue]);

  useEffect(() => {
    if (!isEqual(value, dateValue)) {
      setDateValue(value);
    }
  }, [value]);

  return (
    <DatePickerWrapper>
      <Datetime
        onChange={setDateValue}
        value={dateValue}
        timeFormat={false}
        closeOnSelect
      />
    </DatePickerWrapper>
  );
};

DatePickerOption.propTypes = {
  value: PropTypes.instanceOf(Date).isRequired,
  setValue: PropTypes.func.isRequired,
};

export default DatePickerOption;
