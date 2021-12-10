<template>
  <div id="app"          @mousedown="fireEvent">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      current: ['mail'],
      openKeys: ['sub1']
    };
  },
  mounted() {
    let self = this;
    window.addEventListener('keydown', function (e) {
      if (e.ctrlKey && e.code === 'KeyD') {
        self.$callMain('win.toggle-dev-tools', {
          browerViewId: global.CURRENT_BROWSR_VIEW_KEY
        }).then(() => {


        })
      }

    })
  },
  watch: {
    openKeys(val) {
      console.log('openKeys', val);
    },
  },
  methods: {
    fireEvent() {
      document.dispatchEvent(new CustomEvent('popup-hide'))
    },
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
