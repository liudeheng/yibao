import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible'


Vue.config.productionTip = false,

(function () {
  var rem = document.createElement('script');
  rem.src = '../public/rem.js';
  document.body.appendChild(rem)
})()

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

