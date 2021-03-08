const state = {
  isLoading: false,
  notificationCard: {
    isShow: false,
    type: '',
    text: '',
  },
};

const actions = {
};

const mutations = {
  SET_IS_LOADING(state, bool) {
    state.isLoading = bool;
  },
  SET_NOTIFICATION_CARD(state, { key, val }) {
    state.notificationCard[key] = val;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
