/* eslint-disable max-len */
/* eslint-disable no-undef */
import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import styled from '@emotion/styled';

const ModalWrapper = styled.div`
  position: fixed;
  background-color: rgba(65, 65, 65, .6);
  z-index: 1005;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  overflow: auto;

  > div {
    visibility: hidden;
    opacity: 0;
  }
`;

const Modal = ({ children }) => {
  const elRef = useRef(null);

  if (!elRef.current && process.browser && typeof window !== 'undefined') {
    const div = document.createElement('div');
    elRef.current = div;
  }

  useEffect(() => {
    let modalRoot;
    if (process.browser) {
      modalRoot = document.body;
      modalRoot.appendChild(elRef.current);
    }
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return elRef.current ? createPortal(<ModalWrapper>{children}</ModalWrapper>, elRef.current) : null;
};

export default Modal;
