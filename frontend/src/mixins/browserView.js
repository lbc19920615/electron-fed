// eslint-disable-next-line no-unused-vars
export let BrowserViewMixin = ({computedKey} = {}) => {
  return {
    computed: {
      [computedKey] () {
        return this.$store.state.app.browserViewShowed
      }
    },
    methods: {
      setTopBrowserView(key) {
        this.$callMain('example.top.browserview', key).then(() => {
        //
        })
      },
      showBrowserView() {
        if (!this.$store.state.app.browserViewShowed) {
          this.$callMain('example.show.browserview', 'TabbedBrowserView').then(() => {
            this.$store.dispatch('SetBrowserViewShowed', true)
          })
        }
      },
      hideBrowserView() {
        if (this.$store.state.app.browserViewShowed) {
          this.$callMain('example.hide.browserview', 'TabbedBrowserView').then(() => {
            this.$store.dispatch('SetBrowserViewShowed', false)
          })
        }
      }
    }
  }
}
