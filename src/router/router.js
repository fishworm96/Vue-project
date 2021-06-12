import Home from '@/views/Home.vue'
import Layout from '@/views/layout.vue'
export const routerMap = [
  {
    path: '/home',
    name: 'home',
    component: Layout,
    meta: {
      title: '首页',
    },
    children: [
      {
        path: 'home_index',
        name: 'home_index',
        meta: {
          title: '首页',
          icon: 'md-home'
        },
        component: Home
      }
    ]
  },
  // {
  //   path: '/about_page',
  //   name: 'about_page',
  //   component: Layout,
  //   meta: {

  //   },
  //   children: [{
  //     path: '/about',
  //     name: 'about',
  //     component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
  //     props: {
  //       food: 'banana'
  //     },
  //     meta: {
  //       title: '关于',
  //       icon: 'ios-book'
  //     }
  //   }]
  // },
  {
    path: 'count',
    name: 'count',
    component: Layout,
    children: [{
      path: '/count-to',
      name: 'count_to',
      meta: {
        title: '计算组件',
        icon: 'md-trending-up'
      },
      component: () => import('@/views/count-to.vue')
    }]
  },
  {
    path: 'upload',
    name: 'upload',
    component: Layout,
    children: [{
      path: '/upload_page',
      name: 'upload_page',
      meta: {
        title: '上传',
        icon: 'md-cloud-upload'
      },
      component: () => import('@/views/upload.vue')
    }]
  },
  // {
  //   path: '/form',
  //   name: 'form',
  //   component: Layout,
  //   meta: {

  //   },
  //   children: [{
  //     path: '/form_page',
  //     name: 'form_page',
  //     meta: {
  //       title: '大量表单处理',
  //       icon: 'ios-book'
  //     },
  //     component: () => import('@/views/form.vue')
  //   }]
  // },
  // {
  //   path: '/optimize_page',
  //   name: 'optimize_page',
  //   component: Layout,
  //   meta: {

  //   },
  //   children: [{
  //     path: '/optimize',
  //     name: 'optimize',
  //     meta: {
  //       title: 'optimize',
  //       icon: 'ios-book'
  //     },
  //     component: () => import('@/views/optimize.vue')
  //   },]
  // },
  {
    path: '/component',
    name: 'component',
    component: Layout,
    meta: {
      title: '表格',
      icon: 'ios-hammer'
    },
    children: [
      {
        path: 'table',
        name: 'table_page',
        meta: {
          title: '表格',
          icon: 'md-home'
        },
        component: () => import('@/views/table.vue')
      },
      {
        path: 'folder_tree',
        name: 'folder_tree',
        meta: {
          title: '文件夹',
          icon: 'md-home'
        },
        component: () => import('@/views/folder-tree/folder-tree.vue')
      },
      {
        path: 'params/:id',
        name: 'params',
        meta: {
          title: '参数',
          icon: 'md-home'
        },
        component: () => import('@/views/argu.vue'),
        props: true
      }
    ]
  },
  // {
  //   path: 'rander',
  //   name: 'rander',
  //   component: Layout,
  //   meta: {

  //   },
  //   children: [{
  //     path: '/render_page',
  //     name: 'render_page',
  //     meta: {
  //       title: 'rander函数计算页',
  //       icon: 'ios-book'
  //     },
  //     component: () => import('@/views/render-page.vue')
  //   }]
  // },
  {
    path: '/split',
    name: 'split',
    component: Layout,
    meta: {
      title: 'split'
    },
    children: [{
      path: '/split-pane',
      name: 'split_pane',
      meta: {
        title: '分割窗口',
        icon: 'ios-book'
      },
      component: () => import('@/views/split-pane.vue')
    },]
  },
  {
    path: '/multilevel',
    name: 'multilevel',
    component: Layout,
    meta: {
      title: '多级表格',
      icon: 'md-menu'
    },
    children: [
      {
        path: '/level-2-1',
        name: 'level-2-1',
        meta: {
          title: 'level-2-1',
          icon: 'md-funnel'
        },
        component: () => import('_c/multilevel/level-2-1.vue')
      },
      {
        path: '/level-2-2',
        name: 'level-2-2',
        meta: {
          title: 'level-2-2',
          icon: 'md-funnel'
        },
        component: () => import('_c/multilevel/level-2-2.vue')
      },
      {
        path: '/level-2-3',
        name: 'level-2-3',
        meta: {
          title: 'level-2-3',
          icon: 'md-funnel'
        },
        component: () => import('_c/multilevel/parentView.vue'),
        children: [
          {
            path: '/level-2-3-1',
            name: 'level-2-3-1',
            meta: {
              title: 'level-2-3-1',
              icon: 'md-funnel'
            },
            component: () => import('_c/multilevel/level-2-3/level-2-3-1.vue')
          },
          {
            path: '/level-2-3-2',
            name: 'level-2-3-2',
            meta: {
              title: 'level-2-3-2',
              icon: 'md-funnel'
            },
            component: () => import('_c/multilevel/level-2-3/level-2-3-2.vue')
          }
        ]
      }
    ]
  }
  // {
  //   path: '/parent',
  //   name: 'parent',
  //   meta: {
  //     title: 'parent'
  //   },
  //   component: () => import('@/views/parent.vue'),
  //   children: [
  //     {
  //       path: '/child',
  //       name: 'child',
  //       meta: {
  //         title: 'child',
  //         icon: 'ios-book'
  //       },
  //       component: () => import('@/views/child.vue')
  //     }
  //   ]
  // },
  // {
  //   path: '/named',
  //   name: 'named',
  //   component: Layout,
  //   meta: {
  //     title: 'named'
  //   },
  //   children: [{
  //     path: '/named_view',
  //     name: 'named_view',
  //     meta: {
  //       title: 'named_view',
  //       icon: 'ios-book'
  //     },
  //     components: {
  //       default: () => import('@/views/child.vue'),
  //       email: () => import('@/views/email.vue'),
  //       tel: () => import('@/views/tel.vue')
  //     }
  //   }]
  // },
  // {
  //   path: '/store_page',
  //   name: 'store',
  //   component: Layout,
  //   meta: {
  //     title: 'store'
  //   },
  //   children: [{
  //     path: '/store',
  //     name: 'store',
  //     meta: {
  //       title: '动态注册模块',
  //       icon: 'ios-book'
  //     },
  //     component: () => import('@/views/store.vue')
  //   }]
  // }
]

export const routes = [
  {
    path: '/',
    name: 'login',
    meta: {
      title: '登录'
    },
    component: () => import('@/views/login.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录'
    },
    component: () => import('@/views/login.vue')
  },
  {
    path: '/icon',
    name: 'icon',
    component: Layout,
    meta: {
      title: 'icon'
    },
    children: [{
      path: '/icon_page',
      name: 'icon_page',
      meta: {
        title: '图标',
        icon: 'ios-book'
      },
      component: () => import('@/views/icon_page.vue')
    }]
  },
  {
    path: '*',
    component: () => import('@/views/error_404.vue')
  }
]
