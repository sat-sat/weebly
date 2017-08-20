<template lang='pug' src='./search.pug'></template>

<script>
export default {
  prosp: ['props'],
  computed: {
    search (el) {
      // console.log(el)
      // this.$store.commit('search')
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
