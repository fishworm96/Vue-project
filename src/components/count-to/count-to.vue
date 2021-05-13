<template>
  <div>
    <slot name="left"></slot><span ref="number"
          :class="countClass"
          :id='eleId'></span>
    <slot name="right"></slot>
  </div>
</template>

<script>
import CountUp from 'countup'
//第一种引入样式
// import './count-to.less'
export default {
  name: 'CountTo',
  computed: {
    eleId () {
      // 每一个vue实例this都有一个_uid，这个_uid都不相同。把这个_uid和id值拼接。
      return `count_up_${this._uid}`
    },
    countClass () {
      return [
        'count-to-number',
        this.className
      ]
    }
  },
  data () {
    return {
      counter: {}
    }
  },
  props: {
    //@description 起始值
    startVal: {
      type: Number,
      default: 0
    },
    //@description 最终值
    endVal: {
      type: Number,
      require: true
    },
    //@description 小数点后保留几位小数
    decimals: {
      type: Number,
      default: 0
    },
    //@description 动画延迟开始时间
    delay: {
      type: Number,
      default: 0
    },
    //@description 渐变时常
    duration: {
      type: Number,
      default: 1
    },
    //@description 是否使用变速效果
    useEasing: {
      type: Boolean,
      defautl: false
    },
    //@description 是否使用分组
    useGrouping: {
      type: Boolean,
      default: true
    },
    //@description 分组符号
    separator: {
      type: String,
      default: ','
    },
    //@description 整数和小数分割符号
    decimal: {
      type: String,
      default: '.'
    },
    className: {
      type: String,
      default: ''
    }
  },
  methods: {
    getCount () {
      return this.$refs.number.innerText
    },
    emitEndEvent () {
      setTimeout(() => {
        this.$emit('on-animation-end', Number(this.getCount()))
      }, this.duration * 1000)
    }
  },
  watch: {
    // 更新值
    endVal (newVal, oldVal) {
      this.counter.update(newVal)
      this.emitEndEvent()
    }
  },
  mounted () {
    //因为mounted函数只是挂在dom，不确定是否已经渲染好，使用$nextTick方法，方法调用一个回调函数，会在渲染完毕后调用这个方法。在这里创建实例，第一个参数是id值。
    this.$nextTick(() => {
      //因为这个id是在全局使用的，同一个id值会发生冲突。所以需要计算属性创建不一样的id。
      this.counter = new CountUp(this.eleId, this.startVal, this.endVal, this.decimals, this.duration, {
        useEasing: this.useEasing,
        useGrouping: this.useGrouping,
        separator: 'this.separator',
        decimal: 'this.decimal'
      })
      setTimeout(() => {
        this.counter.start()
        this.emitEndEvent()
      }, this.delay)
    })
  }
}
</script>
<style lang="less">
// 第二种引入样式
  .count-to-number {
    color: pink
  }
  // 第三种引入样式
  // @import './count-to.less'
</style>