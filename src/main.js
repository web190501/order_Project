import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Search from './components/search.vue'
 
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant)
Vue.config.productionTip = false
Vue.component("my-search",Search);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
