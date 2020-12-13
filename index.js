const electron = require("electron")
const { app, BrowserWindow } = require("electron")

function createWindow() {
    const win = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true, 
            enableRemoteModule: true
        }
    })

    win.maximize()
    win.loadFile("index.html")

    // TODO: Disable when building
    win.webContents.openDevTools()
}

app.whenReady().then(createWindow)