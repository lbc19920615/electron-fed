const CommonBrowserView = require('../lib/CommonBrowserView')
const electronConfig = require('../config')
const {setCurrentBrowserView} = require("../current");

module.exports = class ChatBrowserView extends CommonBrowserView {
    constructor(MAIN_WINDOW, {key} = {}) {
        super(MAIN_WINDOW)

        let viewsOption = electronConfig.get('viewsOption')
        viewsOption.webPreferences.webSecurity = false

        this._init(viewsOption)

        const x = 80
        const y = 0

        function hide(self) {
            self.view.setBounds({ x, y, width: 0, height: 0 })
        }

        function show(self) {
           self._initBounds([x, y])
        }

        this._register({show, hide})

        let webContents = this.view.webContents
        webContents.once('dom-ready', function () {
            // webContents.executeJavaScript(`global.CURRENT_BROWSR_VIEW_KEY = '${key}'`)
            setCurrentBrowserView(key)
        })
    }
}
