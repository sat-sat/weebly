const getters = {
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
}

export default getters
