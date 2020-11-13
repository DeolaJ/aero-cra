/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import styled from '@emotion/styled';
import HorList from '../partials/horizontal-list';
import { Button } from './button';
import InputField from './input-field';
import THEME from '../constants';

const CheckStatusWrapper = styled.div`
  width: 100%;

  > div {
    width: 100%;

    > div {
      flex: 0 0 50%;
      margin-bottom: 0;
    }
  }
`;

const CheckStatus = () => {
  const [reference, setReference] = useState('');

  const checkbooking = () => {
    // check booking with reference number
  };

  return (
    <CheckStatusWrapper>
      <HorList leftStart spacing={20} wrapList={400} bottom>
        <InputField
          label="Check booking status"
          id="check-status"
          type="text"
          value={reference}
          placeholder="Enter reference number"
          setValue={setReference}
          errorColor={THEME.colors.error.main}
        />
        <Button
          type="secondary"
          text="Check Status"
          onClick={checkbooking}
        />
      </HorList>
    </CheckStatusWrapper>
  );
};

export default CheckStatus;
