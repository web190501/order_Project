import Vue from 'vue'
import Router from 'vue-router'
import details from "./views/details.vue"
import Product from './views/Product.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/details',component:details,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // whih is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/product',
      name: 'product',
      component: Product
    },
  ]
})
