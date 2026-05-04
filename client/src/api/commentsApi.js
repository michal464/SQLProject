import { apiFetch } from './fetchClient';

export const getComments = (postId) => apiFetch(`/posts/${postId}/comments`);
export const createComment = (data) => apiFetch('/comments', { method: 'POST', body: JSON.stringify(data) });
export const updateComment = (id, data) => apiFetch(`/comments/${id}`, { method: 'PUT', body: JSON.stringify(data) });
export const deleteComment = (id) => apiFetch(`/comments/${id}`, { method: 'DELETE' });
