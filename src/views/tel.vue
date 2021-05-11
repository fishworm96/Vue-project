<template>
  <div>
    <!-- 接收事件 -->
    <p>{{message}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: ''
    }
  },
  mounted () {
    this.$bus.$on('on-click', mes => {
      // $on是给当前事件绑定一个事件监听
      this.message = mes
    })
  }
}
</script>