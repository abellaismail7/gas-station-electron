/* eslint-disable @typescript-eslint/no-var-requires */
const { app, BrowserWindow } = require("electron");

// LAUNCH DATABASE
const knexcfg = require("./knex.js");
const knex = require("knex")(knexcfg.development);

// HOT RELOAD
const path = require("path");
require("electron-reload")(__dirname, {
  electron: path.join(__dirname, "node_modules", ".bin", "electron"),
  ignored: /node_modules|[\/\\]\.|db/,
  hardResetMethod: "exit"
});

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    }
  });
  win.loadURL("http://localhost:8080");
  global.$db = knex;
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
