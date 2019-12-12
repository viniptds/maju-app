const { app, BrowserWindow, Menu} = require('electron')

Menu.setApplicationMenu(false);

function createWindow () {
  // Cria uma janela de navegação.
  let win = new BrowserWindow({
    width: 1300,
    height: 800,
    center: true,  
    maximizable: false,
    //icon: url-icone.ico,

    webPreferences: {
      nodeIntegration: true
    }
  })
  win.setResizable(false);
  // e carregar o index.html do aplicativo.
  win.loadFile('skin/index.html');
//   win.once('ready-to-show', () => {
//     win.show("media/loading.gif");
//   })
}

app.on('ready', createWindow)