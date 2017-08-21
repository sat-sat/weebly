import Vue from 'vue'

const productsDirective = Vue.directive('products-directive', {
  inserted (el) {
    if (el) {
      el.onclick = function () {
        console.log(el.checked)
        const allCheckboxes = document.querySelectorAll('.single-product__checkbox')
        for (let i = 0; i < allCheckboxes.length; i++) {
          if (el.checked === true) {
            allCheckboxes[i].checked = true
          } else {
            allCheckboxes[i].checked = false
          }
        }
      }
    }
  }
})

export default productsDirective
