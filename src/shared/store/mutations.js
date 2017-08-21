const mutations = {
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
  sortAlpha (state) {
    state.products.slice().sort()
  },
  GET_PRODUCTS (state, products) {
    state.products = products
  },
  sortState (state, sortBy) {
    state.sortState = sortBy
  }
}

export default mutations
