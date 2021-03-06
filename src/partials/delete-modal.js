import React from 'react';
import PropTypes from 'prop-types';
import ModalWrapper from '../components/modal-wrapper';
import DeleteModalDetails from '../components/delete-details';

const DeleteModal = ({
  details, closeModal, message, action, updateData,
}) => (
  <ModalWrapper
    closeModal={closeModal}
  >
    <DeleteModalDetails
      details={details}
      closeModal={closeModal}
      message={message}
      action={action}
      updateData={updateData}
    />
  </ModalWrapper>
);

DeleteModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  details: PropTypes.objectOf(PropTypes.string).isRequired,
  message: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  updateData: PropTypes.func.isRequired,
};

export default DeleteModal;
