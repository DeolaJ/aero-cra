import React from 'react';
import PropTypes from 'prop-types';
import ModalWrapper from '../components/modal-wrapper';
import EditModalDetails from '../components/edit-details';

const EditModal = ({
  details, closeModal, message, action, updateData,
}) => (
  <ModalWrapper
    closeModal={closeModal}
  >
    <EditModalDetails
      details={details}
      message={message}
      action={action}
      updateData={updateData}
      closeModal={closeModal}
    />
  </ModalWrapper>
);

EditModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  details: PropTypes.objectOf(PropTypes.string).isRequired,
  message: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  updateData: PropTypes.func.isRequired,
};

export default EditModal;
