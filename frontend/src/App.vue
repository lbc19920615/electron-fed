<template>
  <div id="app">
    <Layout />
    <iframe frameborder="0" class="visible" style="position: fixed; width: 100%; left: 0; top: 0; z-index: 1000;" nodeintegration src="/webview2.html"></iframe>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import { Button } from 'ant-design-vue'
import Layout from './views/Layout'

export default {
  name: 'App',
  components: {
    Layout
  },
  data() {
    return {
      current: ['mail'],
      openKeys: ['sub1']
    };
  },
  watch: {
    openKeys(val) {
      console.log('openKeys', val);
    },
  },
  methods: {
    handleClick(e) {
      console.log('click', e);
    },
    titleClick(e) {
      console.log('titleClick', e);
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
</style>
