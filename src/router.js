import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import details from "./views/details.vue"
=======
import Home from './views/Home.vue'
import Product from './views/Product.vue'
>>>>>>> 273b4382be026860fa9d179cc98f486613a59ed6
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/details',component:details,
    },
<<<<<<< HEAD
=======
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
>>>>>>> 273b4382be026860fa9d179cc98f486613a59ed6
  ]
})
