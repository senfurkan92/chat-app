import Vue from 'vue'
import App from './App.vue'
import vueSocket from "./vue-socket"
import "bootstrap"
import store from "./store"

Vue.config.productionTip = false;
Vue.use(vueSocket);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
