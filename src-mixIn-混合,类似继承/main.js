import Vue from 'vue'
import App from './App.vue'

// import {mixIn} from "@/mixin";

//关闭Vue生产提示
Vue.config.productionTip = false

//全局注册mixIn,所有的组件都会被混合
// Vue.mixin(mixIn)

new Vue({
  //解决引入残缺版vue的问题
  render: h => h(App),

}).$mount('#app')
