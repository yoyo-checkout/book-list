import api from './config';

export const fetchBooks = () => api.get('/books');
