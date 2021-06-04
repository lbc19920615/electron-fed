const CommonBrowserView = require('../lib/CommonBrowserView')
const electronConfig = require('../config')

module.exports = class MoreBrowserView extends CommonBrowserView {
    constructor(MAIN_WINDOW) {
        super(MAIN_WINDOW)

        this._init(electronConfig.get('popupOption'))

        const width = 300;
        const height = 400;
        const x = 90
        const y = 62

        function hide(self) {
            self.view.setBounds({ x, y, width: 0, height: 0 })
        }

        function show(self) {
            self.view.setBounds({ x, y, width: width, height: height })
        }

        this._register({show, hide})
    }
}