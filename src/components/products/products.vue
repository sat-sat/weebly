<template lang='pug' src='./products.pug'></template>

<script>
// components
import PageSize from 'components/page-size/page-size'
import Pagination from 'components/pagination/pagination'
import SingleProduct from 'components/single-product/single-product'

// directives
import productsDirective from './products.directive'

export default {
  data: () => {
    return {
      selected: 1
    }
  },
  props: ['props'],
  computed: {
    products () {
      return this.$store.getters.filteredProducts.length
    },
    search () {
      this.$store.commit('newProductList', this.filteredItems)
      return this.$store.state.search
    },
    pages () {
      let pages = Math.floor(this.products / this.pageSize)
      if ((this.products % this.pageSize) !== 0) {
        pages = pages + 1
        return pages
      }
      return pages
    },
    pageSize () {
      return this.$store.state.pageSize
    },
    currentPage () {
      return this.$store.state.currentPage
    },
    filteredItems () {
      return this.$store.getters.filteredProducts
    },
    sortState () {
      return this.$store.state.sortState
    }
  },
  methods: {
    sortAlpha () {
      if (this.$store.state.sortState === 'alpha') {
        this.$store.commit('sortState', 'alphaReverse')
      } else {
        this.$store.commit('sortState', 'alpha')
      }
    },
    sortPrice () {
      if (this.$store.state.sortState === 'price') {
        this.$store.commit('sortState', 'priceReverse')
      } else {
        this.$store.commit('sortState', 'price')
      }
    },
    sortInventory () {
      if (this.$store.state.sortState === 'inventory') {
        this.$store.commit('sortState', 'inventoryReverse')
      } else {
        this.$store.commit('sortState', 'inventory')
      }
    },
    isInRange (index) {
      if (this.currentPage === 1) {
        if (index < this.pageSize) {
          return true
        }
      } else if (this.currentPage === this.pages) {
        if ((index + 1) > (this.pageSize * (this.pages - 1))) {
          return true
        }
      } else if ((index + 1) > ((this.currentPage - 1) * this.pageSize) && (index + 1) <= (this.currentPage * this.pageSize)) {
        return true
      }
    },
    pageDown () {
      if (this.currentPage !== 1) {
        this.$store.commit('pageDown')
      }
    },
    pageUp () {
      if (this.selected !== this.pages.length) {
        this.$store.commit('pageUp')
      }
    },
    onSelect (el) {
      const page = el.target.value
      this.$store.commit('selectPage', page)
    }
  },
  components: {
    PageSize,
    Pagination,
    SingleProduct
  },
  directives: {
    productsDirective
  }
}
</script>
