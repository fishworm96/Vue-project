import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Bus from './lib/bus.js'
//在生产环境不需要mock，判断是否需要mock
if(process.env.NODE_ENV !== 'production') require('./mock')

Vue.config.productionTip = false

// bus注册到根实例
Vue.prototype.$bus = Bus

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
