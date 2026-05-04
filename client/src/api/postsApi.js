import { apiFetch } from './fetchClient';

export const getPosts = () => apiFetch('/posts');
export const getUserPosts = (userId) => apiFetch(`/users/${userId}/posts`);
export const createPost = (data) => apiFetch('/posts', { method: 'POST', body: JSON.stringify(data) });
export const updatePost = (id, data) => apiFetch(`/posts/${id}`, { method: 'PUT', body: JSON.stringify(data) });
export const deletePost = (id) => apiFetch(`/posts/${id}`, { method: 'DELETE' });
