<template>
  <div class='login'>
    <login-form @on-success-valid="handleSubmit"></login-form>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import LoginForm from '_c/login-form'
export default {
  components: {
    LoginForm
  },
  name: 'login_page',
  methods: {
    ...mapActions([
      'login'
    ]),
    handleSubmit ({ userName, password }) {
      this.login({
        userName,
        password
      }).then(() => {
        console.log('success!!')
        this.$router.push({
          name: 'home_index'
        })
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>
