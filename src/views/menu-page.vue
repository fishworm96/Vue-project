<template>
  <div class="menu-box">
    <!-- <a-menu>
      <a-menu-item>1111</a-menu-item>
      <a-menu-item>2222</a-menu-item>
      <a-submenu>
        <div slot="title">3333</div>
        <a-menu-item>3333-11</a-menu-item>
        <a-submenu>
          <div slot="title">3333-22</div>
          <a-menu-item>3333-22-11</a-menu-item>
          <a-menu-item>3333-22-22</a-menu-item>
        </a-submenu>
      </a-submenu>
    </a-menu> -->
    <a-menu>
      <!-- 用来循环一级菜单 -->
    <template v-for="(item, index) in list">
      <!-- 判断是否还有子菜单，没有子菜单就直接渲染。 -->
      <a-menu-item v-if="!item.children"
                   :key="`menu_item_${index}`">{{ item.title }}</a-menu-item>
                   <!-- 有子菜单，父向子传递数据 -->
      <re-submenu v-else
                  :key="`meun_item_${index}`"
                  :parent="item"
                  :index="index"></re-submenu>
    </template>
  </a-menu>
  </div>
</template>

<script>
import menuComponents from '_c/menu'
import ReSubmenu from './re-submenu.vue'
export default {
  name: 'menu_page',
  components: {
    ...menuComponents,
    ReSubmenu
  },
  data () {
    return {
      list: [
        {
          title: '111'
        }, {
          title: '222'
        }, {
          title: '333',
          children: [
            {
              title: '333-1'
            }, {
              title: '333-2',
              children: [
                {
                  title: '333-1-1'
                },
                {
                  title: '333-1-2'
                }
              ]
            },
          ]
        }
      ]
    }
  }
}
</script>

<style lang="less">
.menu-box {
  width: 300px;
  height: 400px;
}
</style>