/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import HorList from '../partials/horizontal-list';
import { Button } from './button';

const DeleteModalWrapper = styled.div`
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

const DeleteModalDetails = ({
  details,
  closeModal,
  message,
  action,
}) => (
  <DeleteModalWrapper>
    <p>{message}</p>
    <HorList spacing={16}>
      <Button
        text="Delete"
        type="primary"
        onClick={action(details.id)}
      />
      <Button
        text="Cancel"
        type="default"
        onClick={closeModal}
      />
    </HorList>
  </DeleteModalWrapper>
);

DeleteModalDetails.propTypes = {
  details: PropTypes.objectOf(PropTypes.string).isRequired,
  closeModal: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

export default DeleteModalDetails;
