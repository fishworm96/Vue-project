import { login, authorization } from '@/api/user'
import { setToken } from '@/lib/util'

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
  updateUserName ({ commit, state, rootState, despatch }) {
    // 操作state下的appName
    // rootState.appName
  },
  //通过载荷的形式传递userName和pssword。
  login ({ commit }, { userName, password }) {
    return new Promise((resolve, reject) => {
      //这里返回一个promise，通过then的方式接收
      login({ userName, password }).then(res => {
        // 判断返回的状态码是否是200和token是否为空。
        if (res.code === 200 && res.data.token) {
          // 成功返回token就保存token
          setToken(res.data.token)
          resolve()
        } else {
          //如果判断失败就就是显示一个错误信息
          reject(new Error('错误'))
        }
        //返回的错误信息
      }).catch(error => {
        reject('error')
      })
    })
  },
  authorization ({ commit }, token) {
    return new Promise((resolve, reject) => {
      authorization().then(res => {
        if (parseInt(res.code) == 401) {
          reject(new Error('token error'))
        } else {
          setToken(res.data.token)
          resolve()
        }
      }).catch(error => {
        reject(error)
      })
    })
  },
  logout () {
    setToken('')
  }
}

export default {
  state,
  mutations,
  actions,
  module: {

  }
}