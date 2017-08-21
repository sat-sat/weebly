// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './base/app'
import router from './router'
import VeeValidate from 'vee-validate'
import store from './shared/store/'

// Vue config
Vue.config.productionTip = false

// Vue use
Vue.use(VeeValidate)

/* eslint-disable no-new */
new Vue({
  router,
  template: '<App/>',
  store: store,
  render: h => h(App)
}).$mount('#app')
