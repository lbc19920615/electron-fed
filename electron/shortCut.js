const { globalShortcut, BrowserWindow } = require('electron')
const capture = require('./capture')

function registerBrowserViewDevTool() {
  if (!globalShortcut.isRegistered('CommandOrControl+I')) {
    const ret = globalShortcut.register('CommandOrControl+I', () => {
      // console.log('CommandOrControl+I is pressed')
      // if (global.MAIN_WINDOW) {
      //   global.MAIN_WINDOW.webContents.toggleDevTools()
      // }
      let win = BrowserWindow.getFocusedWindow()
      if (win && win.webContents) {
        win.webContents.toggleDevTools()
      }
    })
    if (!ret) {
      console.log('registration failed')
    }
  }
}

exports.setShortCut = () => {
  registerBrowserViewDevTool()
  capture.registerShortCut()
}

exports.unSetShortCut = () => {
  globalShortcut.unregister('CommandOrControl+X')
}
