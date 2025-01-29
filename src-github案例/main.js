import Vue from 'vue'
import App from './App.vue'


//关闭Vue生产提示
Vue.config.productionTip = false


new Vue({
  //解决引入残缺版vue的问题
  render: h => h(App),
  beforeCreate() {
     Vue.prototype.$bus = this
  }

}).$mount('#app')
