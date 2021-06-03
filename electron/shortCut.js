const { globalShortcut } = require('electron')

function registerBrowserViewDevTool() {
  if (!globalShortcut.isRegistered('CommandOrControl+I')) {
    const ret = globalShortcut.register('CommandOrControl+I', () => {
      // console.log('CommandOrControl+I is pressed')
      if (global.BROWSER_VIEW && global.BROWSER_VIEW.isShowed) {
        global.BROWSER_VIEW.toggleDevTools()
      } else {
        if (global.MAIN_WINDOW) {
          global.MAIN_WINDOW.webContents.toggleDevTools()
        }
      }
    })
    if (!ret) {
      console.log('registration failed')
    }
  }
}

exports.setShortCut = () => {
  registerBrowserViewDevTool()
}

exports.unSetShortCut = () => {
  globalShortcut.unregister('CommandOrControl+X')
}
