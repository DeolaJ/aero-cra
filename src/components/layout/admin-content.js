/* eslint-disable max-lines-per-function */
import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import DataTable from '../data-table';
import Section from '../section';
import THEME from '../../constants';
import EditModal from '../../partials/edit-modal';
import DeleteModal from '../../partials/delete-modal';

const AdminContentWrapper = styled.div`

  > section {
    padding-top: 8rem;
    padding-bottom: 10rem;
  }
`;

const AdminTitle = styled.h2`
  background-color: ${THEME.colors.brand.wheat};
  padding: 2rem 1rem;
  color: white;
`;

const AdminContent = (
// {
//   user,
// }
) => {
  const content = [
    {
      value: 'chocolate',
      trip: 'chocolate',
      departureDate: 'chocolate',
      totalAmount: 'N10,000',
      tripType: 'Flight',
      label: 'Chocolate',
    },
    {
      value: 'strawberry',
      trip: 'strawberry',
      departureDate: 'strawberry',
      totalAmount: 'N10,000',
      tripType: 'Flight',
      label: 'Strawberry',
    },
    {
      value: 'vanilla',
      trip: 'vanilla',
      departureDate: 'vanilla',
      totalAmount: 'N10,000',
      tripType: 'Flight',
      label: 'Vanilla',
    },
    {
      value: 'chocolate',
      trip: 'chocolate',
      departureDate: 'chocolate',
      totalAmount: 'N10,000',
      tripType: 'Flight',
      label: 'Chocolate',
    },
    {
      value: 'strawberry',
      trip: 'strawberry',
      departureDate: 'strawberry',
      totalAmount: 'N10,000',
      tripType: 'Flight',
      label: 'Strawberry',
    },
    {
      value: 'vanilla',
      trip: 'vanilla',
      departureDate: 'vanilla',
      totalAmount: 'N10,000',
      tripType: 'Flight',
      label: 'Vanilla',
    },
    {
      value: 'chocolate',
      trip: 'chocolate',
      departureDate: 'chocolate',
      totalAmount: 'N10,000',
      tripType: 'Flight',
      label: 'Chocolate',
    },
    {
      value: 'strawberry',
      trip: 'strawberry',
      departureDate: 'strawberry',
      totalAmount: 'N10,000',
      tripType: 'Flight',
      label: 'Strawberry',
    },
    {
      value: 'vanilla',
      trip: 'vanilla',
      departureDate: 'vanilla',
      totalAmount: 'N10,000',
      tripType: 'Flight',
      label: 'Vanilla',
    },
    {
      value: 'chocolate',
      trip: 'chocolate',
      departureDate: 'chocolate',
      totalAmount: 'N10,000',
      tripType: 'Flight',
      label: 'Chocolate',
    },
    {
      value: 'strawberry',
      trip: 'strawberry',
      departureDate: 'strawberry',
      totalAmount: 'N10,000',
      tripType: 'Flight',
      label: 'Strawberry',
    },
    {
      value: 'vanilla',
      trip: 'vanilla',
      departureDate: 'vanilla',
      totalAmount: 'N10,000',
      tripType: 'Flight',
      label: 'Vanilla',
    },
    {
      value: 'chocolate',
      trip: 'chocolate',
      departureDate: 'chocolate',
      totalAmount: 'N10,000',
      tripType: 'Flight',
      label: 'Chocolate',
    },
    {
      value: 'strawberry',
      trip: 'strawberry',
      departureDate: 'strawberry',
      totalAmount: 'N10,000',
      tripType: 'Flight',
      label: 'Strawberry',
    },
    {
      value: 'vanilla',
      trip: 'vanilla',
      departureDate: 'vanilla',
      totalAmount: 'N10,000',
      tripType: 'Flight',
      label: 'Vanilla',
    },
    {
      value: 'chocolate',
      trip: 'chocolate',
      departureDate: 'chocolate',
      totalAmount: 'N10,000',
      tripType: 'Flight',
      label: 'Chocolate',
    },
    {
      value: 'strawberry',
      trip: 'strawberry',
      departureDate: 'strawberry',
      totalAmount: 'N10,000',
      tripType: 'Flight',
      label: 'Strawberry',
    },
    {
      value: 'vanilla',
      trip: 'vanilla',
      departureDate: 'vanilla',
      totalAmount: 'N10,000',
      tripType: 'Flight',
      label: 'Vanilla',
    },
    {
      value: 'chocolate',
      trip: 'chocolate',
      departureDate: 'chocolate',
      totalAmount: 'N10,000',
      tripType: 'Flight',
      label: 'Chocolate',
    },
    {
      value: 'strawberry',
      trip: 'strawberry',
      departureDate: 'strawberry',
      totalAmount: 'N10,000',
      tripType: 'Flight',
      label: 'Strawberry',
    },
    {
      value: 'vanilla',
      trip: 'vanilla',
      departureDate: 'vanilla',
      totalAmount: 'N10,000',
      tripType: 'Flight',
      label: 'Vanilla',
    },
    {
      value: 'chocolate',
      trip: 'chocolate',
      departureDate: 'chocolate',
      totalAmount: 'N10,000',
      tripType: 'Flight',
      label: 'Chocolate',
    },
    {
      value: 'strawberry',
      trip: 'strawberry',
      departureDate: 'strawberry',
      totalAmount: 'N10,000',
      tripType: 'Flight',
      label: 'Strawberry',
    },
    {
      value: 'vanilla',
      trip: 'vanilla',
      departureDate: 'vanilla',
      totalAmount: 'N10,000',
      tripType: 'Flight',
      label: 'Vanilla',
    },
    {
      value: 'chocolate',
      trip: 'chocolate',
      departureDate: 'chocolate',
      totalAmount: 'N10,000',
      tripType: 'Flight',
      label: 'Chocolate',
    },
    {
      value: 'strawberry',
      trip: 'strawberry',
      departureDate: 'strawberry',
      totalAmount: 'N10,000',
      tripType: 'Flight',
      label: 'Strawberry',
    },
    {
      value: 'vanilla',
      trip: 'vanilla',
      departureDate: 'vanilla',
      totalAmount: 'N10,000',
      tripType: 'Flight',
      label: 'Vanilla',
    },
    {
      value: 'chocolate',
      trip: 'chocolate',
      departureDate: 'chocolate',
      totalAmount: 'N10,000',
      tripType: 'Flight',
      label: 'Chocolate',
    },
    {
      value: 'strawberry',
      trip: 'strawberry',
      departureDate: 'strawberry',
      totalAmount: 'N10,000',
      tripType: 'Flight',
      label: 'Strawberry',
    },
    {
      value: 'vanilla',
      trip: 'vanilla',
      departureDate: 'vanilla',
      totalAmount: 'N10,000',
      tripType: 'Flight',
      label: 'Vanilla',
    },
    {
      value: 'chocolate',
      trip: 'chocolate',
      departureDate: 'chocolate',
      totalAmount: 'N10,000',
      tripType: 'Flight',
      label: 'Chocolate',
    },
    {
      value: 'strawberry',
      trip: 'strawberry',
      departureDate: 'strawberry',
      totalAmount: 'N10,000',
      tripType: 'Flight',
      label: 'Strawberry',
    },
    {
      value: 'vanilla',
      trip: 'vanilla',
      departureDate: 'vanilla',
      totalAmount: 'N10,000',
      tripType: 'Flight',
      label: 'Vanilla',
    },
  ];

  const [modalControl, setModalControl] = useState({
    type: '',
    open: false,
    details: {},
  });

  const closeModal = () => {
    setModalControl({
      ...modalControl,
      open: false,
    });
  };

  return (
    <AdminContentWrapper>
      <Section>
        <AdminTitle>
          Hello user
        </AdminTitle>
        <DataTable
          tableContent={content}
          admin
          openModal={setModalControl}
        />
        {
          (modalControl.type === 'edit') && modalControl.open && (
            <EditModal
              tripDetails={modalControl.details}
              closeModal={closeModal}
            />
          )
        }
        {
          (modalControl.type === 'delete') && modalControl.open && (
            <DeleteModal
              tripDetails={modalControl.details}
              closeModal={closeModal}
            />
          )
        }
      </Section>
    </AdminContentWrapper>
  );
};

AdminContent.propTypes = {
  // user: PropTypes.object,
};

export default AdminContent;
