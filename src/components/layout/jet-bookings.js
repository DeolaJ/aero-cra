/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useHistory } from 'react-router-dom';
import HorList from '../../partials/horizontal-list';
import { Button } from '../button';
import Dropdown from '../../partials/dropdown';

const JetBookingWrapper = styled.div`
  width: 100%;

  > div > div {
    flex: 0 0 33%;
  }

  > button {
    margin-top: 2rem;
  }

  label {
    margin-bottom: .5rem;
    display: block;
  }

  .adults {
    flex-basis: auto;
  }

  > * + * {
    margin-top: 1.5rem;
  }

  @media (min-width: 768px) {

    > div > div {
      flex: 0 0 35%;
    }
  }
`;

const JetBooking = () => {
  const [planeType, setPlaneType] = useState('chocolate');
  const [manufacturer, setManufacturer] = useState('chocolate');
  const [model, setModel] = useState('chocolate');
  const history = useHistory();

  const findJet = () => {
    // Find j
    // Route to Jets and pass jetBookingData
    history.push({
      pathname: '/jet-listings',
      state: {
        jetBookingData: {},
      },
    });
  };

  return (
    <JetBookingWrapper>
      <HorList leftStart spacing={20} wrapList={400}>
        <div>
          <label>
            Plane Types
          </label>
          <Dropdown
            setValue={setPlaneType}
            options={[
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' },
            ]}
            value={planeType}
            placeholder="Select plane type"
          />
        </div>
        <div>
          <label>
            Manufacturers
          </label>
          <Dropdown
            setValue={setManufacturer}
            options={[
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' },
            ]}
            value={manufacturer}
            placeholder="Select manufacturer"
          />
        </div>
      </HorList>
      <HorList leftStart spacing={20} wrapList={400}>
        <div>
          <label>
            Models
          </label>
          <Dropdown
            setValue={setModel}
            options={[
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' },
            ]}
            value={model}
            placeholder="Select model"
          />
        </div>
      </HorList>
      <Button
        type="secondary"
        text="Find Jet"
        onClick={findJet}
      />
    </JetBookingWrapper>
  );
};

export default JetBooking;
