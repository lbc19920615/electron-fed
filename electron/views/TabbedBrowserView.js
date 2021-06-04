const CommonBrowserView = require('../lib/CommonBrowserView')
const electronConfig = require('../config')

module.exports = class TabbedBrowserView extends CommonBrowserView {
    constructor(MAIN_WINDOW) {
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
    }
}