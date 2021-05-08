<template>
  <div class="about">
    <h1>This is an about page</h1>
    <b>{{food}}</b>
  </div>
</template>
<script>
export default {
  props: {
    food: {
      type: String,
      // 路由没有传值页面上显示的就是这个值
      default: 'apple'
    }
  }
}
</script>