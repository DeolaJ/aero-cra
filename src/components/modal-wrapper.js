import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Modal from './modal';
import { Button } from './button';
import Close from '../images/close-black.svg';

const ModalWrapperContainer = styled.div`
  max-width: 1150px;
  width: 94%;
  max-height: 85vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  transition: visibility 800ms,
              opacity 800ms;

  &.open {
    visibility: visible;
    opacity: 1;
  }
`;

const ModalWrapperBody = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  > div {
    flex: 0 0 38%;

    + div {
      margin-left: 8%;
      flex: 0 0 54%;
    }
  }

  .close-icon {
    position: absolute;
    top: -1.5rem;
    right: 0;
  }

  @media (max-width: 768px) {
    display: block;

    > div + div {
      margin-left: 0;
    }

    .close-icon {
      top: -2rem;
      right: -1rem;
    }
  }
`;

const ModalWrapper = ({
  closeModal, children,
}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setOpen(true), 500);
  }, []);

  return (
    <Modal>
      <ModalWrapperContainer
        className={open ? 'open' : null}
      >
        <ModalWrapperBody>
          <Button
            type="icon"
            text="Close Modal"
            className="close-icon"
            iconLink={Close}
            onClick={closeModal}
          />
          {children}
        </ModalWrapperBody>
      </ModalWrapperContainer>
    </Modal>
  );
};

ModalWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default ModalWrapper;
