import { doCustomTimes } from '@/lib/tools'
import Mock from 'mockjs'

export const getTableData = () => {
  const template = {
    name: '@name',
    'age|18-25': 0,
    email: '@email'
  }
  let arr = []
  //发起请求时返回5条数据
  doCustomTimes(5, () => {
    arr.push(Mock.mock(template))
  })
  return arr
}