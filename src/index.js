const electron = require("electron")
const { app, BrowserWindow } = require("electron")

function createWindow() {
    const win = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true, 
            enableRemoteModule: true, 
            webSecurity: false // Should be true when deployed; we have issues with images in development if it isn't false
        }
    })
    
    win.loadFile("src/index.html")
    win.maximize()

    // TODO: Disable when building
    win.webContents.openDevTools()
}

app.whenReady().then(createWindow)