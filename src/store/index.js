import Vue from 'vue'
import Vuex from 'vuex'

import globalVuex from './modules/global';
import book from './modules/book';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    globalVuex,
    book,
  },
})
