<template>
  <div class="layout-wrapper">
    <Layout class="layout-outer">
      <Sider :width="200"
             collapsible
             hide-trigger
             reverse-arrow
             v-model="collapsed">
        <side-menu :collapsed="collapsed"
                   :list="routers"
                   class="sider-outer"></side-menu>
      </Sider>
      <Layout>
        <Header class="header-wrapper">
          <Icon :class="triggerClasses"
                @click.native="handleCollapsed"
                type="md-menu"
                :size="32" />
          <user :user-avatar="userAvatar" />

        </Header>
        <Content class="content-con">
          <div>
            <Tabs type="card"
                  @on-click="handleClickTab"
                  :value="getTabNameByRoute($route)">
              <TabPane :label="labelRender(item)"
                       :name="getTabNameByRoute(item)"
                       v-for="(item, index) in tabList"
                       :key="`tabNav${index}`"></TabPane>
            </Tabs>
          </div>
          <div class="view-box">
            <Card shadow
                  class="page-card">
              <router-view />
            </Card>
          </div>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
// import HeaderBar from '_c/header-bar'
import SideMenu from '_c/side-menu'
import User from '_c/user'
import { mapState, mapMutations, mapActions } from 'vuex'
import { getTabNameByRoute, getRouteById } from '@/lib/util'
export default {
  components: {
    SideMenu,
    User,
    // HeaderBar
  },
  data () {
    return {
      collapsed: false,
      getTabNameByRoute
    }
  },
  computed: {
    triggerClasses () {
      return [
        'trigger-icon',
        this.collapsed ? 'rotate' : ''
      ]
    },
    ...mapState({
      collapsedStatus: state => state.tabNav.collapsedStatus,
      tabList: state => state.tabNav.tabList,
      routers: state => state.router.routers.filter(item => {
        return item.path !== '*' && item.name !== 'login'
      })
    }),
    userAvatar () {
      return this.$store.state.user.avatarImgPath
    }
  },
  methods: {
    ...mapActions([
      'handleRemove'
    ]),
    ...mapMutations([
      'CHANGE_COLLAPSED'
    ]),
    // collapsedChange (state) {
    //   this.collapsed = state
    // },
    handleClickTab (id) {
      let route = getRouteById(id)
      this.$router.push(route)
    },
    handleTabRemove (id, event) {
      event.stopPropagation()
      this.handleRemove({
        id,
        $route: this.$route
      }).then(nextRoute => {
        this.$router.push(nextRoute)
      })
    },
    labelRender (item) {
      return h => {
        return (
          <div>
            <span>{item.meta.title}</span>
            <icon nativeOn-click={this.handleTabRemove.bind(this, getTabNameByRoute(item))} type="md-close-circle" style="line-height:10px;padding-left: 10px"></icon>
          </div>
        )
      }
    },
    handleCollapsed () {
      this.collapsed = !this.collapsed
    }
  },
  watch: {
    collapsed () {
      this.$store.commit('CHANGE_COLLAPSED', this.collapsed)
    }
  },
  created () {
      this.collapsed = this.collapsedStatus
  }
}
</script>

<style lang="less">
.layout-wrapper,
.layout-outer {
  height: 100%;
  .header-wrapper {
    background: #fff;
    box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.1);
    padding: 0 23px;
    .trigger-icon {
      cursor: pointer;
      transition: transform 0.3s ease;
      &.rotate {
        transform: rotateZ(-90deg);
        transition: transform 0.3s ease;
      }
    }
  }
  .sider-outer {
    height: 100%;
    overflow: auto;
    .ivu-layout-sider-children {
      margin-right: -20px;
      overflow-y: scroll;
      overflow-x: hidden;
    }
  }
  .sider-outer::-webkit-scrollbar {
    width: 0;
  }
  .content-con {
    padding: 0;
    .ivu-tabs-bar {
      margin-bottom: 0;
    }
    .view-box {
      padding: 0;
    }
  }
  .page-card {
    background: #F5F7F9;
    min-height: ~"calc(100vh - 84px)";
  }
  // .ivu-icon-md-close-circle:before {
  //   padding-left: 3px;
  // }
}
</style>
