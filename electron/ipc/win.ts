/// <reference path="../types/index.d.ts" />

// @ts-ignore
import { answerRenderer } from './index'

answerRenderer('win.maximize', async () => {
    let win = global.MAIN_WINDOW
    if (win && win.isMaximizable()) {
        win.blur()
        win.maximize()
        win.focus()
        return true
    }
    return false
})


answerRenderer('win.unmaximize', async () => {
    let win = global.MAIN_WINDOW
    if (win && win.isMaximizable()) {
        win.blur()
        win.restore()

        win.focus()
        return true
    }
    return false
})

answerRenderer('win.minimize', async () => {
    let win = global.MAIN_WINDOW
    if (win && win.isMinimizable()) {
        win.blur()
        win.minimize()
        return true
    }
    return false
})

answerRenderer('win.close', async () => {
    let win = global.MAIN_WINDOW
    if (win && win.isClosable()) {
        win.close()
        return true
    }
    return false
})
