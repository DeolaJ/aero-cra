/* eslint-disable no-underscore-dangle */
/* eslint-disable max-lines-per-function */
import React, { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Datetime from 'react-datetime';
import debounce from 'lodash/debounce';
import isEqual from 'lodash/isEqual';
import isEmpty from 'lodash/isEmpty';

const TimePickerWrapper = styled.div`
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

const TimePickerOption = ({
  setValue, value,
}) => {
  const [timeValue, setTimeValue] = useState(value);

  const updateFieldControl = useRef(debounce((newValue, currentValue) => {
    if (!isEqual(newValue._d, currentValue)) {
      setValue(newValue._d);
    }
  }, 800));

  useEffect(() => {
    if (!isEmpty(timeValue)) {
      updateFieldControl.current(timeValue, value);
    }
  }, [timeValue]);

  useEffect(() => {
    if (!isEqual(value, timeValue)) {
      setTimeValue(value);
    }
  }, [value]);

  return (
    <TimePickerWrapper>
      <Datetime
        onChange={setTimeValue}
        value={timeValue}
        dateFormat={false}
      />
    </TimePickerWrapper>
  );
};

TimePickerOption.propTypes = {
  value: PropTypes.instanceOf(Date).isRequired,
  setValue: PropTypes.func.isRequired,
};

export default TimePickerOption;
