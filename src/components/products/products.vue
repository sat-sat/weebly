<template lang='pug' src='./products.pug'></template>

<script>
// components
import PageSize from 'components/page-size/page-size'
import Pagination from 'components/pagination/pagination'
import SingleProduct from 'components/single-product/single-product'

export default {
  data: () => {
    return {
      selected: 1
    }
  },
  props: ['props'],
  computed: {
    search () {
      return this.$store.state.search
    },
    currentPage () {
      return this.$store.state.currentPage
    },
    pageSize () {
      return this.$store.state.pageSize
    },
    products () {
      return this.$store.state.products.length
    },
    pages () {
      let pages = Math.floor(this.products / this.pageSize)
      if ((this.products % this.pageSize) !== 0) {
        pages = pages + 1
        return pages
      }
      return pages
    },
    filteredItems () {
      return this.$store.state.products.filter(product => {
        if (this.$store.state.search === '') {
          return product.name.indexOf(this.$store.state.search) > -1
        } else if (isNaN(this.$store.state.search)) {
          return product.name.toLowerCase().indexOf(this.$store.state.search.toLowerCase()) > -1
        } else {
          return product.price.toString().indexOf(this.$store.state.search) > -1
        }
      })
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
    SingleProduct
  }
}
</script>
