import Vue from 'vue'
import VueRouter from 'vue-router'
import Page from 'components/page/page'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/*',
      name: 'Main Page',
      component: Page
    }
  ]
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  next()
})

export default router
