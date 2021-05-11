import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import user from './module/user'
import getters from './getter'
import saveInLocal from './plugin/saveInLocal.js'

Vue.use(Vuex)

// 一定要Vuex.store方法创建实例
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    user
  },
  // 如何使用，这样插件就加载上了
  plugins: [ saveInLocal ]
})
