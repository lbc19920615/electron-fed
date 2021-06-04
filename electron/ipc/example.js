const { answerRenderer } = require('./index')

answerRenderer('example.hello', async (msg) => {
  let newMsg = msg + " +1"
  let reply = ''
  reply = '收到：' + msg + '，返回：' + newMsg
  return reply
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

