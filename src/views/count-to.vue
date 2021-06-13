<template>
  <div>
    <Row :gutter="14">
      <i-col span="3">
        <Card>
          <p slot="title">
            <Icon type="ios-color-wand"></Icon>
            count-to组件基础用法
          </p>
          <Row type="flex"
               justify="center"
               align="middle"
               class="countto-page-row">
            <div class="count-to-con">
              <count-to :endVal="1234"></count-to>
            </div>
          </Row>
        </Card>
      </i-col>
      <i-col span="5">
        <Card>
          <p slot="title">
            <Icon type="ios-color-wand"></Icon>
            可添加左右文字
          </p>
          <Row type="flex"
               justify="center"
               align="middle"
               class="countto-page-row">
            <div class="count-to-con">
              <count-to :endVal="1234">
                <span slot="left">Total:&nbsp;</span>
                <span slot="right">&nbsp;times</span>
              </count-to>
            </div>
          </Row>
        </Card>
      </i-col>
      <i-col span="8">
        <Card>
          <p slot="title">
            <Icon type="ios-color-wand"></Icon>
            自定义样式
          </p>
          <Row type="flex"
               justify="center"
               align="middle"
               class="countto-page-row">
            <div class="count-to-con">
              <count-to :endVal="1234"
                        class-name="class-name">
                <span class="slot-text"
                      slot="left">Total:&nbsp;</span>
                <span class="slot-text"
                      slot="right">&nbsp;times</span>
              </count-to>
            </div>
          </Row>
        </Card>
      </i-col>
      <i-col span="8">
        <Card>
          <p slot="title">
            <Icon type="ios-color-wand"></Icon>
            设置数据格式
          </p>
          <Row type="flex"
               justify="center"
               align="middle"
               class="countto-page-row">
            <div class="count-to-con">
              <count-to :endVal="1234"
                        class-name="class-name"
                        :decimals="2">
                <span class="slot-text"
                      slot="left">Total:&nbsp;</span>
                <span class="slot-text"
                      slot="right">&nbsp;times</span>
              </count-to>
            </div>
          </Row>
        </Card>
      </i-col>
    </Row>
    <Row :gutter="14">
      <i-col span="8">
        <Card>
          <p slot="title">
            <Icon type="ios-color-wand"></Icon>
            转换单位简化数据
          </p>
          <Row type="flex"
               justify="center"
               align="middle"
               class="countto-page-row">
            <div class="count-to-con">
              <count-to :endVal="1234"
                        class-name="class-name"
                        count-text="count-to-text"
                        :simplify="true">
                <span slot="left"
                      class="slot-text">Total:&nbsp;</span>
                <span slot="right"
                      class="slot-text">&nbsp;times</span>
              </count-to>
            </div>
          </Row>
        </Card>
      </i-col>
      <i-col span="8">
        <Card>
          <p slot="title">
            <Icon type="ios-color-wand"></Icon>
            自定义单位
          </p>
          <Row type="flex"
               justify="center"
               align="middle"
               class="countto-page-row">
            <div class="count-to-con">
              <count-to :endVal="123"
                        class-name="class-name">
                <span class="slot-text"
                      slot="left">原始数据：123=></span>
              </count-to>
              <count-to :endVal="1234"
                        class-name="class-name"
                        :simplify="true"
                        :unit="unit">
                <span class="slot-text"
                      slot="left">原始数据：1234=></span>
              </count-to>
              <count-to :endVal="12345"
                        class-name="class-name"
                        :simplify="true"
                        :unit="unit">
                <span class="slot-text"
                      slot="left">原始数据：12345=></span>
              </count-to>
            </div>
          </Row>
        </Card>
      </i-col>
      <i-col span="8">
        <Card>
          <p slot="title">
            <Icon type="ios-color-wand"></Icon>
            可异步更新数据
          </p>
          <Row type="flex"
               justify="center"
               align="middle"
               class="countto-page-row">
            <div class="count-to-con">
              <count-to :endVal="this.asynEndVal"
                        class-name="class-name">
                <span class="slot-text"
                      slot="left">Total:&nbsp;</span>
                <span class="slot-text"
                      slot="right">&nbsp;times</span>
              </count-to>
            </div>
          </Row>
        </Card>
      </i-col>
    </Row>
    <Row :gutter="14">
      <i-col span="24">
        <Card>
          <p slot="title">
            <Icon type="ios-analytics"></Icon>
            综合实例
          </p>
          <Row type="flex"
               justify="center"
               align="middle"
               class="countto-page-row">
            <div class="count-to-con">
              <count-to :endVal="integratedEndVal"
                        class-name="class-name"
                        :simplify="true"
                        :unit="unit2"
                        :delay="500">
                <span class="slot-text"
                      slot="left">原始数据:{{integratedEndVal}} =></span>
                <span class="slot-text"
                      slot="right">&nbsp;times</span>
              </count-to>
            </div>
          </Row>
        </Card>
      </i-col>
    </Row>
  </div>
</template>
<script>
import CountTo from '_c/count-to'
export default {
  name: 'count_to',
  components: {
    CountTo
  },
  data () {
    return {
      endVal: 0,
      unit: [[3, '千多'], [4, '万多'], [5, '十万多']],
      unit2: [[1, '十多'], [2, '百多'], [3, '千多'], [4, '万多'], [5, '十万多'], [6, '百万多'], [7, '千万多'], [8, '亿多']],
      asynEndVal: 487,
      integratedEndVal: 3
    }
  },
  methods: {
    init () {
      setInterval(() => {
        this.asynEndVal += parseInt(Math.random() * 20)
        this.integratedEndVal += parseInt(Math.random() * 30)
      }, 2000)
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style lang="less">
.countto-page-row {
  height: 200px;
}
.count-to-con {
  display: block;
  width: 100%;
  text-align: center;
}
.class-name {
  font-size: 50px;
  color: #dc9387;
}
.slot-text {
  font-size: 22px;
}
.count-to-text {
  font-size: 30px;
  font-style: normal;
  color: #dc9387;
}
</style>