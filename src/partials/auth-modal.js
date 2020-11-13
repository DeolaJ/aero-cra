import React from 'react';
import PropTypes from 'prop-types';
import ModalWrapper from '../components/modal-wrapper';
import SignupForm from '../components/sign-up';
import LoginForm from '../components/login';

const AuthModal = ({
  mode, closeModal, setMode, type,
}) => (
  <ModalWrapper
    closeModal={closeModal}
  >
    {
      type === 'nav' && (
        <>
          {
            mode === 'sign-up' ? (
              <SignupForm setMode={setMode} type="nav" />
            ) : (
              <LoginForm setMode={setMode} />
            )
          }
        </>
      )
    }
    {
      type === 'booking' && (
        <SignupForm setMode={setMode} type="booking" closeModal={closeModal} />
      )
    }
  </ModalWrapper>
);

AuthModal.propTypes = {
  mode: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  setMode: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default AuthModal;
