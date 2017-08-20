<template lang='pug' src='./products.pug'></template>

<script>
// components
import PageSize from 'components/page-size/page-size'
import Pagination from 'components/pagination/pagination'
import SingleProduct from 'components/single-product/single-product'

export default {
  props: ['props'],
  components: {
    PageSize,
    Pagination,
    SingleProduct
  }
}
</script>
