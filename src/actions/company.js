import { toast } from 'react-toastify';

const BASE_URL = process.env.REACT_APP_BASE_URL;

export const SHOWN_FIELDS = ['id', 'name', 'address'];
export const CREATE_FIELDS = ['name', 'address'];
export const EDIT_FIELDS = ['id', 'name', 'address'];
export const DELETE_MESSAGE = 'Are you sure you want to delete this company?';
export const EDIT_MESSAGE = 'Update Company Details';
export const CREATE_MESSAGE = 'Add a new company';

export async function getCompanies() {
  const response = await fetch(`${BASE_URL}/company`);
  const companies = await response.json();
  return companies;
}

export const deleteCompany = (id, updateData, closeModal) => async () => {
  const response = await fetch(`${BASE_URL}/company/${id}`, { method: 'DELETE' });
  const { data } = await response.json();
  updateData('delete', { id });
  closeModal();
  if (data.errorMessage) {
    toast.error(data.errorMessage);
  }
  toast.success(data.message);
};

export const createCompany = async (values, updateData, closeModal) => {
  const response = await fetch(`${BASE_URL}/company`, {
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

export const editCompany = async (id, values, updateData, closeModal) => {
  const response = await fetch(`${BASE_URL}/company/${id}`, {
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
