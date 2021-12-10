import Vue from 'vue'
import antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import App from './App'
import router from './router'
import { VueAxios } from './utils/request'
import InjectIpc from '@/utils/injectIpc'
import store from './store'
import '@/styles/app.less'

// 全局注入Vuex
Vue.use(antd)
// mount axios to `Vue.$http` and `this.$http`
Vue.use(VueAxios)
// 全局注入IPC
Vue.use(InjectIpc)

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element, {
  size: 'medium'
})

import JsonViewer from 'vue-json-viewer'
Vue.use(JsonViewer)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



// window.addEventListener('keydown',e=>{
//   const {altKey,ctrlKey,metaKey,keyCode} =e;
//   console.log(altKey,ctrlKey,metaKey,keyCode)
//   // alert([altKey,ctrlKey,metaKey,keyCode]);
//   // if(ctrlKey){
//   //
//   // }
//   const currentWindow = global.electronRemote.BrowserWindow.getFocusedWindow().webContents
//   alert(currentWindow);
//   currentWindow && currentWindow.toggleDevTools();
//   e.preventDefault();
// },false);
