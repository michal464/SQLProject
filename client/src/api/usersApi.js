import { apiFetch } from './fetchClient';

export const getUser = (id) => apiFetch(`/users/${id}`);
export const getUsers = () => apiFetch('/users');
