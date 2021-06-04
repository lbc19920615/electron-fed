const { answerRenderer } = require('./index')

answerRenderer('example.hello', async (msg) => {
  let newMsg = msg + " +1"
  let reply = ''
  reply = '收到：' + msg + '，返回：' + newMsg
  return reply
})

answerRenderer('example.top.browserview', async (key) => {
  if (global.MAIN_WINDOW_VIEWS.has((key))) {
    let view = global.MAIN_WINDOW_VIEWS.get(key)
    let url = view.url
    if (url.indexOf('__SERVER__') > -1) {
      url = url.replace('__SERVER__', global.serverOrigin)
    }
    view.loadOnce(url, () => {
      view.toggleDevTools()
    })
    view.setTop()
    return true
  }
  return false
})

answerRenderer('example.show.browserview', async (key) => {
  if (global.MAIN_WINDOW_VIEWS.has((key))) {
    global.MAIN_WINDOW_VIEWS.get(key).show()
    return true
  }
  return false
})

answerRenderer('example.hide.browserview', async (key) => {
  if (global.MAIN_WINDOW_VIEWS.has((key))) {
    global.MAIN_WINDOW_VIEWS.get(key).hide()
    return true
  }
  return false
})

