import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import THEME from '../../constants';
import HorList from '../../partials/horizontal-list';
import Caret from '../../images/caret.svg';

const ContentWrapper = styled.article`
  border: 1px solid rgb(236, 237, 243);
  padding: 2rem;
  margin-bottom: 1.5rem;
  border-radius: .5rem;

  &:hover {
    box-shadow: 0 4px 6px rgba(64, 70, 104, .03), 0 10px 15px rgba(64, 70, 104, .05);
    cursor: pointer;
  }

  .seat-icon {
    width: 20px;
  }

  p, h5 {
    margin-top: 0;
  }

  ${(props) => (props.active && `
    background: aliceblue;
  `)}
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
  padding: 1rem;
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

const VehicleListItem = ({
  name, imageLink, trip, tripType, totalSeats, availableSeats, selectVehicle,
  active, departureDate, hasAirConditioning, hasPickup, totalAmount,
}) => (
  <ContentWrapper type="button" onClick={selectVehicle} active={active}>
    <HorList>
      <ContentImageWrapper>
        <ContentImage src={imageLink} alt={name} />
      </ContentImageWrapper>
      <ContentBodyWrapper>
        <ContentTitle>
          {name}
        </ContentTitle>
        <HorList>
          <ContentDescription>
            {trip}
          </ContentDescription>
          <HorList spacing={10} leftStart>
            <img className="seat-icon" src={Caret} alt="seats icon" />
            <p>
              {totalSeats}
              {' '}
              seats
            </p>
          </HorList>
        </HorList>
        <HorList>
          <ContentDescription>
            {'Departure: '}
            {departureDate}
          </ContentDescription>
        </HorList>
        <HorList spacing={20} leftStart>
          <TagLabel>
            {availableSeats}
            {' seats available'}
          </TagLabel>
          {
            hasAirConditioning && (
              <TagLabel>
                A/C
              </TagLabel>
            )
          }
          <TagLabel>
            {trip}
          </TagLabel>
          {
            hasPickup && (
              <TagLabel>
                Pick Up
              </TagLabel>
            )
          }
          <TagLabel>
            {tripType}
          </TagLabel>
        </HorList>
      </ContentBodyWrapper>
      <ContentDescription>
        Amount: N
        {totalAmount}
      </ContentDescription>
    </HorList>
  </ContentWrapper>
);

VehicleListItem.propTypes = {
  name: PropTypes.string.isRequired,
  imageLink: PropTypes.string.isRequired,
  totalSeats: PropTypes.number.isRequired,
  trip: PropTypes.string.isRequired,
  availableSeats: PropTypes.number.isRequired,
  tripType: PropTypes.string.isRequired,
  selectVehicle: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  departureDate: PropTypes.string.isRequired,
  hasAirConditioning: PropTypes.bool.isRequired,
  hasPickup: PropTypes.bool.isRequired,
  totalAmount: PropTypes.number.isRequired,
};

export default VehicleListItem;
