const CommonBrowserView = require('../lib/CommonBrowserView')
const electronConfig = require('../config')

module.exports = class ChatBrowserView extends CommonBrowserView {
    constructor(MAIN_WINDOW, {key} = {}) {
        super(MAIN_WINDOW)

        this._init(electronConfig.get('viewsOption'))

        const x = 80
        const y = 54

        function hide(self) {
            self.view.setBounds({ x, y, width: 0, height: 0 })
        }

        function show(self) {
            const bounds = self.win.getBounds()
            self.view.setBounds({ x, y, width: bounds.width - x, height: bounds.height - y })
        }

        this._register({show, hide})

        let webContents = this.view.webContents
        webContents.once('dom-ready', function () {
            webContents.executeJavaScript(`global.CURRENT_BROWSR_VIEW_KEY = '${key}'`)
        })
    }
}
