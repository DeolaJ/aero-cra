import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import THEME from '../../constants';
import HorList from '../../partials/horizontal-list';

const ContentWrapper = styled.article`
  border: 1px solid rgb(236, 237, 243);
  padding: 2rem;
  margin-bottom: 1.5rem;
  border-radius: .5rem;
  box-shadow: 0 4px 6px rgba(64, 70, 104, .03), 0 10px 15px rgba(64, 70, 104, .05);

  p, h5 {
    margin-top: 0;
  }
`;

const ContentImageWrapper = styled.div`
`;

const ContentTitle = styled.h5`
  color: ${THEME.colors.grey[600]}
`;

const ContentDescription = styled.p`
  color: ${THEME.colors.grey[800]}
`;

const ContentImage = styled.img`
  max-width: 100px;
`;

const ContentBodyWrapper = styled.div`
  padding: 1.5rem;
`;

const TagLabel = styled.div`
  background-color: rgb(225, 239, 254);
  color: rgb(30, 66, 159);
  border-radius: 100px;
  font-size: .75rem;
  font-weight: 500;
  padding: 7px 14px;
  line-height: 16px;
`;

const TripHistoryItem = ({
  busName, imageLink, trip, tripType, departureDate, arrivalDate,
  seatsPaidFor, amountPaid,
}) => (
  <ContentWrapper>
    <HorList>
      <ContentImageWrapper>
        <ContentImage src={imageLink} alt={busName} />
      </ContentImageWrapper>
      <ContentBodyWrapper>
        <ContentTitle>
          {trip}
        </ContentTitle>
        <HorList>
          <ContentDescription>
            {busName}
          </ContentDescription>
          <HorList spacing={20} leftStart>
            <p>
              Departure date:
              {' '}
              {departureDate}
            </p>
            <p>
              Arrival date:
              {' '}
              {arrivalDate}
            </p>
          </HorList>
        </HorList>
        <HorList spacing={10} leftStart>
          <TagLabel>
            {seatsPaidFor}
            {' seats: N'}
            {amountPaid}
          </TagLabel>
          <TagLabel>
            {trip}
          </TagLabel>
          <TagLabel>
            {tripType}
          </TagLabel>
        </HorList>
      </ContentBodyWrapper>
    </HorList>
  </ContentWrapper>
);

TripHistoryItem.propTypes = {
  busName: PropTypes.string.isRequired,
  imageLink: PropTypes.string.isRequired,
  departureDate: PropTypes.instanceOf(Date).isRequired,
  trip: PropTypes.string.isRequired,
  arrivalDate: PropTypes.instanceOf(Date).isRequired,
  tripType: PropTypes.string.isRequired,
  amountPaid: PropTypes.number.isRequired,
  seatsPaidFor: PropTypes.string.isRequired,
};

export default TripHistoryItem;
