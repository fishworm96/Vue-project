<template>
  <div class="side-menu-wrapper">
    <slot></slot>
    <Menu ref="menu" :active-name="$route.name" :open-names="openNames" v-show="!collapsed" width="auto" theme="dark" @on-select="handleSelect">
      <template v-for="item in list">
        <re-submenu
          v-if="item.children && item.children.length > 1"
          :key="`menu_${item.children.name}`"
          :name="item.children.name"
          :parent="item"
        >
        </re-submenu>
        <menu-item v-else :key="`menu_${item.name}`" :name="item.children[0].name">
          <Icon :type="item.children[0].meta.icon" />
          {{ item.children[0].meta.title }}
        </menu-item>
        <!-- 待删 -->
        <!-- <menu-item v-else-if="!item.children" :key="`menu_${item.name}`" :name="item.name">
          <Icon :type="item.meta.icon" />
          {{ item.meta.title }}
        </menu-item> -->
      </template>
    </Menu>
      <div v-show="collapsed" class="drop-wrapper">
      <template v-for="item in list">
        <re-dropdown @on-select="handleSelect" v-if="item.children && item.children.length > 1" :show-title="false" icon-color="#fff" :key="`drop_${item.children.name}`" :parent="item"></re-dropdown>
        <Tooltip v-else transfer :content="item.children[0].meta.title" placement="right" :key="`drop_${item.children[0].name}`">
          <span @click="handleClick(item.children[0].name)" class="drop-menu-span">
            <Icon :type="item.children[0].meta.icon" color="#fff" :size="20"></Icon>
          </span>
        </Tooltip>
      </template>
    </div>
  </div>
</template>

<script>
import ReSubmenu from './re-submenu.vue'
import ReDropdown from './re-dropdown.vue'
import { mapState } from 'vuex'
import { getOpenArrByName } from '@/lib/util'
export default {
  name: 'SideMenu',
  components: {
    ReSubmenu,
    ReDropdown
  },
  props: {
    collapsed: {
      type: Boolean
    },
    list: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    ...mapState({
      routers: state => state.router.routers
    }),
    openNames () {
      return getOpenArrByName(this.$route.name, this.routers)
    }
  },
  watch: {
    openNames () {
      this.$nextTick(() => {
        this.$refs.menu.updateOpened()
      })
    }
  },
  methods: {
    handleSelect (name) {
      this.$router.push({
        name
      })
    },
    handleClick (name) {
      this.$router.push({name})
    }
  }
}
</script>

<style lang="less">
.side-menu-wrapper{
  width: 100%;
  .ivu-tooltip, .drop-menu-span{
    display: block;
    width: 100%;
    text-align: center;
    padding: 5px 0;
  }
  .drop-wrapper > .ivu-dropdown{
    display: block;
    padding: 5px;
    margin: 0 auto;
  }
  .ivu-select-dropdown {
    margin-left: 12px;
  }
}
</style>
