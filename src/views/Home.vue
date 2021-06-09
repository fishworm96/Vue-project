<template>
  <div class="home">
    <Row :gutter="20">
      <i-col :md="8" :lg="4" :xs="12" v-for="(infor, i) in inforCardData" :key="`infor_${i}`" style="height: 120px;padding-bottom: 10px">
        <infor-card shadow :color="infor.color" :icon="infor.icon" :icon-size="36" style="height: 100%">
        <count-to :end-val="infor.count" class="countSize" />
        <p>{{ infor.title }}</p>
        </infor-card>
      </i-col>
    </Row>
  </div>
</template>

<script>
import CountTo from '_c/count-to'
import InforCard from '_c/infor-card'
export default {
  name: 'home',
  components: {
    CountTo,
    InforCard
  },
  data () {
    return {
      inforCardData: [
        { title: '新增用户', icon: 'md-person-add', count: 803, color: '#2d8cf0' },
        { title: '累计点击', icon: 'md-locate', count: 232, color: '#19be6b' },
        { title: '新增问答', icon: 'md-help-circle', count: 142, color: '#ff9900' },
        { title: '分享统计', icon: 'md-share', count: 657, color: '#ed3f14' },
        { title: '新增互动', icon: 'md-chatbubbles', count: 12, color: '#E46CBB' },
        { title: '新增页面', icon: 'md-map', count: 14, color: '#9A66E4' }
      ],
      pieData: [
        { value: 335, name: '直接访问' },
        { value: 310, name: '邮件营销' },
        { value: 234, name: '联盟广告' },
        { value: 135, name: '视频广告' },
        { value: 1548, name: '搜索引擎' }
      ],
      barData: {
        Mon: 13253,
        Tue: 34235,
        Wed: 26321,
        Thu: 12340,
        Fri: 24643,
        Sat: 1322,
        Sun: 1324
      }
    }
  },
  computed: {

  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      // console.log(vm)
    })
  },
  beforeRouteLeave (to, from, next) {
    // const leave = confirm('您确定要离开吗？')
    // if (leave) next()
    // else next(false)
    next()
  },
  methods: {

  }
}
</script>
<style lang="less">
.home{
  .countSize {
    font-size: 50px;
  }
}
</style>
