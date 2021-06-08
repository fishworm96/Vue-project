<template>
  <div>
    <Icon :class="triggerClasses"
          @click.native="handleCollapsed"
          type="md-menu"
          :size="32" />
  </div>
</template>

<script>
export default {
  name: 'HeaderBar',
  props: {
    collapsed: Boolean
  },
  computed: {
    triggerClasses () {
      return [
        'trigger-icon',
        this.collapsed ? 'rotate' : ''
      ]
    }
  },
  methods: {
    handleCollapsed () {
      this.$emit('on-change', !this.collapsed)
    }
  }
}
</script>

<style lang="less" scope>
.trigger-icon {
  cursor: pointer;
  transition: transform 0.3s ease;
  &.rotate {
    transform: rotateZ(-90deg);
    transition: transform 0.3s ease;
  }
}
</style>