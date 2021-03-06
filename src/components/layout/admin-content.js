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
import * as placesData from '../../actions/place';
import * as tripsData from '../../actions/trip';
import * as busData from '../../actions/bus';
import * as companyData from '../../actions/company';

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
  const [trips, setTrips] = useState([]);
  const [buses, setBuses] = useState([]);
  const [companies, setCompanies] = useState([]);

  const [modalControl, setModalControl] = useState({
    type: '',
    open: false,
    details: {},
  });

  useEffect(() => {
    async function asyncFxns() {
      placesData.getPlaces().then((response) => {
        setPlaces(response.data);
      });
      tripsData.getTrips().then((response) => {
        setTrips(response.data);
      });
      busData.getBuses().then((response) => {
        setBuses(response.data);
      });
      companyData.getCompanies().then((response) => {
        setCompanies(response.data);
      });
    }
    asyncFxns();
  }, []);

  const closeModal = () => {
    setModalControl({
      ...modalControl,
      open: false,
    });
  };

  const updatePlaceData = (type, newData) => {
    let newPlaces;
    let index;
    if (type === 'create') {
      newPlaces = [...places, newData];
      setPlaces(newPlaces);
    } else if (type === 'edit') {
      index = places.findIndex((item) => item.id === newData.id);
      places.splice(index, 1, newData);
      setPlaces(places);
    } else if (type === 'delete') {
      index = places.findIndex((item) => item.id === newData.id);
      places.pop(index);
      setPlaces(places);
    }
  };

  const updateBusData = (type, newData) => {
    let newBuses;
    let index;
    if (type === 'create') {
      newBuses = [...buses, newData];
      setBuses(newBuses);
    } else if (type === 'edit') {
      index = buses.findIndex((item) => item.id === newData.id);
      buses.splice(index, 1, newData);
      setBuses(buses);
    } else if (type === 'delete') {
      index = buses.findIndex((item) => item.id === newData.id);
      buses.pop(index);
      setBuses(buses);
    }
  };

  const updateTripData = (type, newData) => {
    let newTrips;
    let index;
    if (type === 'create') {
      newTrips = [...trips, newData];
      setTrips(newTrips);
    } else if (type === 'edit') {
      index = trips.findIndex((item) => item.id === newData.id);
      trips.splice(index, 1, newData);
      setTrips(trips);
    } else if (type === 'delete') {
      index = trips.findIndex((item) => item.id === newData.id);
      trips.pop(index);
      setTrips(trips);
    }
  };

  const updateCompanyData = (type, newData) => {
    let newCompanies;
    let index;
    if (type === 'create') {
      newCompanies = [...trips, newData];
      setTrips(newCompanies);
    } else if (type === 'edit') {
      index = companies.findIndex((item) => item.id === newData.id);
      companies.splice(index, 1, newData);
      setCompanies(companies);
    } else if (type === 'delete') {
      index = companies.findIndex((item) => item.id === newData.id);
      companies.pop(index);
      setCompanies(companies);
    }
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
          fieldsShown={placesData.SHOWN_FIELDS}
          editFields={placesData.EDIT_FIELDS}
          createFields={placesData.CREATE_FIELDS}
          deleteModalMessage={placesData.DELETE_MESSAGE}
          editModalMessage={placesData.EDIT_MESSAGE}
          createModalMessage={placesData.CREATE_MESSAGE}
          deleteAction={placesData.deletePlace}
          createAction={placesData.createPlace}
          editAction={placesData.editPlace}
          updateData={updatePlaceData}
        />
        <br />
        <DataTable
          data={trips}
          admin
          openModal={setModalControl}
          fieldsShown={tripsData.SHOWN_FIELDS}
          editFields={tripsData.EDIT_FIELDS}
          createFields={tripsData.CREATE_FIELDS}
          deleteModalMessage={tripsData.DELETE_MESSAGE}
          editModalMessage={tripsData.EDIT_MESSAGE}
          createModalMessage={tripsData.CREATE_MESSAGE}
          deleteAction={tripsData.deleteTrip}
          createAction={tripsData.createTrip}
          editAction={tripsData.editTrip}
          updateData={updateTripData}
        />
        <br />
        <DataTable
          data={buses}
          admin
          openModal={setModalControl}
          fieldsShown={busData.SHOWN_FIELDS}
          editFields={busData.EDIT_FIELDS}
          createFields={busData.CREATE_FIELDS}
          deleteModalMessage={busData.DELETE_MESSAGE}
          editModalMessage={busData.EDIT_MESSAGE}
          createModalMessage={busData.CREATE_MESSAGE}
          deleteAction={busData.deleteBus}
          createAction={busData.createBus}
          editAction={busData.editBus}
          updateData={updateBusData}
        />
        <br />
        <DataTable
          data={companies}
          admin
          openModal={setModalControl}
          fieldsShown={companyData.SHOWN_FIELDS}
          editFields={companyData.EDIT_FIELDS}
          createFields={companyData.CREATE_FIELDS}
          deleteModalMessage={companyData.DELETE_MESSAGE}
          editModalMessage={companyData.EDIT_MESSAGE}
          createModalMessage={companyData.CREATE_MESSAGE}
          deleteAction={companyData.deleteCompany}
          createAction={companyData.createCompany}
          editAction={companyData.editCompany}
          updateData={updateCompanyData}
        />
        {
          (modalControl.type === 'edit') && modalControl.open && (
            <EditModal
              details={modalControl.details}
              closeModal={closeModal}
              message={modalControl.message}
              action={modalControl.action}
              updateData={modalControl.updateData}
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
              updateData={modalControl.updateData}
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
              updateData={modalControl.updateData}
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
