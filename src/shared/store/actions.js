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
  },
  putProduct ({ commit }, product) {
    Axios
      .put(api + '/product/' + product.id, {
        'name': product.name,
        'type': product.type,
        'price': product.price,
        'inventory': product.inventory,
        'thumbnail': product.thumbnail
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        commit('PUT_PRODUCT', response.data)
        console.log(response)
      })
      .catch(e => {
        console.log(e)
      })
  }
}

export default actions
