import Axios from 'axios'
import api from '../api/'

const actions = {
  getProducts ({ commit }) {
    Axios.get(api + '/products')
      .then(response => {
        commit('GET_PRODUCTS', response.data)
      })
      .catch(e => {
        console.log(e)
      })
  }
}

export default actions
