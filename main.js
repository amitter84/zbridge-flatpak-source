const { app, BrowserWindow, shell } = require('electron');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    title: "Zbridge",
    icon: path.join(__dirname, 'icon.png'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true
    }
  });

  // Remove the default menu for a cleaner, app-like look
  
  // Prevent the page from changing the window title
  mainWindow.on('page-title-updated', (e) => {
    e.preventDefault();
  });

  mainWindow.setMenuBarVisibility(false);

  // Load the live application
  mainWindow.loadURL('https://zbridge.club');

  // Handle external links (open in default browser instead of the app)
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('https://zbridge.club')) {
      return { action: 'allow' };
    }
    shell.openExternal(url);
    return { action: 'deny' };
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
