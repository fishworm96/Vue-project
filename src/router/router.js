import Home from '@/views/Home.vue'

export default [
  {
    path: '/',
    //当问的也是首页
    alias: '/home_page',
    name: 'Home',
    component: Home,
    // 代表当前这个参数就是路由对象，如果想返回一个对象使用一个括号抱住，或者直接使用return {}
    props: router => ({
      //想根据query里的food来传入这个属性
      food: router.query.food
    }),
    beforeEnter: (to, from, next) => {
      next()
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    //传入一个对象，页面上显示的就是这个值。
    props: {
      food: 'banana'
    },
    meta: {
      //想让每个跳转的页面title都不一样
      title: '关于'
    }
  },
  //动态路由匹配
  {
    // name为动态路由参数
    path: '/argu/:name',
    name: 'argi',
    component: () => import('@/views/argu.vue'),
    //如果想传入值可以在这里配置，就会把这里的name传入到组件。就是浏览器输入的值。
    props: true
  },
  {
    // 封装count-to组件
    path: '/count-to',
    name: 'count_to',
    component: () => import('@/views/count-to.vue'),
  },
  {
    path: '/split-pane',
    name: 'split_pane',
    component: () => import('@/views/split-pane.vue'),
  },
  {
    path: '/render-page',
    name: 'render_page',
    component: () => import('@/views/render-page.vue'),
  },
  {
    path: '/menu-page',
    name: 'menu_page',
    component: () => import('@/views/menu-page.vue'),
  },
  {
    path: '/parent',
    name: 'parent',
    component: () => import('@/views/parent.vue'),
    children: [
      {
        path: 'child',
        component: () => import('@/views/child.vue')
      }
    ]
  },
  {
    path: '/named_view',
    //这里要多加个s，代表多个组件
    components: {
      //如果没有命名router-view就加载这个default组件
      default: () => import('@/views/child.vue'),
      email: () => import('@/views/email.vue'),
      tel: () => import('@/views/tel.vue')
    }
  },
  {
    path: '/main',
    //当我们访问/路径时就重定向到main路径
    /* redirect: '/'
    //也可以使用命名路由
    redirect: {
      name: 'home'
    } */
    //还可以使用一个方法
    redirect: to => {
      //这里必须return一个对象或字符串路径
      return {
        name: 'home'
      }
      //还可以直接简写成 to => '/'
    }
  },
  // 所以需要在这里添加一个配置，一定要放置在最后。因为他是从上自下执行的，如果放到上面会影响其他路由。
  {
    path: '/store',
    component: () => import('@/views/store.vue')
  },
  {
    path: '*',
    component: () => import('@/views/error_404.vue')
  }

]