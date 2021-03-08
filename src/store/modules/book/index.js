import * as api from '@/api';

const state = {
  books: [],
  bookDetail: {},
  bookProfile: {},
};

const actions = {
  async getBooks({ commit }) {
    try {
      commit('globalVuex/SET_IS_LOADING', true, { root: true });

      const data = await api.fetchBooks();

      commit('SET_BOOKS', data);
    } catch (error) {
      console.log('Error Request.');
    } finally {
      commit('globalVuex/SET_IS_LOADING', false, { root: true });
    }
  },
  async getBook({ commit }, payload) {
    try {
      commit('globalVuex/SET_IS_LOADING', true, { root: true });

      const detail = await api.fetchBookDetail(payload);
      const profile = await api.fetchBookProfile(payload);

      commit('SET_BOOK_DETAIL', detail);
      commit('SET_BOOK_PROFILE', profile);
    } catch (error) {
      console.log('Error Request.');

      payload.vm.$router.replace({ name: 'Home' });
    } finally {
      commit('globalVuex/SET_IS_LOADING', false, { root: true });
    }
  },
  async updateBook({ commit }, payload) {
    try {
      commit('globalVuex/SET_IS_LOADING', true, { root: true });

      const data = await api.updateBookProfile(payload);
    } catch (error) {
      console.log('Error Request.');

      payload.vm.$router.replace({ name: 'Home' });
    } finally {
      commit('globalVuex/SET_IS_LOADING', false, { root: true });
    }
  },
};

const mutations = {
  SET_BOOKS(state, list) {
    state.books = list;
  },
  SET_BOOK_DETAIL(state, detailObj) {
    state.bookDetail = { ...detailObj };
  },
  SET_BOOK_PROFILE(state, profileObj) {
    state.bookProfile = { ...profileObj };
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
