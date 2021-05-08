import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import {setTitle} from '@/lib/utill.js'

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

// 模拟一个登录，实际是通过接口来判断的。
const HAS_LOGINED = true

router.beforeEach((to, from, next) => {
  to.meta && setTitle(to.meta.title)
  //to代表即将跳转的路由对象
  //form代表从哪里跳转过来
  //next代表放行
  if(to.name !== 'login') {
    // 如果已经登录就放行
    if(HAS_LOGINED) next()
    //如果没有登录就跳转到登录页面
    else next({ name: 'login' })
  } else {
    // 如果跳转到的是登录页面，并且已经登录过了就跳转到首页
    if(HAS_LOGINED) next({ name: 'home'})
    //没有登录就放行，跳转套登录页面
    else next()
  }
})


export default router
