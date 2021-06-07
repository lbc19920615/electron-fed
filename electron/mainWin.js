
exports.setEvent = function (win) {
  const eventNames = [
    'unmaximize'
  ]
  eventNames.forEach(eventName => {
    win.on(eventName, () => {
      win.webContents.send('main:win:' + eventName)
    })
  })
}
