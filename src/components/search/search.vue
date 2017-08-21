<template lang='pug' src='./search.pug'></template>

<script>
export default {
  computed: {
    search (el) {
      return this.$store.state.search
    }
  },
  methods: {
    newInput (el) {
      const str = el.target.value
      this.$store.commit('search', str)
    }
  }
}
</script>
