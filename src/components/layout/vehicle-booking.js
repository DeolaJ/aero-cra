/* eslint-disable max-lines-per-function */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Button } from '../button';
import Body from './body';
import Section from '../section';
import Logo from '../../images/logo.png';
import VehicleListItem from './vehicle-list-item';

const VehicleBookingsWrapper = styled.div`

  > section {
    padding-top: 8rem;
    padding-bottom: 10rem;
  }
`;

const VehicleSelectWrapper = styled.div`
  margin: 2rem 0;
`;

const VehicleBooking = ({
  vehicles, bookingData,
}) => {
  const [activeVehicle, setActiveVehicle] = useState(null);

  const proceedToCheckout = () => {
    // Continue to checkout;
  };

  return (
    <Body>
      <VehicleBookingsWrapper>
        <Section>
          <h1>Complete your booking</h1>
          <VehicleSelectWrapper>
            <h4>Select a vehicle</h4>
            {
              vehicles.map((vehicle) => (
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
            onClick={proceedToCheckout}
          />
        </Section>
      </VehicleBookingsWrapper>
    </Body>
  );
};

VehicleBooking.propTypes = {
  vehicles: PropTypes.arrayOf(PropTypes.object).isRequired,
  bookingData: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default VehicleBooking;
