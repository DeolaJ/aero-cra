/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import HorList from '../partials/horizontal-list';
import { Button } from './button';

const DeleteTripWrapper = styled.div`
  background: white;
  padding: 2rem;
  max-width: 400px;
  margin: 0 auto;
  width: 100%;
  margin-bottom: 2rem;

  p {
    font-size: 1.25rem;
    line-height: 1.8;
    margin-bottom: 2.5rem;
  }
`;

const DeleteTripDetails = ({
  // details,
  closeModal,
}) => {
  const deleteDetails = () => {
    // Delete details here
  };
  return (
    <DeleteTripWrapper>
      <p>
        Are you sure you want to delete this trip and
        {" it's"}
        details
      </p>
      <HorList spacing={16}>
        <Button
          text="Delete trip"
          type="primary"
          onClick={deleteDetails}
        />
        <Button
          text="Cancel"
          type="default"
          onClick={closeModal}
        />
      </HorList>
    </DeleteTripWrapper>
  );
};

DeleteTripDetails.propTypes = {
  // details: PropTypes.objectOf(PropTypes.string).isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default DeleteTripDetails;
