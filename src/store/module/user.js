const state = {
// 在模块中使用
  userName: 'Lison'
}
const mutations = {
  // 第一个参数就是要作用的名称，第二个参数是传过来的值
  SET_USER_NAME (state, params) {
    state.userName = params
  }
}
const actions = {
  // 这里的第一个参数是提交，第二个参数是这里的state实例，第三个参数是store下面的state实例，可以直接操作。第四个参数是action实例的提交方法。
  updateUserName ({ commit, state, rootState, despatch}) {
    // 操作state下的appName
    rootState.appName
    // 这里可以调用dispatch来触发aaa这个action。
    dispatch('aaa', '')
  },
  aaa() {

  }
}

export default {
  state,
  mutations,
  actions,
  module: {

  }
}