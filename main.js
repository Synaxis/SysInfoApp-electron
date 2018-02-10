const {app, BrowserWindow} = require ('electron');
const path = require('path');
const url = require('url');
//init win
let win;

function createWindow(){
  // create broser window
  win = new BrowserWindow({width:800, height:600, icon:__dirname+'/img/gear.png'});

win.loadURL(url.format({
  pathname: path.join(__dirname, 'index.html'),
  protocol: 'file:',
  slashes: true
}));

  //open devtools
  win.webContents.openDevTools();

  win.on('closed', () => {
    win = null;
  });
}


  // Run Create Window function
  app.on('ready', createWindow);

  //quit when window close
  app.on('window-all-close', () => {
    if(process.platform !== 'darwin'){
      app.quit();
    }
  });
