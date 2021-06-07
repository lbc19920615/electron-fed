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
        <a-button class="tool-bar__btn" @mousedown.stop="clickMin"
          ><i class="iconfont icon-minimize"
        /></a-button>
        <a-button class="tool-bar__btn" @mousedown.stop="clickMax"
                   v-if="!isFullScreen"
          ><i class="iconfont icon-normal-size"
        /></a-button>
        <a-button class="tool-bar__btn" @mousedown.stop="clickNormal"
                   v-if="isFullScreen"
          ><i class="iconfont icon-maximize"
        /></a-button>
        <a-button class="tool-bar__btn" @mousedown.stop="clickClose"
          ><i class="iconfont icon-close"
        /></a-button>
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
  .tool-bar__btn {
    margin-left: 10px;
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
    this.$ipc.on('main:win:unmaximize', this.onUnmaxsize)
  },
  beforeDestroy() {
    this.$ipc.off('main:win:unmaximize', this.onUnmaxsize)
  },
  methods: {
    onUnmaxsize() {
      console.log('unmaximize')
      // this.isFullScreen = false
    },
    clickMin(e) {
      e.stopPropagation()
      this.$callMain('win.minimize')
      // document.dispatchEvent(new CustomEvent('popup-hide'))
    },
    clickMax(e) {
      e.stopPropagation()
      this.$callMain('win.maximize').then(() => {
        this.isFullScreen = true
      })
    },
    clickNormal(e) {
      e.stopPropagation()
      this.$callMain('win.unmaximize').then(() => {
        this.isFullScreen = false
      })
    },
    clickClose(e) {
      e.stopPropagation()
      this.$callMain('win.close')
    }
  },
};
</script>
