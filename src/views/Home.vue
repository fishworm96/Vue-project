<template>
  <div class="home">
    <!-- 如果没有传入参数，那么就是默认的apple -->
    <b>{{ food }}</b>
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">返回上一页</button>
    <button @click="handleClick('parent')">替换到parent</button>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  props: {
    food: {
      type: String,
      default: 'apple'
    }
  },
  beforeRouterEnter(to, from, next) {
    //跳转的页面此时this还没有加载出来，是不能用this的
    next(vm => {
      //这个vm就是组件的实例，这样就能在里面使用this了
    })
  },
  beforeRouterLeave(to, from, next) {
    //将要离开页面时调用钩子方法
    const leave = confirm('您确定要离开吗？')
    if(leave) next()
    else next(false)
  },
  methods: {
    handleClick(type) {
      // this.$router.go(-1)
      if(type === 'back') this.$router.back()
      else if(type === 'push') {
        this.$router.push({
          name: 'parent',
          query: {
            name: 'lison'
          }
          }
        )
      }else if (type === 'replace') {
        // replace替换，把当前的浏览历史替换成parent这个页面，之后再做回退会回到到parent
        this.$router.replace({
          name: 'parent'
        })
      }
    }
  }
}
</script>
