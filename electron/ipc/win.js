"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
(0, index_1.answerRenderer)('win.maximize', async () => {
    let win = global.MAIN_WINDOW;
    if (win && win.isMaximizable()) {
        win.blur();
        win.maximize();
        win.focus();
        return true;
    }
    return false;
});
(0, index_1.answerRenderer)('win.unmaximize', async () => {
    let win = global.MAIN_WINDOW;
    if (win && win.isMaximizable()) {
        win.blur();
        win.restore();
        win.focus();
        return true;
    }
    return false;
});
(0, index_1.answerRenderer)('win.minimize', async () => {
    let win = global.MAIN_WINDOW;
    if (win && win.isMinimizable()) {
        win.blur();
        win.minimize();
        return true;
    }
    return false;
});
(0, index_1.answerRenderer)('win.close', async () => {
    let win = global.MAIN_WINDOW;
    if (win && win.isClosable()) {
        win.close();
        return true;
    }
    return false;
});
//# sourceMappingURL=win.js.map