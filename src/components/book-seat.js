/* eslint-disable max-lines-per-function */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Dropdown from '../partials/dropdown';
import DatePickerOption from '../partials/date-picker';
import HorList from '../partials/horizontal-list';
import { ButtonText, Button } from './button';
import THEME from '../constants';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const BookingSeatWrapper = styled.div`
  width: 100%;

  > button {
    margin-top: 2rem;
  }
`;

const BookSeatButton = styled(ButtonText)`
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

const BookingSeatForm = styled.div`
  margin-top: 1.5rem;
  width: 100%;

  > div > div {
    flex: 0 0 35%;
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
`;

const Booking = () => {
  const [trip, setTrip] = useState('one-way');
  const [arrivalTerminal, setArrivalTerminal] = useState(null);
  const [departureTerminal, setDepartureTerminal] = useState(null);
  const [terminals, setTerminals] = useState([]);
  const [destination, setDestination] = useState([]);
  const [seatCount, setSeatCount] = useState(1);
  const [arrivalDate, setArrivalDate] = useState(new Date());
  const [departureDate, setDepartureDate] = useState(new Date());

  const proceedToBook = () => {
    // if user, route to the booking page
    // if not user, Route to the Booking page and load the signup modal
  };

  useEffect(() => {
    if (!departureTerminal) return;
    const getTrip = async (placeId) => {
      const response = await fetch(`${BASE_URL}/trip/${placeId}`);
      let trips = await response.json();
      trips = trips.data.map((tripData) => ({
        ...tripData,
        label: tripData.destination.name,
        value: tripData.destination.id,
      }));
      setDestination(trips);
    };
    getTrip(departureTerminal);
  }, [departureTerminal]);

  useEffect(() => {
    async function getPlaces() {
      const response = await fetch(`${BASE_URL}/place`);
      let places = await response.json();
      places = places.data.map((place) => ({
        label: place.name,
        value: place.id,
      }));
      setTerminals(places);
      setDepartureTerminal(places[0].value);
    }
    getPlaces();
  }, []);

  return (
    <BookingSeatWrapper>
      <HorList leftStart spacing={16}>
        <BookSeatButton
          type="default"
          onClick={() => (setTrip('one-way'))}
          active={trip === 'one-way'}
        >
          One way
        </BookSeatButton>
        <BookSeatButton
          type="default"
          onClick={() => (setTrip('round-trip'))}
          active={trip === 'round-trip'}
        >
          Round trip
        </BookSeatButton>
      </HorList>
      <BookingSeatForm>
        <HorList spacing={20} leftStart wrapList={400}>
          <div>
            <label>
              Travelling from:
            </label>
            <Dropdown
              setValue={setDepartureTerminal}
              options={terminals}
              value={departureTerminal}
              placeholder="Select departure terminal"
            />
          </div>
          <div>
            <label>
              Travelling to
            </label>
            <Dropdown
              setValue={setArrivalTerminal}
              options={destination}
              value={arrivalTerminal}
              placeholder="Select arrival terminal"
            />
          </div>
        </HorList>
        <HorList spacing={20} leftStart wrapList={400}>
          <div>
            <label>
              Departure date
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
                  Arrival Date
                </label>
                <DatePickerOption
                  value={arrivalDate}
                  setValue={setArrivalDate}
                />
              </div>
            )
          }
          <div className="adults">
            <label>
              Adults
            </label>
            <Dropdown
              setValue={setSeatCount}
              options={[
                { value: '1', label: 'Chocolate' },
                { value: '2', label: 'Strawberry' },
                { value: '3', label: 'Vanilla' },
              ]}
              value={seatCount}
            />
          </div>
        </HorList>
      </BookingSeatForm>
      <Button
        type="secondary"
        text="Proceed"
        onClick={proceedToBook}
      />
    </BookingSeatWrapper>
  );
};

export default Booking;
