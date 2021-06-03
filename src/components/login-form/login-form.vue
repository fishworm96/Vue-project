<template>
    <div class="loginBox">
      <Form ref="formInline"
            @keydown.enter.native="handleSubmit"
            :model="formInline"
            :rules="ruleInline"
            inline>
        <Form-item prop="user">
          <Input type="text"
                 v-model="formInline.userName"
                 placeholder="请填写任意用户名">
          <Icon type="ios-person-outline"
                slot="prepend"></Icon>
          </Input>
        </Form-item>
        <Form-item prop="password">
          <Input type="password"
                 v-model="formInline.password"
                 placeholder="请填写任意密码">
          <Icon type="md-lock"
                slot="prepend"></Icon>
          </Input>
        </Form-item>
        <Form-item>
          <Button type="primary"
                  @click="handleSubmit">登录</Button>
        </Form-item>
      </Form>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'LoginForm',
  data () {
    return {
      formInline: {
        userName: 'admin',
        password: '123456'
      },
      ruleInline: {
        userName: [
          { required: true, message: '请填写用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请填写密码', trigger: 'blur' },
        ]
      }
    }
  },
  methods: {
    ...mapActions([
      'login'
    ]),
    handleSubmit () {
      this.$refs.formInline.validate((valid) => {
        if (valid) {
          this.$emit('on-success-valid', {
            userName: this.formInline.userName,
            password: this.formInline.password
          })
        }
      })
    }
  }
}
</script>

<style lang="less">
.login {
  height: 100%;
  width: 100%;
  background: url("../../assets/img/login.jpg");
  display: flex;
  align-items: center;
  justify-content: center;
  .loginBox {
    width: 400px;
    height: 300px;
    background-color: rgba(200, 200, 200, 0.1);
    padding: 90px 20px 20px 20px;
    .ivu-form-item-content {
      width: 350px;
      height: 40px;
    }
    .ivu-btn.ivu-btn-primary {
      width: 350px;
      height: 40px;
    }
    input.ivu-input.ivu-input-default {
      height: 40px;
      font-size: 18px;
    }
    i.ivu-icon.ivu-icon-ios-person-outline {
      font-size: 17px;
    }
  }
}
</style>
