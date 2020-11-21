import { toast } from 'react-toastify';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const SHOWN_FIELDS = ['id', 'name'];
export const CREATE_FIELDS = ['name'];
export const EDIT_FIELDS = ['id', 'name'];
export const DELETE_MESSAGE = 'Are you sure you want to delete this place?';
export const EDIT_MESSAGE = 'Update Place Details';
export const CREATE_MESSAGE = 'Add a new place';

export async function getPlaces() {
  const response = await fetch(`${BASE_URL}/place`);
  const places = await response.json();
  return places;
}

export const deletePlace = (id, updateData, closeModal) => async () => {
  const response = await fetch(`${BASE_URL}/place/${id}`, { method: 'DELETE' });
  const { data } = await response.json();
  updateData('delete', { id });
  closeModal();
  if (data.errorMessage) {
    toast.error(data.errorMessage);
  }
  toast.success(data.message);
};

export const createPlace = async (values, updateData, closeModal) => {
  const response = await fetch(`${BASE_URL}/place`, {
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

export const editPlace = async (id, values, updateData, closeModal) => {
  const response = await fetch(`${BASE_URL}/place/${id}`, {
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
