import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Search from './components/search.vue'
import Vant from 'vant';
import 'vant/lib/index.css';
// import  VueAMap from 'vue-amap';
// Vue.use(VueAMap)
// VueAMap.initAMapApiLoader({
//   key:'7b30a3e68d7d4f8445748a7f78e89eb6'
// })
Vue.use(Vant);
Vue.config.productionTip = false
Vue.component("my-search",Search);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
