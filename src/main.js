import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Bus from './lib/bus.js'
import iview from 'iview'
import 'iview/dist/styles/iview.css'
import '@/assets/font/iconfont.js'
import '@/assets/font/iconfont.css'
import IconFont from '_c/icon-font'
import IconSvg from '_c/icon-svg'
//在生产环境不需要mock，判断是否需要mock
if(process.env.NODE_ENV !== 'production') require('./mock')

Vue.config.productionTip = false

// bus注册到根实例
Vue.prototype.$bus = Bus
Vue.component('icon-font', IconFont)
Vue.component('icon-svg', IconSvg)
Vue.use(iview)

// const handleClick = event => {
//   console.log(event)
//   // 在render下阻止冒泡
//   event.stopPropagation()
// }

// let list = [{name: 'lison'}, {name: 'li'}]
// const getListEleArr = (h) => {
//   return list.map((item, index) => h('li', {
//     on: {
//       'click': handleClick
//     },
//     key: `list_item_${index}`
//   }, item.name))
// }

new Vue({
  router,
  store,
//   render: h => {
//     return h(CountTO, {
//       // 在render下使用class的方法，可以是字符串、数组和对象。
//       'class': 'count-to',
//       attrs: {},
//       style: {},
//       // 在render下使用dom的方法
//       // domProps: {
//       //   innerHTML: '123'
//       // },
//       props: {
//         endVal: 100
//       },
//       on: {
//         'on-animation-end': (val) => {
//           console.log('on-animation-end')
//         }
//       },
//       // 在render下使用click的方法
//       nativeOn: {
//         'click': () => {
//           console.log('click')
//         }
//       },
//       // 这里可以定义自定义的指令
//       directives: [],
//       // 作用域插槽
//       scopedSlots: {},
//       slot: '',
//       key: '',
//       ref: ''
//     })
// }
// render: h => h('div', [
//   // 这里只能写数组或字符串，不能去掉[]直接写h('span', '111')
//   // h('span', '111')
//   h('ul', {
//     on: {
//       'click': handleClick
//     }
//   }, getListEleArr(h))
// ])
render: h => h(App)
}).$mount('#app')
