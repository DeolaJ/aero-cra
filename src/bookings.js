/* eslint-disable max-lines-per-function */
import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useLocation } from 'react-router-dom';
import { Button } from './components/button';
import Body from './components/layout/body';
import Section from './components/section';
import Logo from './images/logo.png';
import VehicleListItem from './components/layout/vehicle-list-item';

const BookingsWrapper = styled.div`

  > section {
    padding-top: 8rem;
    padding-bottom: 10rem;
  }
`;

const VehicleSelectWrapper = styled.div`
  margin: 2rem 0;
`;

const Bookings = () => {
  const location = useLocation();
  const [activeVehicle, setActiveVehicle] = useState(null);
  const { bookingData } = location.state;
  const { buses } = bookingData;

  const proceedToPay = () => {
    // Continue to payment;
  };

  return (
    <Body>
      <BookingsWrapper>
        <Section>
          <h1>Complete your booking</h1>
          <VehicleSelectWrapper>
            <h4>Select a vehicle</h4>
            {
              buses.map((vehicle) => (
                <VehicleListItem
                  key={vehicle.id}
                  name={vehicle.name}
                  trip={`${bookingData.start.name} - ${bookingData.destination.name}`}
                  tripType="one-way"
                  totalSeats={vehicle.capacity}
                  imageLink={Logo}
                  active={activeVehicle === vehicle.id}
                  availableSeats={12}
                  selectVehicle={() => setActiveVehicle(vehicle.id)}
                  totalAmount={bookingData.price}
                  departureDate={bookingData.departureDate.toDateString()}
                  hasAirConditioning={false}
                  hasPickup={false}
                />
              ))
            }
          </VehicleSelectWrapper>
          <Button
            type="secondary"
            text="Proceed to pay"
            size="large"
            disabled={Boolean(activeVehicle)}
            onClick={proceedToPay}
          />
        </Section>
      </BookingsWrapper>
    </Body>
  );
};

export default Bookings;
