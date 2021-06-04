const {BrowserView} = require('electron')
const {isFunction} = require('../utils')

module.exports = class CommonBrowserView {
    constructor(win) {
        this.win = win
        this.isShowed = false
        this.view = null
        this.url = ''
        this.isLoaded = false
    }
    getClsName() {
        return this.constructor.name;
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
    loadOnce(url = '', onFirstLoaded = () => {}) {
        if (!this.isLoaded) {
            this.isLoaded = true
            this.loadURL(url)
            if (isFunction(onFirstLoaded)) {
                onFirstLoaded()
            }
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
    setTop() {
        this.win.setTopBrowserView(this.view)
    }
}
