<template>
  <div class="user-avatar-dropdown">
    <Dropdown @on-click="handleClick">
      <Badge>
        <Avatar :src="userAvatar" />
      </Badge>
      <Icon :size="18"
            type="md-arrow-dropdown"></Icon>
      <DropdownMenu slot="list">
        <DropdownItem name="message">
          消息中心<Badge style="margin-left: 10px"
                 :count="messageUnreadCount"></Badge>
        </DropdownItem>
        <DropdownItem name="logout">退出登录</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'User',
  props: {
    userAvatar: {
      type: String,
      default: ''
    }
  },
  methods: {
    ...mapActions([
      'logout'
    ]),
    handlelogout () {
      this.logout().then(res => {
        this.$router.push({
          name: 'login'
        })
      })
    },
    handleClick (name) {
      switch (name) {
        case 'logout': this.handlelogout()
          break
        case 'message': this.message()
          break
      }
    }
  }
}
</script>

<style lang="less">
.user {
  &-avatar-dropdown {
    float: right;
    cursor: pointer;
    // display: inline-block;
    // height: 64px;
    vertical-align: middle;
    // line-height: 64px;
    .ivu-badge-dot {
      top: 16px;
    }
  }
}
</style>