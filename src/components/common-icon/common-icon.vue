<template>
  <component :is="IconType" :type="iconName" :color="iconColor" :size="iconSize"></component>
</template>

<script>
import IconFont from '_c/icon-font'
export default {
  name: 'common_icon',
  components: {
    IconFont
  },
  props: {
    icon: {
      type: String,
      required: true
    },
    color: String,
    size: Number
  },
  computed: {
    IconType () {
      return this.icon.indexOf('_') === 0 ? 'IconFont' : 'Icon'
    },
    iconName () {
      return this.iconType === 'IconFont' ? this.getCustomIconName(this.icon) : this.icon
    },
    iconSize () {
      return this.size || (this.iconType === 'IconFont' ? 12 : undefined)
    },
    iconColor () {
      return this.color || ''
    }
  },
  methods: {
    getCustomIconName (iconName) {
      return iconName.slice(1)
    }
  }

}
</script>

<style lang="less">
  
</style>