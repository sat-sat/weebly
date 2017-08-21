import Vue from 'vue'

const tableHeaderDirective = Vue.directive('table-header-directive', {
  inserted (el) {
    if (el) {
      el.onclick = function () {
        const allCheckboxes = document.querySelectorAll('.single-product__checkbox')
        for (let i = 0; i < allCheckboxes.length; i++) {
          if (el.checked === true) {
            allCheckboxes[i].checked = true
          } else {
            if (!allCheckboxes[i].classList.contains('editable')) {
              allCheckboxes[i].checked = false
            }
          }
        }
      }
    }
  }
})

export default tableHeaderDirective
