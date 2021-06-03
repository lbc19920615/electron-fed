import Vuex from 'vuex'
import app from './modules/app'
import Vue from "vue";
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
  },
})
