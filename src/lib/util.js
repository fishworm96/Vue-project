import Cookies from 'js-cookie'

export const setTitle = (title) => {
  window.document.title = title || 'admin'
}
//这里表示存在Cookie里面名字叫什么，给tokenName设一个默认值，如果没有设置就叫token。
export const setToken = (token, tokenName = 'token') => {
  Cookies.set(tokenName, token)
}
//获取token，这里也有tokenName，名字就叫token
export const getToken = (tokenName = 'token') => {
  return Cookies.get(tokenName)
}