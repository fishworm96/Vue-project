import axios from 'axios'
import { baseURL } from '@/config/index'
import { getToken } from '@/lib/util'
// 用类的形式封装
class HttpRequest {
  // constructor方法是每个类必须的方法，如果没有添加它会默认添加这个方法。
  // 这里可以接收一些参数，如options参数对象。创建new HttpRequest()实例时可以传入一个参数
  constructor(baseUrl = baseURL) {
    // 这里es6写法传入一个baseUrl，这个写法相当于的baseUrl = baseUrl || baseURL
    // 这里this指代要创建的实例
    this.baseUrl = baseUrl
    this.queue = {}
  }
  // 在内部设置一个全局的配置，使用方法的形式
  getInsideConfig() {
    const config = {
      baseURL: this.baseUrl,
      header: {

      }
    }
    return config
  }
  // 请求拦截器
  interceptors(instance, url) {
    instance.interceptors.request.use(config => {
      //添加全局的loading
      //Spin组件，添加遮罩层，覆盖遮罩层后就无法点击。Spin.show()
      if(!Object.keys(this.queue).length) {}/* Spin.show() */
      this.queue[url] = true
      // 传递token，每次调用都会获取token，并把token放到header这个字段里面。
      config.headers['Authorization'] = getToken()
      return config
    }, error => {
      return Promise.reject(error)
    })
    // 响应拦截器
    instance.interceptors.response.use(res => {
      delete this.queue[url]
      const { data } = res
      return data
    }, error => {
      delete this.queue[url]
      return Promise.reject(error)
    })
  }
  request(options) {
    // 利用axios.create方法创建一个实例
    const instance = axios.create()
    // options需要一个合并，利用es6的assign方法进行合并。这个方法会把这两个对象合并成一个对象。如果有相同的key值的话，后面对象的key值会覆盖前面对象key的值。所以创建请求的配置要放在后面。
    options = Object.assign(this.getInsideConfig(), options)
    // 传入实例
    this.interceptors(instance, options.url)
    // 返回实例
    return instance(options)
  }
}
export default HttpRequest