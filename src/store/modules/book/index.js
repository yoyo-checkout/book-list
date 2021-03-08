import { fetchBooks } from '@/api';

const state = {
  books: [],
};

const actions = {
  async getBooks({ commit }) {
    try {
      const data = await fetchBooks();

      commit('SET_BOOKS', data);
    } catch (error) {
      console.log('Error Request.');
    }
  },
};

const mutations = {
  SET_BOOKS(state, list) {
    state.books = list;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
