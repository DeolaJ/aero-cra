/* eslint-disable max-lines-per-function */
import React from 'react';
import { useLocation } from 'react-router-dom';
import VehicleBooking from './components/layout/vehicle-booking';

const Bookings = () => {
  const location = useLocation();
  const { bookingData } = location.state;
  const { buses } = bookingData;

  return (
    <VehicleBooking
      bookingData={bookingData}
      vehicles={buses}
    />
  );
};

export default Bookings;
