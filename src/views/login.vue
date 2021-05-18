<template>
  <div>
    <input v-model="userName">
    <input type="password" v-model="password">
    <button @click="handleSubmit">登录</button>
  </div>
</template>

<script>
// 使用工具函数引入
import { mapActions } from 'vuex'
export default {
  name: 'login_page',
  data() {
    return {
      userName: '',
      password: ''
    }
  },
  methods: {
    // 使用拆分操作符展开，这里的login就是store/model/user.js下定义的login
    ...mapActions([
      'login'
    ]),
    handleSubmit() {
      this.login({
        userName: this.userName,
        password: this.password
      }).then(() => {
        console.log('success')
        // 成功就跳转到home页
        this.$router.push({
          name: 'home'
        })
        // 失败就返回错误信息
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>