const {BrowserView} = require('electron')

module.exports = class CommonBrowserView {
    constructor(win, name) {
        this.win = win
        this.name = name
        this.isShowed = false
        this.view = null
    }
    _init(options = {}, show, hide) {
        const view = new BrowserView(options)
        view.setAutoResize({
            width: true,
            height: true
        })
        this.view = view
    }
    _register({show, hide} = {}) {
        let self = this
        this.toggle = function () {
            if (!this.isShowed) {
                this.show()
            } else {
                this.hide()
            }
        }

        this.hide = function () {
            this.isShowed = false
            hide(self)
        }
        this.show = function () {
            this.isShowed = true
            show(self)
        }
    }
    loadURL(url = '') {
        this.view.webContents.loadURL(url)
    }
    toggleDevTools() {
        this.view.webContents.toggleDevTools()
    }
    addToWindow() {
        this.win.addBrowserView(this.view)
    }
}
