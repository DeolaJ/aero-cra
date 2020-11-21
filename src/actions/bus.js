import { toast } from 'react-toastify';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const SHOWN_FIELDS = ['id', 'name', 'capacity', 'registrationNumber'];
export const CREATE_FIELDS = ['name', 'capacity', 'registrationNumber', 'trip'];
export const EDIT_FIELDS = ['id', 'name', 'capacity', 'registrationNumber'];
export const DELETE_MESSAGE = 'Are you sure you want to delete this bus?';
export const EDIT_MESSAGE = 'Update Bus Details';
export const CREATE_MESSAGE = 'Add a new bus';

export async function getBuses() {
  const response = await fetch(`${BASE_URL}/bus`);
  const buses = await response.json();
  return buses;
}

export const deleteBus = (id, updateData, closeModal) => async () => {
  const response = await fetch(`${BASE_URL}/bus/${id}`, { method: 'DELETE' });
  const { data } = await response.json();
  updateData('delete', { id });
  closeModal();
  if (data.errorMessage) {
    toast.error(data.errorMessage);
  }
  toast.success(data.message);
};

export const createBus = async (values, updateData, closeModal) => {
  const response = await fetch(`${BASE_URL}/bus`, {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    body: JSON.stringify(values),
  });
  const { data } = await response.json();
  updateData('create', data);
  closeModal();
  if (data.errorMessage) {
    toast.error(data.errorMessage);
  }
  toast.success(data.message);
};

export const editBus = async (id, values, updateData, closeModal) => {
  const response = await fetch(`${BASE_URL}/bus/${id}`, {
    method: 'PUT',
    headers: new Headers({ 'Content-Type': 'application/json' }),
    body: JSON.stringify(values),
  });
  const { data } = await response.json();
  updateData('edit', data);
  closeModal();
  if (data.errorMessage) {
    toast.error(data.errorMessage);
  }
  toast.success(data.message);
};
