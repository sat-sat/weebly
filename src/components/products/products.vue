<template lang='pug' src='./products.pug'></template>

<script>
// components
import PageSize from 'components/page-size/page-size'
import Pagination from 'components/pagination/pagination'
import SingleProduct from 'components/single-product/single-product'
import TableHeader from 'components/table-header/table-header'

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
    SingleProduct,
    TableHeader
  }
}
</script>
