const {app, BrowserWindow, BrowserView, Menu} = require('electron')
const path = require('path')
const eggLauncher = require('./electron/lanucher')
const setup = require('./electron/setup')
const electronConfig = require('./electron/config')
const storage = require('./electron/storage')
const is = require('electron-is')
const setTray = require('./electron/tray')
const { setShortCut, unsetShortCut } = require('./electron/shortCut')

// main window
global.MAIN_WINDOW = null
global.APP_TRAY = null;
global.CAN_QUIT = false;


// browser view
global.BROWSER_VIEW = null

// Initialize
setup()
//return

// argv
let ENV = 'prod'
for (let i = 0; i < process.argv.length; i++) {
  const tmpArgv = process.argv[i]
  if (tmpArgv.indexOf('--env=') !== -1) {
    ENV = tmpArgv.substr(6)
  }
}
const eggConfig = electronConfig.get('egg', ENV)
eggConfig.env = ENV

if (process.mas) app.setName('electron-egg')

async function initialize () {
  app.whenReady().then(() => {
    createWindow()
    app.on('activate', function () {
      if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
      }
    })
  })

  app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
      console.log('window-all-closed quit')
      app.quit()
    }
  })

  app.on('will-quit', () => {
    unsetShortCut()
  })

  // Open url with the default browser
  // app.on('web-contents-created', (e, webContents) => {
  //   webContents.on('new-window', (event, url) => {
  //       event.preventDefault()
  //       shell.openExternal(url)
  //   });
  // });
}

function createTabbedBrowserView(MAIN_WINDOW) {
  const bounds = MAIN_WINDOW.getBounds()
  const view = new BrowserView(electronConfig.get('viewsOption'))
  view.setAutoResize({
    width: true,
    height: true
  })
  MAIN_WINDOW.addBrowserView(view)

  const x = 80
  const y = 52

  function hide() {
    view.setBounds({ x: 80, y: 52, width: 0, height: 0 })
  }

  function show() {
    view.setBounds({ x: 80, y: 52, width: bounds.width - x, height: bounds.height - y })
  }

  let ret = {
  }
  ret.isShowed = false

  ret.view = view

  ret.toggle = function () {
    if (!ret.isShowed) {
      ret.show()
    } else {
      ret.hide()
    }
  }

  ret.hide = function () {
    ret.isShowed = false
    hide()
  }
  ret.show = function () {
    ret.isShowed = true
    show()
  }

  ret.load = function () {
    view.webContents.loadURL(path.join('file://', __dirname, '/asset/webview2.html'))
  }

  return ret
}

async function createWindow () {
  MAIN_WINDOW = new BrowserWindow(electronConfig.get('windowsOption'))

  // if (process.platform === 'linux') {
  //   windowOptions.icon = path.join(__dirname, '/assets/app-icon/png/512.png')
  // }

  if (eggConfig.env === 'prod') {
    // hidden menu
    Menu.setApplicationMenu(null)

    // dynamic port
    await storage.setDynamicPort()
    eggConfig.port = electronConfig.get('egg', eggConfig.env).port
  }

  // loding page
  MAIN_WINDOW.loadURL(path.join('file://', __dirname, '/asset/loading.html'))

  // tray
  setTray();

  // short cut
  setShortCut();

  // egg server
  await startServer(eggConfig)

  // check update
  const updateConfig = electronConfig.get('autoUpdate')
  if ((is.windows() && updateConfig.windows) || (is.macOS() && updateConfig.macOS)
    || (is.linux() && updateConfig.linux)) {
    const autoUpdater = require('./electron/autoUpdater');
    autoUpdater.checkUpdate();
  }

  // set browser view
  if (!global.BROWSER_VIEW) {
    global.BROWSER_VIEW = createTabbedBrowserView(MAIN_WINDOW)
  }

  global.BROWSER_VIEW.load()

  // console.log(global.BROWSER_VIEW)

  MAIN_WINDOW.webContents.openDevTools();

  return MAIN_WINDOW
}

async function startServer (options) {
  ELog.info('[main] [startServer] options', options)
  const protocol = 'http://'
  let startRes = null
  let url = null
  if (ENV === 'prod') {
    url = protocol + options.hostname + ':' + options.port
  } else {
    const developmentModeConfig = electronConfig.get('developmentMode', ENV)
    const selectMode = developmentModeConfig.default
    const modeInfo = developmentModeConfig.mode[selectMode]
    switch (selectMode) {
      case 'vue' :
        url = protocol + modeInfo.hostname + ':' + modeInfo.port
        break
      case 'react' :
        url = protocol + modeInfo.hostname + ':' + modeInfo.port
        break
      case 'ejs' :
        url = protocol + modeInfo.hostname + ':' + modeInfo.port
        break
    }
  }
  ELog.info('[main] [url]:', url)
  startRes = await eggLauncher.start(options).then((res) => res, (err) => err)
  ELog.info('[main] [startServer] startRes:', startRes)
  if (startRes === 'success') {
    MAIN_WINDOW.loadURL(url)
    return true
  }

  app.relaunch()
}

initialize()
