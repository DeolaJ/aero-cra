/* eslint-disable max-lines-per-function */
import React from 'react';
import styled from '@emotion/styled';
import TripHistoryItem from './trip-history-item';
import Section from '../section';
import Logo from '../../images/logo.png';
import THEME from '../../constants';

const UserContentWrapper = styled.div`
  > section {
    padding-top: 8rem;
    padding-bottom: 10rem;
  }

  h4 {
    text-decoration: underline;
  }
`;

const UserTitle = styled.h2`
  background-color: ${THEME.colors.brand.beige};
  padding: 2rem 1rem;
  color: #352525;
`;

const UserContent = (
// {
//   user,
// }
) => {
  const tripHistory = [
    {
      busName: 'Hilux',
      imageLink: Logo,
      trip: 'Lagos to Asaba',
      tripType: 'bus',
      departureDate: '11/12/2020 12:00',
      arrivalDate: '12/12/2020 10:00',
      seatsPaidFor: '2',
      amountPaid: 20000,
    },
    {
      busName: 'Hilux',
      imageLink: Logo,
      trip: 'Lagos to Asaba',
      tripType: 'bus',
      departureDate: '11/12/2020 12:00',
      arrivalDate: '12/12/2020 10:00',
      seatsPaidFor: '2',
      amountPaid: 12350,
    },
  ];

  return (
    <UserContentWrapper>
      <Section>
        <UserTitle>
          Hello user
        </UserTitle>
        <h4>
          Trip History
        </h4>
        <div>
          {
            tripHistory.map((trip) => (
              <TripHistoryItem
                key={`${trip.busName}-${trip.amountPaid}`}
                busName={trip.busName}
                imageLink={trip.imageLink}
                trip={trip.trip}
                tripType={trip.tripType}
                departureDate={trip.departureDate}
                arrivalDate={trip.arrivalDate}
                seatsPaidFor={trip.seatsPaidFor}
                amountPaid={trip.amountPaid}
              />
            ))
          }
        </div>
      </Section>
    </UserContentWrapper>
  );
};

UserContent.propTypes = {
  // user: PropTypes.object,
};

export default UserContent;
