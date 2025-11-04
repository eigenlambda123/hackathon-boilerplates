import api from './axios';

// Get all users
export const getUsers = async () => {
  const res = await api.get('/users/');
  return res.data;
};

// Get a single user
export const getUser = async (id) => {
  const res = await api.get(`/users/${id}`);
  return res.data;
};

// Create a new user
export const createUser = async (data) => {
  const res = await api.post('/users/', data);
  return res.data;
};

// Update a user
export const updateUser = async (id, data) => {
  const res = await api.put(`/users/${id}`, data);
  return res.data;
};

// Delete a user
export const deleteUser = async (id) => {
  const res = await api.delete(`/users/${id}`);
  return res.data;
};
