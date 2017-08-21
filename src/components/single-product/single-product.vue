<template lang='pug' src='./single-product.pug'></template>

<script>
export default {
  data () {
    return {
      editable: false
    }
  },
  props: ['props'],
  methods: {
    editToggle (el) {
      if (!this.editable) {
        this.editable = true
      } else {
        this.$validator.validateAll()
          .then(result => {
            if (result) {
              this.editable = false
            } else {
              this.editable = true
              el.target.checked = true
            }
          })
          .catch(() => {
            this.editable = true
            el.target.checked = true
          })
      }
    }
  }
}
</script>
