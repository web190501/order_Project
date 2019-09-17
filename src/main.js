import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Search from './components/search.vue'
 
Vue.config.productionTip = false
Vue.component("my-search",Search);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
