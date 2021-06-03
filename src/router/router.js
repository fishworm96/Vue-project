import Home from '@/views/Home.vue'
import Layout from '@/views/layout.vue'
export const routerMap = [
  {
    path: '/home',
    name: 'home',
    component: Layout,
    meta: {
      title: '首页',
      hideInMenu: true
    },
    children: [
      {
        path: 'home_index',
        name: 'home_index',
        meta: {
          title: '首页',
          hideInMenu: true
        },
        component: Home
      }
    ]
  },
  {
    path: '/about_page',
    name: 'about_page',
    component: Layout,
    meta: {

    },
    children: [{
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
      props: {
        food: 'banana'
      },
      meta: {
        title: '关于'
      }
    }]
  },
  {
    path: 'count',
    name: 'count',
    component: Layout,
    meta: {

    },
    children: [{
      path: '/count-to',
      name: 'count_to',
      meta: {
        title: '计算组件'
      },
      component: () => import('@/views/count-to.vue')
    }]
  },

  {
    path: '/menu_page',
    name: 'menu_page',
    meta: {
      title: '菜单页'
    },
    component: () => import('@/views/menu-page.vue')
  },
  {
    path: 'upload',
    name: 'upload',
    component: Layout,
    meta: {

    },
    children: [{
      path: '/upload_page',
      name: 'upload_page',
      meta: {
        title: '上传'
      },
      component: () => import('@/views/upload.vue')
    }]
  },
  {
    path: '/form',
    name: 'form',
    component: Layout,
    meta: {

    },
    children: [{
      path: '/form_page',
      name: 'form_page',
      meta: {
        title: '大量表单处理'
      },
      component: () => import('@/views/form.vue')
    }]
  },
  {
    path: '/optimize',
    name: 'optimize',
    meta: {
      title: 'optimize'
    },
    component: () => import('@/views/optimize.vue')
  },
  {
    path: '/component',
    name: 'component',
    component: Layout,
    meta: {
      title: '表格'
    },
    children: [
      {
        path: 'table',
        name: 'table_page',
        meta: {
          title: '表格'
        },
        component: () => import('@/views/table.vue')
      },
      {
        path: 'folder_tree',
        name: 'folder_tree',
        meta: {
          title: '文件夹'
        },
        component: () => import('@/views/folder-tree/folder-tree.vue')
      },
      {
        path: 'params/:id',
        name: 'params',
        meta: {
          title: '参数'
        },
        component: () => import('@/views/argu.vue'),
        props: true
      }
    ]
  },
  {
    path: 'rander',
    name: 'rander',
    component: Layout,
    meta: {

    },
    children: [{
      path: '/render_page',
      name: 'render_page',
      meta: {
        title: 'rander函数计算页'
      },
      component: () => import('@/views/render-page.vue')
    }]
  },
  {
    path: '/split-pane',
    name: 'split_pane',
    meta: {
      title: '分割窗口'
    },
    component: () => import('@/views/split-pane.vue')
  },
  {
    path: '/parent',
    name: 'parent',
    meta: {
      title: 'parent'
    },
    component: () => import('@/views/parent.vue'),
    children: [
      {
        path: 'child',
        name: 'child',
        meta: {
          title: 'child'
        },
        component: () => import('@/views/child.vue')
      }
    ]
  },
  {
    path: '/named_view',
    name: 'named_view',
    meta: {
      title: 'named_view'
    },
    components: {
      default: () => import('@/views/child.vue'),
      email: () => import('@/views/email.vue'),
      tel: () => import('@/views/tel.vue')
    }
  },
  {
    path: '/store',
    name: 'store',
    meta: {
      title: '动态注册模块'
    },
    component: () => import('@/views/store.vue')
  }
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
    path: '/icon_page',
    name: 'icon_page',
    meta: {
      title: '图标'
    },
    component: () => import('@/views/icon_page.vue')
  },
  {
    path: '*',
    component: () => import('@/views/error_404.vue')
  }
]
