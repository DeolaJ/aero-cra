/* eslint-disable max-lines-per-function */
import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import DataTable from '../data-table';
import Section from '../section';
import THEME from '../../constants';
import EditModal from '../../partials/edit-modal';
import DeleteModal from '../../partials/delete-modal';
import CreateModal from '../../partials/create-modal';

const BASE_URL = process.env.REACT_APP_BASE_URL;

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

const AdminContent = (/* { userToken } */) => {
  const [places, setPlaces] = useState([]);
  const placesFieldsShown = ['id', 'name'];
  const placesCreateFields = ['name'];
  const placesEditFields = ['name'];
  const deletePlaceModalMessage = 'Are you sure you want to delete this place?';
  const editPlaceModalMessage = 'Update Place Details';
  const createPlaceModalMessage = 'Add a new place';
  const placeDeleteAction = (id) => async () => {
    const response = await fetch(`${BASE_URL}plce/${id}`, { method: 'DELETE' });
    await response.json();
  };
  const placeCreateAction = () => async () => {
    const response = await fetch(`${BASE_URL}place`, { method: 'POST' });
    await response.json();
  };

  useEffect(() => {
    async function getPlaces() {
      const response = await fetch(`${BASE_URL}place`);
      const placesDb = await response.json();
      setPlaces(placesDb.data);
    }
    getPlaces();
  }, []);

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
          data={places}
          admin
          openModal={setModalControl}
          fieldsShown={placesFieldsShown}
          editFields={placesEditFields}
          createFields={placesCreateFields}
          deleteModalMessage={deletePlaceModalMessage}
          editModalMessage={editPlaceModalMessage}
          createModalMessage={createPlaceModalMessage}
          deleteAction={placeDeleteAction}
          createAction={placeCreateAction}
        />
        {
          (modalControl.type === 'edit') && modalControl.open && (
            <EditModal
              details={modalControl.details}
              closeModal={closeModal}
              message={modalControl.message}
            />
          )
        }
        {
          (modalControl.type === 'delete') && modalControl.open && (
            <DeleteModal
              details={modalControl.details}
              closeModal={closeModal}
              message={modalControl.message}
              action={modalControl.action}
            />
          )
        }
        {
          (modalControl.type === 'create') && modalControl.open && (
            <CreateModal
              details={modalControl.details}
              closeModal={closeModal}
              message={modalControl.message}
              action={modalControl.action}
            />
          )
        }
      </Section>
    </AdminContentWrapper>
  );
};

AdminContent.propTypes = {
  // userToken: PropTypes.string.isRequired,
};

export default AdminContent;
