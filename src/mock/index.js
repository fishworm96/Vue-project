import Mock from 'mockjs'
import { getUserInfo, login, authorization } from './response/user'
import { getTableData, getFileList, getFolderList } from './response/data'
const Random = Mock.Random

//第一个参数可以是字符串或者正则表达式。第二个参数是请求方式写post或者get等等，这里可以省略。第三个参数是一个模板或者方法。
// Mock.mock('http://localhost:3000/getUserInfo', getUserInfo)
//使用正则的方式
Mock.mock(/\/getUserInfo/, 'post', getUserInfo)
Mock.mock(/\/login/, 'post', login)
Mock.mock(/\/authorization/, 'get', authorization)
Mock.mock(/\/getTableData/, 'get', getTableData)
Mock.mock(/\/getFileList/, 'get', getFileList)
Mock.mock(/\/getFolderList/, 'get', getFolderList)

Mock.setup({
  timeout: 0
})

Random.extend({
  fruit () {
    const fruit = ['apple', 'peach', 'lemon']
    return this.pick(fruit)
  }
})

export default Mock
