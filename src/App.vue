<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </div>
    <!-- <transition-group name="routerTransition"> -->
    <router-view key="default" />
    <router-view key="email"
                 name="email" />
    <router-view key="tel"
                 name="tel" />
    <!-- </transition-group> -->

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

<style lang="less">
html,
body {
  height: 100%;
}
body {
  margin: 0;
}
// 这里是name的值。这里是页面进入的效果
.router-enter {
  opacity: 0;
}
.router-enter-active {
  transition: opacity 1s ease;
}
.router-enter-to {
  opacity: 1;
}
//页面注销离开的效果
.router-leave {
  opacity: 1;
}
.router-leave-active {
  transition: opacity 1s ease;
}
.router-leave-to {
  opacity: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  height: 100%;
}
@font-face {
  font-family: "./assets/font/iconfont";
  src: url("./assets/font/iconfont.eot");
  src: url("./assets/font/iconfont.eot?#iefix") format("embedded-opentype"),
    url("./assets/font/iconfont.woff") format("woff"),
    url("./assets/font/iconfont.svg#iconfont") format("svg");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
.icon-svg {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
