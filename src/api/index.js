import api from './config';

export const fetchBooks = () => api.get('/books');

export const fetchBookDetail = (payload) => api.get(`/books/${payload.id}`);

export const fetchBookProfile = (payload) => api.get(`/profile/${payload.id}`);

export const updateBookProfile = (payload) => api.patch(`/profile/${payload.id}`, {
  count: payload.count,
  price: payload.price,
});
