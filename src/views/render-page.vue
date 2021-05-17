<template>
  <div>
    <list :list="list" :style="{color: 'red'}">
      <count-to slot-scope="count" :end-val="count.number"></count-to>
    </list>
  </div>
</template>

<script>
import List from '_c/list'
import CountTo from '_c/count-to'
export default {
  data() {
    return {
      list: [
        { number: 100},
        { number: 45}
      ]
    }
  },
  components: {
    List,
    CountTo
  },
  methods: {
    // 使用JSX语法时这里一定要使用h
    renderFunc(h, number) {
      return (
        // notiveOn-click为原生绑定事件，on-'on-animation-end'为自定义事件。
        <CountTo nativeOn-click={this.handleClick} on-on-animation-end={this.handleEnd} endVal={number} style={{color: 'pink'}}></CountTo>
      )
    },
    handleClick(event) {
      console.log(event)
    },
    // 自定义事件
    handleEnd() {
      console.log('end')
    }
  }
}
</script>