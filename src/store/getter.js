const getters = {
  // 现在计算一个值，这个值是根据state中的appname来计算的
  // 这里的state就是当前vue实例里同级的state
  appNameWithVersion: (state) => {
    return `${state.appName}v2.0`
  }
}
export default getters