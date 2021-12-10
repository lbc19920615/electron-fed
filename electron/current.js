
let currentBrowserViewId = '';

exports.setCurrentBrowserView = function (viewId) {
  currentBrowserViewId = viewId
}

exports.getCurrentBrowserViewId = function () {
  return currentBrowserViewId;
}
