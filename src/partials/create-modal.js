import React from 'react';
import PropTypes from 'prop-types';
import ModalWrapper from '../components/modal-wrapper';
import CreateModalDetails from '../components/create-details';

const CreateModal = ({
  details, closeModal, message, action, updateData,
}) => (
  <ModalWrapper
    closeModal={closeModal}
  >
    <CreateModalDetails
      details={details}
      message={message}
      action={action}
      updateData={updateData}
      closeModal={closeModal}
    />
  </ModalWrapper>
);

CreateModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  details: PropTypes.objectOf(PropTypes.string).isRequired,
  message: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  updateData: PropTypes.func.isRequired,
};

export default CreateModal;
