import React from 'react';
import PropTypes from 'prop-types';
import ModalWrapper from '../components/modal-wrapper';
import CreateModalDetails from '../components/create-details';

const CreateModal = ({
  details, closeModal, message, action,
}) => (
  <ModalWrapper
    closeModal={closeModal}
  >
    <CreateModalDetails
      details={details}
      message={message}
      action={action}
    />
  </ModalWrapper>
);

CreateModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  details: PropTypes.objectOf(PropTypes.string).isRequired,
  message: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

export default CreateModal;
