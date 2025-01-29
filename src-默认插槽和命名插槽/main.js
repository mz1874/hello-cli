import Vue from 'vue'
import App from './App.vue'
// import plugins from './plugin'

// import {mixIn} from "@/mixin";

//关闭Vue生产提示
Vue.config.productionTip = false

// Vue.use(plugins)

//全局注册mixIn,所有的组件都会被混合
// Vue.mixin(mixIn)

Vue.prototype.x ={}

new Vue({
  //解决引入残缺版vue的问题
  render: h => h(App),
  beforeCreate() {
     Vue.prototype.$bus = this
  }

}).$mount('#app')
