<template lang='pug' src='./page-size.pug'></template>

<script>
export default {
  methods: {
    onSelect (el) {
      const size = el.target.value
      this.$store.commit('pageSize', size)
    }
  }
}
</script>
