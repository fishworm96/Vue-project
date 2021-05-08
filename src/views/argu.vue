<template>
  <div>
    <!-- {{ $route.params.name}} -->
    <!-- 这样这里可以只写name -->
    {{name}}
  </div>
</template>

<script>
export default {
  //作为属性传入
  props: {
    //这个属性是name
    name: {
      //可以设定类型，如果只想要是名字就只设定String类型
      type: String,
      //没有设定值，默认值。
      default: 'lison'
    }
  },
  // 路由发生变化，组件被复用的时候调用
  beforeRouterUpdate(to, from, next) {
    //这个时候组件已经被渲染了，可以使用this
  }
}
</script>