  //调用这个方法，第一个参数是第二个参数执行几次
export const doCustomTimes = (times, callback) => {
  let i = -1
  while (++i < times) {
    callback(i)
  }
}