const CommonBrowserView = require('./CommonBrowserView')
const electronConfig = require('../config')

module.exports = class ChatBrowserView extends CommonBrowserView {
    constructor(MAIN_WINDOW) {
        super(MAIN_WINDOW)

        this._init(electronConfig.get('viewsOption'))

        const x = 80
        const y = 52

        function hide(self) {
            self.view.setBounds({ x: 80, y: 52, width: 0, height: 0 })
        }

        function show(self) {
            const bounds = self.win.getBounds()
            self.view.setBounds({ x: 80, y: 52, width: bounds.width - x, height: bounds.height - y })
        }

        this._register({show, hide})
    }
}