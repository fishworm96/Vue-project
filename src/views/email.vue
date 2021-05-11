<template>
  <div>
    <!-- 使用方法 -->
    <button @click="handleClick" >按钮</button>
  </div>
</template>
<script>
export default {
  methods() {
    // 把事件提交给bus的方法
    this.$bus.$emit('on-click', 'hello')
    // $emit是触发当前实例上的一些事件
  }
}
</script>