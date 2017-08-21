<template lang='pug' src='./single-product.pug'></template>

<script>
export default {
  data () {
    return {
      editable: false,
      nameValidation: {
        alpha: true,
        alpha_dash: true,
        alpha_spaces: true
      }
    }
  },
  props: ['props'],
  methods: {
    editToggle (el) {
      if (!this.editable) {
        this.editable = true
      } else {
        const product = {
          id: this.props.id,
          name: this.props.name,
          type: this.props.type,
          price: this.props.price,
          inventory: this.props.inventory,
          thumbnail: this.props.thumbnail
        }
        this.$validator.validateAll()
          .then(result => {
            if (result) {
              this.editable = false
              console.log(product)
              this.$store.dispatch('putProduct', product)
            } else {
              this.editable = true
              el.target.checked = true
            }
          })
          .catch(e => {
            console.log(e)
            this.editable = true
            el.target.checked = true
          })
      }
    }
  }
}
</script>
