<template>
  <el-header ref="toolBar" class="tool-bar">
    <el-row
      class="tool-bar__inner"
      type="flex"
      justify="space-between"
      align="middle"
    >
      <div>&nbsp;</div>
      <el-row type="flex" justify="center" align="middle">
        <el-button size="mini" @click.stop="clickMin"
          ><i class="iconfont icon-minimize"
        /></el-button>
        <el-button size="mini" @click.stop="clickMax"
                   v-if="!isFullScreen"
          ><i class="iconfont icon-normal-size"
        /></el-button>
        <el-button size="mini" @click.stop="clickNormal"
                   v-if="isFullScreen"
          ><i class="iconfont icon-maximize"
        /></el-button>
        <el-button size="mini" @click.stop="clickClose"
          ><i class="iconfont icon-close"
        /></el-button>
      </el-row>
    </el-row>
  </el-header>
</template>

<style lang="less" >
.tool-bar {
  -webkit-user-select: none;
  background-color: transparent;
  height: 54px !important;
  &__inner {
    display: flex;
    justify-content: space-between;
    height: 100%;
  }
}
</style>

<script>
export default {
  name: "ToolBar",
  data() {
    let ret = {
      isFullScreen: false
    }
    if (global.electronRemote) {
      ret.isFullScreen = global.electronRemote.getCurrentWindow().fullScreen
    }
    return ret
  },
  mounted() {
    if (global.makeDraggable) {
      global.makeDraggable(this.$refs.toolBar.$el);
    }
  },
  methods: {
    clickMin() {
      alert(1);
      // document.dispatchEvent(new CustomEvent('popup-hide'))
    },
    clickMax() {
      this.isFullScreen = true
    },
    clickNormal() {
      this.isFullScreen = false
    },
    clickClose() {
      alert(1);
    }
  },
};
</script>
