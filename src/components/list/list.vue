<template>
  <div>
    <li v-for="(item, index) in list" :key="`list_item_${index}`">
      <!-- <span v-if="!render">{{ item.number }}</span>
      <render-dom v-else :render-func="render" :number="item.number"></render-dom> -->
      <slot :number="item.number"></slot>
    </li>
  </div>
</template>

<script>
import RenderDom from '_c/render-dom.js'
export default {
  name: 'List',
  components: {
    RenderDom
  },
  props: {
    list: {
      type: Array,
      default: () => []
    },
    // 如果想在span标签里显示这里的render就需要用到render组件。
    render: {
      type: Function,
      default: () => {}
    }
  }
}
</script>