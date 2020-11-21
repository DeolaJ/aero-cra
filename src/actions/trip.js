import { toast } from 'react-toastify';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const SHOWN_FIELDS = ['id', 'start', 'destination', 'price'];
export const CREATE_FIELDS = ['start', 'destination', 'price'];
export const EDIT_FIELDS = ['id', 'price'];
export const DELETE_MESSAGE = 'Are you sure you want to delete this trip?';
export const EDIT_MESSAGE = 'Update Trip Details';
export const CREATE_MESSAGE = 'Add a new trip';

export async function getTrips() {
  const response = await fetch(`${BASE_URL}/trip`);
  const trips = await response.json();
  return trips;
}

export const deleteTrip = (id, updateData, closeModal) => async () => {
  const response = await fetch(`${BASE_URL}/trip/${id}`, { method: 'DELETE' });
  const { data } = await response.json();
  updateData('delete', { id });
  closeModal();
  if (data.errorMessage) {
    toast.error(data.errorMessage);
  }
  toast.success(data.message);
};

export const createTrip = async (values, updateData, closeModal) => {
  const response = await fetch(`${BASE_URL}/trip`, {
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

export const editTrip = async (id, values, updateData, closeModal) => {
  const response = await fetch(`${BASE_URL}/trip/${id}`, {
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
