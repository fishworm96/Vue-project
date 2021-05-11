<template>
  <div>
    <a-input v-model="stateValue"></a-input>
    <p>{{ stateValue }}->{{inputValueLastLetter}}</p>
    <a-show :content="inputValue"></a-show>
    {{ appName }}
    <p>Username: {{userName}}</p>
    <p>{{appNameWithVersion}}</p>
    <button @click="handleChangeAppName">修改appName</button>
    {{appVersion}}
    <button @click="changeUerName">修改用户名</button>
    <button @click="registerModule">动态注册模块</button>
    <p v-for="(li, index) in todoList"
       :key="index">{{li}}</p>
  </div>
</template>

<script>
import AInput from '_c/AInput.vue'
import AShow from '_c/AShow.vue'
// 另一种方法
// import {mapState} from 'vuex'
// 命名空间方法
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'store',
  components: {
    AInput,
    AShow
  },
  computed: {
    // 命名空间方法
    ...mapState({
      userName: state => state.user.userName,
      appVersion: state => state.appVersion,
      // 使用方法，再进行判断，是否存在todoList。
      // todoList: state => state.todo ? state.todo.todoList : []
      todoList: state => state.user.todo ? state.user.todo.todoList : []
    }),
    stateValue: {
      get() {
        // 读取stateValue的时候就会调用这个方法，调用的stateValue就是return的stateValue
        return this.$store.state.stateValue
      },
      set(value) {
        // 调用stateValue时候就会改变set方法，set有一个参数就是新赋的值是什么。这里用commit通过mutation来修改。
        this.SET_STATE_VALUE(value)
      }
    },
    ...mapGetters([
      'appNameWithVersion'
    ]),
    inputValueLastLetter () {
      return this.inputValue.substr(-1, 1)
    },
    appNameWithVersion () {
      return this.$store.getters.appNameWithVersion
    },
    // ...mapState({
    //   // 对象方法
    //   appName: state => state.appName,
    //   // 模块要加模块名
    //   userName: state => state.user.userName
    // })
    // 数组方法
    // ...mapState(['appName'])

    appName () {
      return this.$store.state.appName
    },
    // userName () {
    //   // 这里要写模块名
    //   return this.$store.state.user.userName
    // }
  },
  data () {
    return {
      inputValue: ''
    }
  },
  methods: {
    ...mapMutations([
      'SET_USER_NAME',
      'SET_APP_NAME',
      'SET_STATE_VALUE'
    ]),
    ...mapActions([
      'updateAppName'
    ]),
    handleChangeAppName () {
      // 直接一个参数，对象的写法
      // this.$store.commit({
      //   // 这个type就是要提交方法的名称
      //   type: 'SET_APP_NAME',
      //   appName: 'newAppName'
      // })
      // this.SET_APP_NAME({
      //   appName: 'newAppName'
      // })
      this.updateAppName()
      // this.$store.commit('SET_APP_VERSION')
    },
    changeUerName () {
      this.SET_USER_NAME('vue-cource')
      //使用实例的方法
      // this.$store.dispatch('updateAppName', '123')
    },
    registerModule () {
      // 第一个参数是要动态添加的模块名称todo，
      // this.$store.registerModule('todo', {
      //   state: {
      //     todoList: [
      //       '学习mutations',
      //       '学习actions'
      //     ]
      //   }
      // })
      // 给user模块添加一个子模块
      this.$store.registerModule(['user', 'todo'], {
        state: {
          todoList: [
            '学习mutations',
            '学习actions'
          ]
        }
      })
    },
    handleStateValue (VAL) {
      this.SET_STATE_VALUE(VAL)
    }
  }
}
</script>