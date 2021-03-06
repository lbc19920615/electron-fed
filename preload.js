// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.

global.EventEmitter = require('events');
global.__PROLOAD__ = true

const { ipcRenderer } = require('electron')
// const electronRemote = require('electron').remote
const electronRemote = require('@electron/remote')
const { callMain } = require('./electron/inject')

global.electronRemote = electronRemote
global.makeDraggable = require('./electron/draggable')

document.addEventListener(
    'popup-hide',
    function (e) {
        // console.log('popup-hide')
        callMain(ipcRenderer,'browerView.outPopupMouseDown', global.location.href)
    },
    true
)




