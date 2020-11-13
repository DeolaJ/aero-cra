import React from 'react';
import PropTypes from 'prop-types';
import ModalWrapper from '../components/modal-wrapper';
import EditTripDetails from '../components/edit-trip-details';

const EditModal = ({
  tripDetails, closeModal,
}) => (
  <ModalWrapper
    closeModal={closeModal}
  >
    <EditTripDetails
      details={tripDetails}
    />
  </ModalWrapper>
);

EditModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  tripDetails: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default EditModal;
