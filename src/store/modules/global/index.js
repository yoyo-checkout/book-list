const state = {
  isLoading: false,
};

const actions = {
};

const mutations = {
  SET_IS_LOADING(state, bool) {
    state.isLoading = bool;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
