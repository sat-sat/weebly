<template lang='pug' src='./pagination.pug'></template>

<script>
export default {
  data: () => {
    return {
      selected: 1,
      pages: [1, 2, 3]
    }
  },
  props: ['props'],
  methods: {
    pageDown () {
      if (this.selected !== 1) {
        this.selected = this.selected - 1
      }
    },
    pageUp () {
      if (this.selected !== this.pages.length) {
        this.selected = this.selected + 1
      }
    }
  }
}
</script>
