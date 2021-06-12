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
      endVal: ''
    }
  },
  methods: {

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
</style>