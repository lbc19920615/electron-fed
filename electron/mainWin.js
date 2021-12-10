const {getCurrentBrowserViewId} = require("./current");
const {ipcMain} = require('electron')

exports.setEvent = function (win) {
  const eventNames = [
    'unmaximize'
  ]
  eventNames.forEach(eventName => {
    win.on(eventName, () => {
      win.webContents.send('main:win:' + eventName)
    })
  })
  ipcMain.on('win.toggle-dev-tools', (e, arg) => {
    // console.log(e, getCurrentBrowserViewId())
    let vid = getCurrentBrowserViewId();
    MAIN_WINDOW_VIEWS.get(vid).toggleDevTools()
  })
}
