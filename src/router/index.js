import Vue from 'vue'
import VueRouter from 'vue-router'
import Container from 'components/container/container'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/*',
      name: 'Main Container',
      component: Container
    }
  ]
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0)
  next()
})

export default router
