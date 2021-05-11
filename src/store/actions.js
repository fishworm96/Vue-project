// 假如是一个api接口请求
import { getAppName } from '@/api/app.js'

const actions = {
  // 第一个参数是一个对象，这是一个方法，调用它去提交mutation。这里用的是es6的对象结构，相当于是传入paramsObj在函数体内使用const commit = paramsObj.commit
  // updateAppName ({ commit }) {
  //   // 模拟异步操作
  //   getAppName().then(res => {
  //     // 提交方法名
  //     // 基本用法
  //     // commit('SET_APP_NAME', res.info.appName)
  //     //使用es6结构方法
  //     const { info: { appName } } = res
  //     commit('SET_APP_NAME', res.info.appName)
  //   }).catch((res) => {
  //     // 处理错误
  //     console.log(err)
  //   })
  // }

  //使用es8的异步函数来处理问题
  async updateAppName ({ commit }) {
    try {
      const { info: { appName } } = await getAppName()
      commit('SET_APP_NAME', appName)
    } catch (err) {
      // 处理异常信息
      console.log(err)
    }
  }
}



export default actions