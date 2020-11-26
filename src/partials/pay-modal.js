import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import ModalWrapper from '../components/modal-wrapper';
import HorList from './horizontal-list';
import { Button } from '../components/button';

const PayModalWrapper = styled.div`
  max-width: 700px;
  padding: 2rem;
  border-radius: .1rem;
  background: white;
  margin: 0 auto;

  p {
    margin-top: 0;
  }

  &.pay-modal {
    flex: initial;
  }

  button {
    margin-top: 2rem;
  }

  h2, h4 {
    margin-top: 0;
    margin-bottom: .8rem;
  }

  > div + div {
    margin-top: 2rem;
  }
`;

const PayModal = ({
  closeModal, details,
}) => (
  <ModalWrapper
    closeModal={closeModal}
  >
    {console.log(details)}
    <PayModalWrapper className="pay-modal">
      <h2>
        Select Payment
      </h2>
      <p>
        Please select your preferred payment method.
      </p>
      <HorList>
        <div>
          Paystack
        </div>
        <div>
          Flutterwave
        </div>
      </HorList>
      <div>
        <h4>
          Terms and Condition
        </h4>
        <p>
          By proceeding to make payment, you accept the Terms and Conditions of Safe Travels.
        </p>
      </div>
      <Button
        text="Pay"
        type="primary"
        size="large"
      />
    </PayModalWrapper>
  </ModalWrapper>
);

PayModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  details: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default PayModal;
