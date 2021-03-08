import api from './config';

export const fetchBooks = () => api.get('/books');

export const fetchBookDetail = (payload) => api.get(`/books/${payload.id}`);

export const fetchBookProfile = (payload) => api.get(`/profile/${payload.id}`);
