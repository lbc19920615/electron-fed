const { globalShortcut } = require('electron')

function registerBrowserViewDevTool() {
  const ret = globalShortcut.register('CommandOrControl+X', () => {
    console.log('CommandOrControl+X is pressed')
  })

  if (!ret) {
    console.log('registration failed')
  }
}

exports.setShortCut = () => {
  registerBrowserViewDevTool()
}

exports.unSetShortCut = () => {
  globalShortcut.unregister('CommandOrControl+X')
}
