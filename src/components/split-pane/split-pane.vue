<template>
  <div class="split-pane-wrapper" ref="outer">
   <div class="pane pane-left" :style="{ width: leftOffsetPercent}">
     <slot name="left"></slot>
   </div>
   <div class="pane-trigger-con" @mousedown="handleMousedown" :style="{ left: triggerLeft, width: `${triggerWidth}px`}"></div>
   <div class="pane pane-right" :style="{ left: leftOffsetPercent}">
     <slot name="right"></slot>
   </div>
  </div>
</template>

<script>
export default {
  name: 'SplitPane',
  props: {
    // 初始偏移值
    value: {
      type: Number,
      default: 0.5
    },
    triggerWidth: {
      type: Number,
      default: 8
    },
      // 拖动条能拖动的最小值
  min: {
    type: Number,
    default: 0.1
  },
  // 拖动条能拖动的最大值
  max: {
    type: Number,
    default: 0.9
  }
  },
  data () {
    return {
      // 初始布局位置
      // leftOffset: 0.3,
      // 控制能否移动
      canMove: false,
      // 移动时控制拖动条初始值
      initOffset: 0
    }
  },
  computed: {
    leftOffsetPercent () {
      return `${this.value * 100}%`
    },
    triggerLeft() {
      // calc是css3的计算方法
      return `calc(${this.value * 100}% - ${this.triggerWidth / 2}px)`
    }
  },
  methods: {
    handleClick () {
      this.value -= 0.02
    },
    handleMousedown(event) {
      // 点击时控制拖动条
      document.addEventListener('mousemove', this.handleMousemove)
      // 松开拖动条撤销控制
      document.addEventListener('mouseup', this.handleMouseup)
      // 添加鼠标点击位置的距离
      this.initOffset = event.pageX - event.srcElement.getBoundingClientRect().left
      this.canMove = true
    },
    // event是事件对象
    handleMousemove(event) {
      if(!this.canMove) return
      const outerRect = this.$refs.outer.getBoundingClientRect()
      // event.pageX距离页面左侧距离
      // offset偏移的像素数
      // 这里this.initOffset + this.triggerWidth计算结果是鼠标点击拖动条的宽度。不会在点击时鼠标点击时移动到一个中心的位置。
      let offsetPercent = (event.pageX - this.initOffset + this.triggerWidth - outerRect.left) / outerRect.width
      // 控制拖动条，拖动最小值的时候使它不能再拖动。
      if(offsetPercent < this.min) offsetPercent = this.min
      if(offsetPercent > this.max) offsetPercent = this.max
      // 子向父传值
      // this.$emit('input', offsetPercent)
      // 使用$emit触发一个事件，这里固定update:，这里value就是前面传递的属性名。
      this.$emit('update:value', offsetPercent)
      // 计算出偏移的百分比
      // this.value = offsetPercent
    },
    handleMouseup() {
      this.canMove = false
    }
  }
}
</script>
<style lang="less">
.split-pane-wrapper {
  height: 100%;
  width: 100%;
  position: relative;
  .pane {
    height: 100%;
    top: 0;
    position: absolute;
    //&代表父级选择器
    &-left {
      // width: 30%;
      background: red;
    }
    &-right {
      right: 0;
      bottom: 0;
      // left: 30%;
      background: palegoldenrod;
    }
    &-trigger-con {
      height: 100%;
      background: blue;
      position: absolute;
      top: 0;
      z-index: 10;
      user-select: none;
      // 鼠标样式
      cursor: col-resize;
    }
  }
}
</style>