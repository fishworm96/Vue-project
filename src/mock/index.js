import Mock from 'mockjs'
import { getUserInfo } from './response/user.js' 

//第一个参数可以是字符串或者正则表达式。第二个参数是请求方式写post或者get等等，这里可以省略。第三个参数是一个模板或者方法。
// Mock.mock('http://localhost:3000/getUserInfo', getUserInfo)
//使用正则的方式
Mock.mock(/\/getUserInfo/, getUserInfo)

export default {
  Mock
}