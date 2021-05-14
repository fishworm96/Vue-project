<template>
  <div class="split-pane-con">
    <!-- 这里传递value可以直接用v-mode="offset"这种写法 -->
    <!-- :value="offset" @input="handleInput"第二种写法 -->
    <!-- .sync，:value首先绑定offset值，并绑定事件用来更新offset这个值 -->
    <split-pane :value.sync="offset">
      <div slot="left">left</div>
      <div slot="right">right</div>
    </split-pane>
  </div>
</template>

<script>
import SplitPane from '_c/split-pane'
export default {
  components: {
    SplitPane
  },
  data() {
    return {
      offset: 0.8
    }
  },
  methods: {
    // handleInput(value) {
    //   this.offset = value
    // }
  }
}
</script>

<style lang="less">
  .split-pane-con {
    width: 400px;
    height: 200px;
    background-color: pink;
  }  
</style>