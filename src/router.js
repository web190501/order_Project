import Vue from 'vue'
import Router from 'vue-router'
import details from "./views/details.vue"
import Product from './views/Product.vue'
 
import Login from './views/Login.vue'
import Reg from './views/Reg.vue'
import Me from './views/Me.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/details',component:details,
      path:'/Login',component:Login,
      path:'/Reg',component:Reg,
      path:'/Me',component:Me,
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
    {
      path: '/details',
      name: 'details',
      component: details
    },
    {
      path: '/Login',
      name: 'Login',
      component:Login
    },
    {
      path: '/Reg',
      name: 'Reg',
      component: Reg
    },
    {
      path: '/Me',
      name: 'Me',
      component: Me
    },
  ]
})
