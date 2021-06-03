const { answerRenderer } = require('./index')

answerRenderer('example.hello', async (msg) => {
  let newMsg = msg + " +1"
  let reply = ''
  reply = '收到：' + msg + '，返回：' + newMsg
  return reply
})

answerRenderer('example.show.browserview', async () => {
  if (global.BROWSER_VIEW) {
    global.BROWSER_VIEW.show()
    return true
  }
  return false
})

answerRenderer('example.hide.browserview', async () => {
  if (global.BROWSER_VIEW) {
    global.BROWSER_VIEW.hide()
    return true
  }
  return false
})

