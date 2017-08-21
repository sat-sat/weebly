<template lang='pug' src='./single-product.pug'></template>

<script>
export default {
  data () {
    return {
      editable: false,
      thing: this.props,
      name: this.props.name
    }
  },
  props: ['props'],
  computed: {
    isChecked () {
      // this.editable = this.$el.children[0].firstElementChild.checked
      // console.log()
    }
  },
  methods: {
    editToggle () {
      if (!this.editable) {
        this.editable = true
      } else {
        this.$validator.validateAll()
          .then(result => {
            if (result) {
              this.editable = false
            } else {
              this.editable = true
            }
          })
          .catch(() => {
            this.editable = true
          })
      }
    }
  }
}
</script>
