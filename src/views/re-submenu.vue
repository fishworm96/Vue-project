<template>
  <div>
    <a-submenu>
      <div slot="title">{{ parent.title }}</div>
      <template v-for="(item, i) in parent.children">
      <!-- 没有子菜单，直接渲染 -->
      <a-menu-item v-if="!item.children" :key="`meun_item_${index}_${i}`">{{ item.title }}</a-menu-item>
      <!-- 有就显示这里 -->
      <re-submenu v-else :key="`meun_item_${index}_${i}`" :parent="item"></re-submenu>
      </template>
    </a-submenu>
  </div>
</template>

<script>
import menuComponents from '_c/menu'
export default {
  name: 'ReSubmenu',
  components: {
    ...menuComponents
  },
  props: {
    parent: {
      type: Object,
      // 对象需要返回一个回调函数，({})简写
      default: () => ({})
    },
    // 传递的索引号
    index: Number
  }
}
</script>