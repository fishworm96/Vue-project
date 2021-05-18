<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <transition-group name="routerTransition">
      <router-view key="default" />
      <router-view key="email" name="email" />
      <router-view key="tel" name="tel" />
    </transition-group>

  </div>
</template>

<script>
export default {
  data () {
    return {
      routerTransition: ''
    }
  },
  watch: {
    //to代表路由对象
    '$router' (to) {
      // 在to的query里面找有没有transiName，首先要判断有没有query这个字段。都满足了才改名字。
      //想为某个页面展示特定特效可以用这个方式
      to.query && to.query.transitionName && (this.routerTransition = to.query.transitionName)
    }
  }
}
</script>

<style scoped lang="less">
// 这里是name的值。这里是页面进入的效果
.router-enter{
  opacity: 0;
}
.router-enter-active {
  transition: opacity 1s ease;
}
.router-enter-to {
  opacity: 1;
}
//页面注销离开的效果
.router-leave{
  opacity: 1;
}
.router-leave-active {
  transition: opacity 1s ease;
}
.router-leave-to {
  opacity: 0;
}

// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
