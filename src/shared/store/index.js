import Vue from 'vue'
import Vuex from 'vuex'
// import Axios from 'axios'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    products: [],
    pageSize: 5,
    currentPage: 1,
    search: ''
  },
  mutations: mutations,
  getters: getters,
  actions: actions
})

export default store
