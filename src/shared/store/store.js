import Vue from 'vue'
import Vuex from 'vuex'
import data from './fake-data.json'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    products: data,
    pageSize: 5,
    currentPage: 1,
    search: ''
  },
  mutations: {
    pageSize (state, size) {
      state.pageSize = size
    },
    currentPage (state, page) {
      state.currentPage = page
    },
    pageUp (state) {
      state.currentPage += 1
    },
    pageDown (state) {
      state.currentPage -= 1
    },
    selectPage (state, page) {
      state.currentPage = Number(page)
    },
    search (state, str) {
      state.search = String(str)
    }
  }
})

export default store
