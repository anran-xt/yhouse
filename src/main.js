import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'


// 引入MintUI组件框架
import MintUI from 'mint-ui'
// 引入mintUI组件模块的样式
import 'mint-ui/lib/style.css'
//使用MintUI模块
Vue.use(MintUI)

Vue.config.productionTip = false 

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
