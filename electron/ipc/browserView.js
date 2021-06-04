const { answerRenderer } = require('./index')


answerRenderer('browerView.outPopupMouseDown', async (from) => {
    if (global.currentPopup && global.currentPopup.isShowed) {
        global.currentPopup.hide()
        global.currentPopup = null
        return true
    }
    return false
})

answerRenderer('browerView.currentPopup', async (key) => {
    console.log('global.currentPopup', key)
    if (global.MAIN_WINDOW_VIEWS.get(key)) {
        global.currentPopup = global.MAIN_WINDOW_VIEWS.get(key)
        global.currentPopup.show()
        return true
    }
    return false
})