const app = {
  state: {
    browserViewShowed: false
  },
  mutations: {
    SET_BRPWSER_VIEW_SHOWED: (state, v) => {
      state.browserViewShowed = v
    }
  },
  actions: {
    SetBrowserViewShowed({commit}, v) {
      commit('SET_BRPWSER_VIEW_SHOWED', v)
    }
  }
}

export default app
