//在每次实例初始化的时候调用
export default  store => {
  // 每次浏览器刷新后第一次做的操作
  // 每次提交mutaions后就会提交回调函数，第一个参数mutation，每次提交的一些信息。第二个参数state，就是当前模块的state
  // 添加实例： 先判断是否存在，存在就替换掉。这里不能直接赋值要使用store里的replaceState方法再转为对象替换掉。
  if(localStorage.state) store.replaceState(JSON.parse(localStorage.state))
  store.subscribe((mutation, state) => {
    // 每次提交都保存在本地，state就是当前模块的state，是一个对象。存储了以后要添加到state实例里。
    localStorage.state = JSON.stringify(state)
  })
}
