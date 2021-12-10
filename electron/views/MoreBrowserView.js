const CommonBrowserView = require('../lib/CommonBrowserView')
const electronConfig = require('../config')

module.exports = class MoreBrowserView extends CommonBrowserView {
    constructor(MAIN_WINDOW) {
        super(MAIN_WINDOW)

        this._init(electronConfig.get('popupOption'))

        let toBottom = 30

        const width = 300;
        const height = 400;
        const x = 90
        let y = 62

        function hide(self) {
            self.view.setBounds({ x, y, width: 0, height: 0 })
        }

        function show(self) {
            let contentSize = self.win.getContentSize();
            y = contentSize[1] - height - toBottom
            // console.log(y)
            self.view.setBounds({ x, y, width: width, height: height })
        }

        this._register({show, hide})
    }
}
