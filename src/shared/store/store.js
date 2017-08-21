import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
// import data from './fake-data.json'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    products: [],
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
    },
    newProductList (state, obj) {
      state.products === obj
    },
    GET_PRODUCTS (state, products) {
      state.products = products
    }
  },
  getters: {
    filteredProducts: state => {
      return state.products.filter(product => {
        if (state.search === '') {
          return product.name.indexOf(state.search) > -1
        } else if (isNaN(state.search)) {
          return product.name.toLowerCase().indexOf(state.search.toLowerCase()) > -1
        } else {
          return product.price.toString().indexOf(state.search) > -1
        }
      })
    }
  },
  actions: {
    getProducts ({ commit }) {
      Axios.get('https://private-anon-042397eb12-weeblyfrontendtrialapi.apiary-mock.com/products')
        .then(response => {
          commit('GET_PRODUCTS', response.data)
        })
        .catch(e => {
          console.log(e)
        })
    }
  }
})

export default store
