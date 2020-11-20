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
  const placesEditFields = ['id', 'name'];
  const deletePlaceModalMessage = 'Are you sure you want to delete this place?';
  const editPlaceModalMessage = 'Update Place Details';
  const createPlaceModalMessage = 'Add a new place';

  const [modalControl, setModalControl] = useState({
    type: '',
    open: false,
    details: {},
  });

  const closeModalAndReload = () => {
    setModalControl({
      type: '',
      open: false,
      details: {},
    });
    window.location.reload();
  };

  const placeDeleteAction = (id) => async () => {
    const response = await fetch(`${BASE_URL}/place/${id}`, { method: 'DELETE' });
    await response.json();
    closeModalAndReload();
  };
  const placeCreateAction = async (values) => {
    const response = await fetch(`${BASE_URL}/place`, {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(values),
    });
    await response.json();
    closeModalAndReload();
  };
  const placeEditAction = async (id, values) => {
    const response = await fetch(`${BASE_URL}/place/${id}`, {
      method: 'PUT',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(values),
    });
    await response.json();
    closeModalAndReload();
  };

  useEffect(() => {
    async function getPlaces() {
      const response = await fetch(`${BASE_URL}/place`);
      const placesDb = await response.json();
      setPlaces(placesDb.data);
    }
    getPlaces();
  }, []);

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
          editAction={placeEditAction}
        />
        {
          (modalControl.type === 'edit') && modalControl.open && (
            <EditModal
              details={modalControl.details}
              closeModal={closeModal}
              message={modalControl.message}
              action={modalControl.action}
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
