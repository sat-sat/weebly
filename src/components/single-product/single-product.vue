<template lang='pug' src='./single-product.pug'></template>

<script>
export default {
  data () {
    return {
      editable: false,
      name: 'Snapback Hat'
    }
  },
  props: ['props'],
  methods: {
    editToggle () {
      this.editable = !this.editable
    }
  }
}
</script>
