/* eslint-disable max-lines-per-function */
import React from 'react';
import { useLocation } from 'react-router-dom';
import VehicleBooking from './components/layout/vehicle-booking';

const JetListings = () => {
  const location = useLocation();
  const { jetBookingData } = location.state;
  console.log('jet booking data ', jetBookingData);
  const { jets } = jetBookingData;

  return (
    <VehicleBooking
      bookingData={jetBookingData}
      vehicles={jets}
    />
  );
};

export default JetListings;
