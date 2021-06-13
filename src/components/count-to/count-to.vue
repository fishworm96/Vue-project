<template>
  <div class="count-to-wrapper">
    <slot name="left"></slot>
    <span :class="countClass"
          :id="eleId">{{init}}</span>
    <i :class="unitClass">{{unitText}}</i>
    <slot name="right"></slot>
  </div>
</template>
<script>
import CountUp from 'countup'
export default {
  name: 'CountTo',
  computed: {
    eleId () {
      return `count_up_${this._uid}`
    },
    countClass () {
      return [
        'count-to-number',
        this.className
      ]
    },
    unitClass () {
      return [
        'count-to-text',
        this.countText
      ]
    }
  },
  data () {
    return {
      counter: {},
      unitText: ''
    }
  },
  props: {
    init: {
      type: Number,
      default: 0
    },
    /**
     * @description 起始值
     */
    startVal: {
      type: Number,
      default: 0
    },
    /**
     * @description 最终值
     */
    endVal: {
      type: Number,
      required: true
    },
    /**
     * @description 小数点后保留几位小数
     */
    decimals: {
      type: Number,
      default: 0
    },
    /**
     * @description 动画延迟开始时间
     */
    delay: {
      type: Number,
      default: 0
    },
    /**
     * @description 渐变时长
     */
    duration: {
      type: Number,
      default: 1
    },
    /**
     * @description 是否使用变速效果
     */
    useEasing: {
      type: Boolean,
      default: false
    },
    /**
     * @description 是否使用变速效果
     */
    useGrouping: {
      type: Boolean,
      default: true
    },
    /**
     * @description 分组符号
     */
    separator: {
      type: String,
      default: ''
    },
    /**
     * @description 整数和小数分割符号
     */
    decimal: {
      type: String,
      default: '.'
    },
    /**
 * @description 是否简化显示，设为true后会使用unit单位来做相关省略
 */
    simplify: {
      type: Boolean,
      default: false
    },
    /**
     * @description 自定义单位，如[3, 'K+'], [6, 'M+']即大于3位数小于6位数的用k+来做省略
     *              1000即显示为1K+
     */
    unit: {
      type: Array,
      default () {
        return [[3, 'K+'], [6, 'M+'], [9, 'B+']]
      }
    },
    className: {
      type: String,
      default: ''
    },
    countText: {
      type: String,
      deafult: ''
    }
  },
  methods: {
    getHandleVal (val, len) {
      return {
        endVal: parseInt(val / Math.pow(10, this.unit[len - 1][0])),
        unitText: this.unit[len - 1][1]
      }
    },
    transformValue (val) {
      let len = this.unit.length
      let res = {
        endVal: 0,
        unitText: ''
      }
      if (val < Math.pow(10, this.unit[0][0])) res.endVal = val
      else {
        for (let i = 1; i < len; i++) {
          if (val >= Math.pow(10, this.unit[i - 1][0]) && val < Math.pow(10, this.unit[i][0])) res = this.getHandleVal(val, i)
        }
      }
      if (val > Math.pow(10, this.unit[len - 1][0])) res = this.getHandleVal(val, len)
      return res
    },
    getValue (val) {
      let res = 0
      if (this.simplify) {
        let { endVal, unitText } = this.transformValue(val)
        this.unitText = unitText
        res = endVal
      } else {
        res = val
      }
      return res
    }
  },
  watch: {
    endVal (newVal, oldVal) {
      let endVal = this.getValue(newVal)
      this.counter.update(endVal)
    }
  },
  mounted () {
    this.$nextTick(() => {
      let endVal = this.getValue(this.endVal)
      this.counter = new CountUp(this.eleId, this.startVal, endVal, this.decimals, this.duration, {
        useEasing: this.useEasing,
        useGrouping: this.useGrouping,
        separator: this.separator,
        decimal: this.decimal
      })
      setTimeout(() => {
        this.counter.start()
      }, this.delay)
    })
  }
}
</script>