

/**
 * 使electron draggable
 */

module.exports = makeDraggable = function (el) {
    if (typeof el === 'string') { el = document.querySelector(el); }
    try {
        const drag = require('electron-drag');
        if (drag.supported) {
            drag(el);
        } else {
            console.log('sdsds')
            makeDraggableFallback(el);
        }
    } catch (ex) {
        makeDraggableFallback(el);
    }
}

function makeDraggableFallback(el) {
    // const electronRemote = require('electron').remote
    const electronRemote = require('@electron/remote')

    // 方案一
    // el.style['-webkit-app-region'] = 'drag';

    // 方案二
    let dragging = false;
    let mouseX = 0;
    let mouseY = 0;
    el.addEventListener('mousedown', (e) => {
        dragging = true;
        const { pageX, pageY } = e;
        mouseX = pageX;
        mouseY = pageY;
    });
    window.addEventListener('mouseup', () => {
        dragging = false;
    });
    window.addEventListener('mousemove', (e) => {
        if (dragging) {
            const { pageX, pageY } = e;
            const win = electronRemote.getCurrentWindow();
            const pos = win.getPosition();
            pos[0] = pos[0] + pageX - mouseX;
            pos[1] = pos[1] + pageY - mouseY;
            win.setPosition(pos[0], pos[1], true);
        }
    });
}
