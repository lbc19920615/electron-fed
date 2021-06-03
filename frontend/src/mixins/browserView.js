// eslint-disable-next-line no-unused-vars
export let BrowserViewMixin = ({computedKey} = {}) => {
  return {
    computed: {
      [computedKey] () {
        return this.$store.state.app.browserViewShowed
      }
    },
    methods: {
      showBrowserView() {
        if (!this.$store.state.app.browserViewShowed) {
          this.$callMain('example.show.browserview').then(() => {
            this.$store.dispatch('SetBrowserViewShowed', true)
          })
        }
      },
      hideBrowserView() {
        if (this.$store.state.app.browserViewShowed) {
          this.$callMain('example.hide.browserview').then(() => {
            this.$store.dispatch('SetBrowserViewShowed', false)
          })
        }
      }
    }
  }
}