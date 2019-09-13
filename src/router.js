import Vue from 'vue'
import Router from 'vue-router'
import details from "./views/details.vue"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/details',component:details,
    },
  ]
})
