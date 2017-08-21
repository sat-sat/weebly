<template lang='pug' src='./page.pug'></template>

<script>
// components
import ButtonAdd from 'components/button/button-add/button-add'
import ButtonExport from 'components/button/button-export/button-export'
import ButtonImport from 'components/button/button-import/button-import'
import Products from 'components/products/products'
import Search from 'components/search/search'

export default {
  data () {
    return {
      props: this.$store.state.products
    }
  },
  created () {
    this.$store.dispatch('getProducts')
  },
  computed: {
    pageSize () {
      return this.$store.state.pageSize
    }
  },
  components: {
    ButtonAdd,
    ButtonExport,
    ButtonImport,
    Products,
    Search
  }
}
</script>
