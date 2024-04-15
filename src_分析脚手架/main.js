import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  //解决引入残缺版vue的问题
  render: h => h(App),

}).$mount('#app')
