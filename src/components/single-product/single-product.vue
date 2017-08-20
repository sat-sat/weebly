<template lang='pug' src='./single-product.pug'></template>

<script>
export default {
  data () {
    return {
      editable: false,
      name: 'Snapback Hat',
      type: 'Physical',
      price: 15.67,
      inventory: 200
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
