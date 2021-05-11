// 引入vue
import vue from 'vue'

const mutations = {
  // 这个方法有两个参数，第一个参数state，state是指同级的state对象。第二个参数params在Vue文档中叫载荷，这个参数有两种形式，如果只需要一个值那么它就是一个值直接使用。如果是多个值，那么就是一个对象。
  SET_APP_NAME (state, params) {
    // state.appName = params
    state.appName = params
  },
  //现在没有版本号，但以后想给它添加一个应该这么做
  // 先定义一个函数，这里要传一个参数。
  SET_APP_VERSION(state) {
    // 使用vue的set方法，第一个参数是要给谁设置值。第二个参数是要设置的名字。第三个参数是要设置的值。
    // 如果不是用vue.set方法将不会添加，这就是vue响应式的原则。
    vue.set(state, 'appVersion', '1.0')
  },
  SET_STATE_VALUE (state, value) {
    state.stateValue = value
  }
}

export default mutations