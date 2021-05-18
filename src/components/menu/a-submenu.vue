<template>
  <div>
    <ul class="a-submenu">
      <div class="a-submenu-titel" @click="handleClick">
      <slot name="title"></slot>
      <span class="shrink-icon" :style="{ transform: `rotateZ(${showChild ? 0 : 180}deg)` }">^</span>
      </div>
      <div v-show="showChild" class="a-submenu-child-box">
        <!-- 用来展示收缩效果 -->
        <slot></slot>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ASubmenu',
  data() {
    return {
      showChild: false
    }
  },
  methods: {
    handleClick() {
      this.showChild = !this.showChild
    }
  }
}
</script>

<style lang="less">
  .a-submenu {
    background: rgb(33, 35, 39);
    &-titel {
    color: #fff;
    position: relative;
    .shrink-icon {
      position: absolute;
      top: 4px;
      right: 10px;
    }
    }
    &-child-box {
      overflow: hidden;
      padding-left: 20px;
    }
    li {
      background: rgb(33, 35, 39);
    }
}
</style>