/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import styled from '@emotion/styled';
import Dropdown from '../../partials/dropdown';
import TimePickerOption from '../../partials/time-picker';
import DatePickerOption from '../../partials/date-picker';
import HorList from '../../partials/horizontal-list';
import Counter from '../counter';
import { Button } from '../button';

const FlightBookingsWrapper = styled.div`
  width: 100%;

  > div > div {
    flex: 0 0 33%;
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

const FlightBookings = () => {
  const [count, setCount] = useState(0);
  const [destination, setDestination] = useState('chocolate');
  const [location, setLocation] = useState('chocolate');
  const [date, setDate] = useState(new Date());

  const proceedToBook = () => {
    // if user, route to the booking page
    // if not user, Route to the Booking page and load the signup modal
  };

  return (
    <FlightBookingsWrapper>
      <HorList spacing={20} leftStart wrapList={500}>
        <div>
          <label>
            Travelling from:
          </label>
          <Dropdown
            setValue={setLocation}
            options={[
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' },
            ]}
            value={location}
            placeholder="Select location"
          />
        </div>
        <div>
          <label>
            Travelling to:
          </label>
          <Dropdown
            setValue={setDestination}
            options={[
              { value: 'chocolate', label: 'Chocolate' },
              { value: 'strawberry', label: 'Strawberry' },
              { value: 'vanilla', label: 'Vanilla' },
            ]}
            value={destination}
            placeholder="Select destination"
          />
        </div>
      </HorList>
      <HorList spacing={20} leftStart wrapList={500}>
        <div>
          <label>
            Departure date
          </label>
          <DatePickerOption
            value={date}
            setValue={setDate}
          />
        </div>
        <div>
          <label>
            Departure time
          </label>
          <TimePickerOption
            value={date}
            setValue={setDate}
          />
        </div>
        <div>
          <label>
            Passengers:
          </label>
          <Counter
            count={count}
            setCount={setCount}
          />
        </div>
      </HorList>
      <Button
        type="secondary"
        text="Proceed"
        onClick={proceedToBook}
      />
    </FlightBookingsWrapper>
  );
};

export default FlightBookings;
