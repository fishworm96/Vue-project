import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './router'
import store from '@/store'
import { setTitle, setToken, getToken } from '@/lib/util.js'

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

// 模拟一个登录，实际是通过接口来判断的。
const HAS_LOGINED = false

router.beforeEach((to, from, next) => {
  to.meta && setTitle(to.meta.title)
  // if(to.name !== 'login') {
  //   // 如果已经登录就放行
  //   if(HAS_LOGINED) next()
  //   //如果没有登录就跳转到登录页面
  //   else next({ name: 'login' })
  // } else {
  //   // 如果跳转到的是登录页面，并且已经登录过了就跳转到首页
  //   if(HAS_LOGINED) next({ name: 'home'})
  //   //没有登录就放行，跳转套登录页面
  //   else next()
  // }

    // //获取token判断是否登录过
    // const token = getToken()
    // if (token) {
    //   store.dispatch('authorization', token).then(() => {
    //     if (to.name === 'login') next({ name: 'home' })
    //     else next()
    //   }).catch(() => {
    //     setToken('')
    //     next({ name: 'login' })
    //   })
    // } else {
    //   if (to.name === 'login') next()
    //   else next({ name: 'login' })
    // }

  const token = getToken()
  if (token) {
    if (!store.state.router.hasGetRules) {
      store.dispatch('authorization').then(rules => {
        store.dispatch('concatRoutes', rules).then(routers => {
          router.addRoutes(routers)
          next({ ...to, replace: true })
        }).catch(() => {
          next({ name: 'login' })
        })
      })
    } else {
      next()
    }
  } else {
    if (to.name === 'login') next()
    else next({ name: 'login' })
  }
})

export default router
