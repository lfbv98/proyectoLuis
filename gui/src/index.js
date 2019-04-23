const { app, BrowserWindow,Menu } = require('electron');
const url = require('url');
const path = require('path');

if(process.env.NODE_ENV !== 'production'){
require('electron-reload')(__dirname,{
  electron: path.join(__dirname, '../node_modules','.bin','electron')
  })
}
let mainWindow;
let newWindow;

app.on('ready', ()=>{
  mainWindow = new BrowserWindow({});
  mainWindow.loadURL(url.format({
    pathname : path.join(__dirname, 'views/index.html'),
    protocol: 'file',
    slashes: true
  }))

const mainMenu = Menu.buildFromTemplate(templateMenu)
Menu.setApplicationMenu(mainMenu);
});

// crear nueva ventana
function createNewWindow(){
  newWindow = new BrowserWindow({
width: 400,
height: 330,
title: 'new window'

});
newWindow.loadURL(url.format({
  pathname : path.join(__dirname, 'views/new.html'),
  protocol: 'file',
  slashes: true
}))
}


const templateMenu = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Peticion',
        accelerator:'Ctrl+N',
        click() {
        createNewWindow();   
           }
      }
    ]
  }
]
// npm install electron-relaod / similar a nodemon f5 cada cambio
