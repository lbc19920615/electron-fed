<template>
  <a-layout-header ref="toolBar" class="tool-bar"
  >
    <a-row class="tool-bar__inner" type="flex" justify="center" align="center">
      <div>&nbsp;</div>
      <a-row type="flex" justify="center" align="center">
        <a-button @mousedown.stop="clickMin"><a-icon type="minus" /></a-button>
      </a-row>
    </a-row>
  </a-layout-header>
</template>

<style lang="less" >
.tool-bar {
  -webkit-user-select: none;
  background-color: transparent;
  height: 32px;
  margin: 10px;
  &__inner {
    display: flex;
    justify-content: space-between;
  }
}
</style>

<script>


export default {
  name: 'ToolBar',
  data() {
    return {}
  },
  mounted() {
    if (global.makeDraggable) {
      console.log(this.$refs.toolBar)
      var clear = global.makeDraggable(this.$refs.toolBar.$el)
      console.log(clear)
    }
  },
  methods: {
    clickMin() {
      alert(1)
      // document.dispatchEvent(new CustomEvent('popup-hide'))
    }
  }
}
</script>