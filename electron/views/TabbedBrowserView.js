const CommonBrowserView = require('../lib/CommonBrowserView')
const electronConfig = require('../config')

module.exports = class TabbedBrowserView extends CommonBrowserView {
    constructor(MAIN_WINDOW) {
        super(MAIN_WINDOW)

        this._init(electronConfig.get('viewsOption'))

        const x = 80
        const y = 0

        function hide(self) {
            self.view.setBounds({ x, y, width: 0, height: 0 })
        }

        function show(self) {
            self._initBounds([x, y])
        }

        this._register({show, hide});
    }
}
