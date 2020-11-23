import React, { useState } from 'react';
import styled from '@emotion/styled';
import Section from '../section';
import 'react-datetime/css/react-datetime.css';
import HorList from '../../partials/horizontal-list';
import { ButtonText } from '../button';
import FlightBookings from './flight-bookings';
import BusBookings from './bus-bookings';

const BookingWrapper = styled.div`
  margin-top: 3rem;
  padding: 0;

  > div {
    margin-bottom: 1.5rem;
    justify-content: center;
  }

  > section {
    padding: 2rem 1rem;
  }

  @media (min-width: 768px) {
    margin-top: -13rem;
    padding: 4rem;

    > section {
      padding: 2rem;
      box-shadow: 0 25px 50px rgba(64, 70, 104, .1);
    }
  }

  h3 {
    margin-top: 0;
  }
`;

const SectionButton = styled(ButtonText)`
  text-transform: uppercase;
  font-weight: 700;

  ${(props) => (props.active && `
    opacity: .8;
  `)}

  @media (min-width: 768px) {
    font-size: 1.25rem;
    padding: 1rem 2rem;
  }
`;

const Booking = () => {
  const [section, setSection] = useState('bus');

  return (
    <BookingWrapper className="bookings">
      <HorList spacing={20}>
        <SectionButton
          type={section === 'flight' ? 'primary' : 'secondary'}
          onClick={() => (setSection('flight'))}
          active={section === 'flight'}
        >
          Book flights
        </SectionButton>
        <SectionButton
          type={section === 'bus' ? 'primary' : 'secondary'}
          onClick={() => (setSection('bus'))}
          active={section === 'bus'}
        >
          Book a bus
        </SectionButton>
      </HorList>
      <Section
        backgroundColor="white"
      >
        <h3>
          Book your next remote journey
        </h3>
        {
          section === 'flight' && (
            <FlightBookings />
          )
        }
        {
          section === 'bus' && (
            <BusBookings />
          )
        }
      </Section>
    </BookingWrapper>
  );
};

export default Booking;
