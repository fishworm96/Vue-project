// 函数式组件，这个组件没有生命周期。它只是一个接收参数的函数，当functional为true的时候，意味着它就是没有状态，没有实力的对象。但是把它引进但做一个组件去用的时候，vue会把它做一个处理。在render这里传入render函数，vue会使用render函数，把里面的逻辑、虚拟节点做一个渲染。所以
export default {
  functional: true,
  // render属性
  porps: {
    number: Number,
    renderfunc: Function
  },
  // 这里render就是用户传进来的render。第一个参数是h函数，第二个参数是实例。因为这里是没有实例的，所以用ctx代表这这个文嘉你的对象
  render: (h, ctx) => {
    return ctx.props.renderFunc(h, ctx.props.number)
  }
}