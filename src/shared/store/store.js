import Vue from 'vue'
import Vuex from 'vuex'
import data from './fake-data.json'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    products: data,
    pageSize: 5
  },
  mutations: {
    pageSize (state, size) {
      state.pageSize = size
    }
  }
})

export default store
