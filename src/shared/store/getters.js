const getters = {
  filteredProducts: state => {
    function returnSearch (product) {
      if (state.search === '') {
        return product.name.indexOf(state.search) > -1
      } else if (isNaN(state.search)) {
        return product.name.toLowerCase().indexOf(state.search.toLowerCase()) > -1
      } else {
        return product.price.toString().indexOf(state.search) > -1
      }
    }

    function sortAlpha (a, b) {
      if (a.name < b.name) {
        return -1
      }
      if (a.name > b.name) {
        return 1
      }
      return 0
    }

    function sortPrice (a, b) {
      return a.price - b.price
    }

    function sortInventory (a, b) {
      return a.inventory - b.inventory
    }

    if (state.sortState === 'alpha') {
      return state.products.slice().sort(sortAlpha).filter(returnSearch)
      //
    } else if (state.sortState === 'alphaReverse') { // alpha reverse
      return state.products.slice().sort(sortAlpha).reverse().filter(returnSearch)
      //
    } else if (state.sortState === 'price') {
      return state.products.slice().sort(sortPrice).filter(returnSearch)
      //
    } else if (state.sortState === 'priceReverse') {
      return state.products.slice().sort(sortPrice).reverse().filter(returnSearch)
      //
    } else if (state.sortState === 'inventory') {
      return state.products.slice().sort(sortInventory).filter(returnSearch)
      //
    } else if (state.sortState === 'inventoryReverse') {
      return state.products.slice().sort(sortInventory).reverse().filter(returnSearch)
      //
    } else {
      return state.products.filter(returnSearch)
    }
  }
}

export default getters
