const path = require('path');

const {app, BrowserWindow, ipcMain} = require('electron') 

const isDev = require('electron-is-dev');

function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 1400,
    height: 1000,
    webPreferences: {
      nodeIntegration: true,
    },
    
  });
  

  const { net } = require('electron')
   const request = net.request('http://localhost:8098/api/device/accList?pageNo=1&pageSize=20&access_token=353839A9EBA6CAF2B7E5F82F5D1D245CED409DE67B353903BC29BF0A42B132DE')
   request.on('response', (response) => {
     console.log(`STATUS: ${response.statusCode}`)

     
     response.on('data', (chunk) => {
        console.log(`BODY: ${chunk}`)
       ipcMain.on('data', (event, data)=>{
          event.reply("reply", chunk)
       })
     })
     response.on('end', () => {
       console.log('No more data in response.')
     })
   })
   request.end()

   const request2 = net.request('http://localhost:8098/api/accLevel/list?pageNo=1&pageSize=1&access_token=353839A9EBA6CAF2B7E5F82F5D1D245CED409DE67B353903BC29BF0A42B132DE')
   request2.on('response', (response) => {
     console.log(`STATUS: ${response.statusCode}`)
     
     response.on('data', (chunk) => {
      
      
       console.log(`BODY: ${chunk}`)
     })
     response.on('end', () => {
       console.log('No more data in response.')
     })
   })
   request2.end()
 


  // and load the index.html of the app.
  // win.loadFile("index.html");
  win.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );
  // Open the DevTools.
  if (isDev) {
    win.webContents.openDevTools({ mode: 'detach' });
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});