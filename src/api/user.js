import axios from './index.js'

export const getUserInfo = ({ userId }) => {
  return axios.request({
    url: '/getUserInfo',
    method: 'post',
    data: {
      userId
    }
  })
}

export const login = ({ userName, password}) => {
  return axios.request({
    url: '/index/login',
    method: 'post',
    data: {
      userName,
      password
    }
  })
}
//这里传递token到服务器端进行校验。
export const authorization = () => {
  return axios.request({
    url: '/users/authorization',
    method: 'get'
  })
}