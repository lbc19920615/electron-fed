// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.

global.EventEmitter = require('events');
global.__PROLOAD__ = true
global.require2 = require

const { ipcRenderer } = require('electron')
const electronRemote = require('electron').remote
// const remote = require('@electron/remote')
const { callMain } = require('./electron/inject')

global.electronCallMain
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

global.IS_BROWSER_VIEW = true

document.addEventListener('keydown', function (e) {
  if (e.ctrlKey && e.code === 'KeyD') {
    // alert([1, global.CURRENT_BROWSR_VIEW_KEY])
    callMain(ipcRenderer,'win.toggle-dev-tools', {
      browerViewId: global.CURRENT_BROWSR_VIEW_KEY
    }).then(() => {
    })
  }

})
