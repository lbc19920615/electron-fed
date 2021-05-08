<template>
  <div class="page-view-test" v-loading="loading">
    <div class="page-view-test__scroller">
      <json-viewer
          :value="systemInfo"
          :expand-depth=5
          copyable
          boxed
          sort></json-viewer>
    </div>
    <a-button @click="getSystemInfo">get system info</a-button>
  </div>
</template>

<script>
import { getSystemInfo } from "@/api/main";

export default {
  name: "Test",
  data() {
    return {
      loading: false,
      currentPath: '',
      systemInfo: {}
    }
  },
  methods: {
    getSystemInfo() {
      this.loading = true
      getSystemInfo().then(res => {
        if (res.code !== 0) {
          return false
        }
        this.loading = false
        this.systemInfo = res.data
      })
    }
  }
}
</script>

<style lang="less" scoped>
.page-view-test {
  text-align: left;
  &__scroller {
    max-height: 360px;
    overflow: auto;
  }
}
</style>
