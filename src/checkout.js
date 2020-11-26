/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable max-lines-per-function */
import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import { Button } from './components/button';
import Body from './components/layout/body';
import Section from './components/section';
import InputField from './components/input-field-wrapper';
import Dropdown from './partials/dropdown';
import HorList from './partials/horizontal-list';
import THEME from './constants';
import PayModal from './partials/pay-modal';

const CheckoutWrapper = styled.div`

  > section {
    padding-top: 8rem;

    > div {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
  
      @media (min-width: 768px) {
        flex-direction: row;
      }
    }
  }
`;

const LeftSection = styled.article`
  padding: 1rem;
  background: #f2f2f2;

  button {
    margin-top: 2.5rem;
  }
  
  @media (min-width: 768px) {
    flex: 0 0 70%;
  }
`;

const RightSection = styled.aside`
  padding: 1rem;

  @media (min-width: 768px) {
    flex: 0 0 26%;
    margin-left: 4%;
  }
`;

const PassengerForm = styled.div`

  > div > div {
    flex: 0 0 45%;
  }

  label {
    display: block;
    font-size: .875rem;
    font-weight: 500;
    display: block;
    margin-bottom: .325rem;
    text-transform: capitalize;
  }

  + div {
    margin-top: 1.5rem;
  }
`;

const ContactDetailsWrapper = styled.div`

  > div > div {
    flex: 0 0 45%;
  }

  > div + div {
    margin-top: 1rem;
  }
`;

const CheckoutHeader = styled.h3`
  border-bottom: 1px solid rgba(0, 0, 0, .1);
`;

const Checkout = () => {
  // const location = useLocation();
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [nextofkin, setNextofkin] = useState('');
  const [nextofkinPhone, setNextofkinPhone] = useState('');
  const [gender, setGender] = useState({
    1: 'male',
  });
  const [fullname, setFullname] = useState({
    1: '',
  });
  const checkoutData = {
    trip: 'Lagos to Asaba',
    departureDate: '12 PM, Saturday, Novmeber 28th, 2020',
    vehicle: {
      name: 'Hilux',
    },
    totalCost: 'N12,000',
    seats: [1, 2, 3, 4],
  };
  // const { checkoutData } = location.state;
  const { seats } = checkoutData;

  const closeModal = () => {
    setOpenModal(false);
  };

  const payNow = () => {
    setOpenModal(true);
  };

  return (
    <Body>
      <CheckoutWrapper>
        <Section>
          <LeftSection>
            <CheckoutHeader>
              Passenger Details
            </CheckoutHeader>
            {
              seats.map((passenger, index) => (
                <PassengerForm key={passenger}>
                  {
                    (index === 0) ? (
                      <>
                        <h4>
                          Adult
                          {index + 1}
                        </h4>
                        <p>
                          Please enter name as they appear on identification document
                        </p>
                      </>
                    ) : (
                      <h4>
                        Passenger
                        {` #${index + 1} `}
                        Details
                      </h4>
                    )
                  }
                  <HorList spacing={32} leftStart wrapList={400} top>
                    <div>
                      <InputField
                        regular
                        label="Full name"
                        placeholder="Enter full name"
                        id="full_name"
                        name="full_name"
                        type="text"
                        value={fullname[index + 1] || ''}
                        setValue={(e) => {
                          const newFullname = {};
                          newFullname[`${index}`] = e.target.value;
                          setFullname((oldFullname) => ({
                            ...oldFullname,
                            newFullname,
                          }));
                        }}
                        errorColor={THEME.colors.error.main}
                      />
                    </div>
                    <div className="gender">
                      <label>
                        Gender
                      </label>
                      <Dropdown
                        setValue={(e) => {
                          const newGender = {};
                          newGender[`${index}`] = e.target.value;
                          setGender((oldGender) => ({
                            ...oldGender,
                            newGender,
                          }));
                        }}
                        options={[
                          { value: 'male', label: 'Male' },
                          { value: 'female', label: 'Female' },
                          { value: 'other', label: 'Prefer not to say' },
                        ]}
                        value={gender[index + 1] || 'male'}
                        placeholder="Select Gender"
                      />
                    </div>
                  </HorList>
                </PassengerForm>
              ))
            }
            <ContactDetailsWrapper>
              <h4>Contact details</h4>
              <p>
                Please enter name as they appear on identification document
              </p>
              <HorList spacing={32} leftStart wrapList={400}>
                <div>
                  <InputField
                    regular
                    label="Email Address"
                    placeholder="Enter email address"
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    setValue={setEmail}
                    errorColor={THEME.colors.error.main}
                  />
                </div>
                <div>
                  <InputField
                    regular
                    label="Mobile Phone Number"
                    placeholder="Enter phone number"
                    id="phone"
                    name="phone"
                    type="text"
                    value={phone}
                    setValue={setPhone}
                    errorColor={THEME.colors.error.main}
                  />
                </div>
              </HorList>
              <HorList spacing={32} leftStart wrapList={400}>
                <div>
                  <InputField
                    regular
                    label="Next of Kin's Name"
                    placeholder="Enter next of kin"
                    id="nextofkin"
                    name="nextofkin"
                    type="text"
                    value={nextofkin}
                    setValue={setNextofkin}
                    errorColor={THEME.colors.error.main}
                  />
                </div>
                <div>
                  <InputField
                    regular
                    label="Next of Kin's Phone Number"
                    placeholder="Enter next of kin's number"
                    id="nextofkinPhone"
                    name="nextofkinPhone"
                    type="text"
                    value={nextofkinPhone}
                    setValue={setNextofkinPhone}
                    errorColor={THEME.colors.error.main}
                  />
                </div>
              </HorList>
            </ContactDetailsWrapper>
            <Button
              onClick={payNow}
              text="Proceed to Pay"
              type="primary"
              size="large"
            />
          </LeftSection>
          <RightSection>
            <CheckoutHeader>
              Trip Summary
            </CheckoutHeader>
            <div>
              <h4>
                {checkoutData.trip}
              </h4>
              <p>
                {checkoutData.departureDate}
              </p>
              <p>
                {checkoutData.vehicle.name}
              </p>
              <p>
                {'4 '}
                {seats.length}
              </p>
              <HorList>
                <span>
                  {seats.length}
                  {' x Adult(s)'}
                </span>
                <span>
                  {checkoutData.totalCost}
                </span>
              </HorList>
              <HorList>
                <h4>
                  Total to pay
                </h4>
                <h4>
                  {checkoutData.totalCost}
                </h4>
              </HorList>
            </div>
          </RightSection>
        </Section>
      </CheckoutWrapper>
      {
        openModal && (
          <PayModal
            closeModal={closeModal}
            details={{
              checkoutData,
              gender,
              fullname,
              nextofkin,
              nextofkinPhone,
              phone,
              email,
            }}
          />
        )
      }
    </Body>
  );
};

export default Checkout;
