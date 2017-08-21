<template lang='pug' src='./table-header.pug'></template>

<script>
// directives
import tableHeaderDirective from './table-header.directive'

export default {
  computed: {
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
    }
  },
  directives: {
    tableHeaderDirective
  }
}
</script>
