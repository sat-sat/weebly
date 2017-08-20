<template lang='pug' src='./page.pug'></template>

<script>
// data
import data from '../../shared/data/fake-data.json'

// components
import ButtonAdd from 'components/button/button-add/button-add'
import ButtonExport from 'components/button/button-export/button-export'
import ButtonImport from 'components/button/button-import/button-import'
import Products from 'components/products/products'
import Search from 'components/search/search'
console.log(data)
export default {
  data: () => {
    return {
      props: data
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
