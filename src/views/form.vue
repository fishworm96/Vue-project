<template>
  <div class="form-wrapper">
    <form-group :list="formList"
                :url="url"></form-group>
  </div>
</template>

<script>
import FormGroup from '_c/form-group'
export default {
  components: {
    FormGroup
  },
  data () {
    return {
      url: '/data/formData',
      formList: [
        {
          name: 'name',
          type: 'i-input',
          value: '',
          label: '姓名',
          rule: [
            { required: true, message: 'not', trigger: 'blur' }
          ]
        },
        {
          name: 'range',
          type: 'slider',
          value: [10, 40],
          range: true,
          label: '范围'
        },
        {
          name: 'sex',
          type: 'i-select',
          value: '',
          label: '性别',
          children: {
            type: 'i-option',
            list: [
              { value: 'man', title: '男' },
              { value: 'woman', title: '女' }
            ]
          }
        },
        {
          name: 'educatioin',
          type: 'radio-group',
          value: 1,
          label: '学历',
          children: {
            type: 'radio',
            list: [
              { label: 1, title: '本科' },
              { label: 2, title: '硕士' },
              { label: 3, title: '博士' }
            ]
          }
        },
        {
          name: 'skill',
          type: 'checkbox-group',
          value: [],
          label: '技能',
          children: {
            type: 'checkbox',
            list: [
              { label: 1, title: 'Vue' },
              { label: 2, title: 'Node.js' },
              { label: 3, title: 'JS' }
            ]
          }
        },
        {
          name: 'inWork',
          type: 'i-switch',
          value: true,
          label: '在职'
        }
      ]
    }
  },
  methods: {

  }
}
</script>

<style lang="less">
.form-wrapper {
  padding: 20px;
}
</style>