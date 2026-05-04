import { apiFetch } from './fetchClient';

export const getTodos = (userId) => apiFetch(`/users/${userId}/todos`);
export const createTodo = (data) => apiFetch('/todos', { method: 'POST', body: JSON.stringify(data) });
export const updateTodo = (id, data) => apiFetch(`/todos/${id}`, { method: 'PUT', body: JSON.stringify(data) });
export const deleteTodo = (id) => apiFetch(`/todos/${id}`, { method: 'DELETE' });
