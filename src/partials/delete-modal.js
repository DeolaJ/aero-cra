import React from 'react';
import PropTypes from 'prop-types';
import ModalWrapper from '../components/modal-wrapper';
import DeleteTripDetails from '../components/delete-trip-details';

const DeleteModal = ({
  tripDetails, closeModal,
}) => (
  <ModalWrapper
    closeModal={closeModal}
  >
    <DeleteTripDetails
      details={tripDetails}
      closeModal={closeModal}
    />
  </ModalWrapper>
);

DeleteModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  tripDetails: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default DeleteModal;
