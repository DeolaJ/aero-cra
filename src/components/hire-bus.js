/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import styled from '@emotion/styled';
import Dropdown from '../partials/dropdown';
import DatePickerOption from '../partials/date-picker';
import HorList from '../partials/horizontal-list';
import { ButtonText, Button } from './button';
import THEME from '../constants';

const HireBusWrapper = styled.div`
  width: 100%;

  > button {
    margin-top: 2rem;
  }
`;

const HireBusButton = styled(ButtonText)`
  box-shadow: none;
  text-transform: uppercase;
  border-radius: 1px;
  font-size: .875rem;

  ${(props) => (props.active ? `
    color: ${THEME.colors.brand.rose};
    box-shadow: inset 0 3px 5px rgba(0,0,0,.125);

    &:hover {
      box-shadow: inset 0 3px 5px rgba(0,0,0,.125);
    }
  ` : `
    color: #252525;
    border: 1px solid #C4C4C4;;
  `)}
`;

const HireBusForm = styled.div`
  margin-top: 1.5rem;
  width: 100%;

  > div > div {
    flex: 0 0 35%;
  }

  label {
    margin-bottom: .5rem;
    display: block;
  }

  .retain-bus {
    margin: 0;
  }

  .adults {
    flex-basis: auto;
  }

  > * + * {
    margin-top: 1.5rem;
  }
`;

const HireBus = () => {
  const [trip, setTrip] = useState('one-way');
  const [arrivalTerminal, setArrivalTerminal] = useState('chocolate');
  const [departureTerminal, setDepartureTerminal] = useState('chocolate');
  const [retainBus, setRetainBus] = useState(false);
  const [arrivalDate, setArrivalDate] = useState(new Date());
  const [departureDate, setDepartureDate] = useState(new Date());

  const proceedToBook = () => {
    // if user, route to the booking page
    // if not user, Route to the Booking page and load the signup modal
  };

  return (
    <HireBusWrapper>
      <HorList leftStart spacing={16}>
        <HireBusButton
          type="default"
          onClick={() => (setTrip('one-way'))}
          active={trip === 'one-way'}
        >
          One way
        </HireBusButton>
        <HireBusButton
          type="default"
          onClick={() => (setTrip('round-trip'))}
          active={trip === 'round-trip'}
        >
          Round trip
        </HireBusButton>
      </HorList>
      <HireBusForm>
        <HorList leftStart spacing={20} wrapList={400}>
          <div>
            <label>
              Hire from
            </label>
            <Dropdown
              setValue={setDepartureTerminal}
              options={[
                { value: 'chocolate', label: 'Chocolate' },
                { value: 'strawberry', label: 'Strawberry' },
                { value: 'vanilla', label: 'Vanilla' },
              ]}
              value={departureTerminal}
              placeholder="Enter departure point"
            />
          </div>
          <div>
            <label>
              Hire Destination:
            </label>
            <Dropdown
              setValue={setArrivalTerminal}
              options={[
                { value: 'chocolate', label: 'Chocolate' },
                { value: 'strawberry', label: 'Strawberry' },
                { value: 'vanilla', label: 'Vanilla' },
              ]}
              value={arrivalTerminal}
              placeholder="Enter Destination"
            />
          </div>
        </HorList>
        <HorList leftStart spacing={20} wrapList={400}>
          <div>
            <label>
              Departing on:
            </label>
            <DatePickerOption
              value={departureDate}
              setValue={setDepartureDate}
            />
          </div>
          {
            trip === 'round-trip' && (
              <div>
                <label>
                  Return:
                </label>
                <DatePickerOption
                  value={arrivalDate}
                  setValue={setArrivalDate}
                />
              </div>
            )
          }
          <HorList leftStart spacing={20}>
            <input
              type="checkbox"
              placeholder="Use bus for the night"
              value={retainBus}
              onChange={() => (setRetainBus(!retainBus))}
            />
            <label className="retain-bus">
              Retain bus overnight
            </label>
          </HorList>
        </HorList>
      </HireBusForm>
      <Button
        type="secondary"
        text="Proceed"
        onClick={proceedToBook}
      />
    </HireBusWrapper>
  );
};

export default HireBus;
