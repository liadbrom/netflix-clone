const { app, BrowserWindow, ipcMain } = require('electron');

let win;

function createWindow() {
    // Create the browser window.
    win = new BrowserWindow({
        backgroundColor: '#000',
        icon: `file://${__dirname}/dist/assets/logo.png`,
        titleBarStyle: 'hidden',
        minWidth: 600,
        minHeight: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            preload: `file://${__dirname}/dist/scripts/preload.js`
        }
    })
    win.maximize();

    ipcMain.on("close", () => {
        app.quit();
    });
    ipcMain.on("minimize", () => {
        if (win.isMaximized()) {
            win.webContents.send('toggleMaxTools');
        }
        win.minimize();
    });
    ipcMain.on("maximize", () => {
        win.isMaximized() ? win.unmaximize() : win.maximize();
    });

    win.loadURL(`file://${__dirname}/dist/index.html`)

    //// uncomment below to open the DevTools.
    // win.webContents.openDevTools()

    // Event triggered when the window is maximized.
    win.on("maximize", function () {
        win.webContents.send('toggleMaxTools');
    });

    // Event triggered when the window is unmaximized.
    win.on("unmaximize", function () {
        win.webContents.send('toggleMaxTools');
    });

    // Event triggered when the window is closed.
    win.on('closed', function () {
        win = null
    });
}

// Create window on electron initialization
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {

    // On macOS specific close process
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function () {
    // macOS specific close process
    if (win === null) {
        createWindow()
    }
})