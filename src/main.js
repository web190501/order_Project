import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Search from './components/search.vue'
import { Button } from 'vant';
import { Tab, Tabs } from 'vant';
import 'vant/lib/index.css';
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem);
Vue.use(Tab).use(Tabs);
Vue.use(Button);
Vue.config.productionTip = false
Vue.component("my-search",Search);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
