const { app, BrowserWindow, Menu} = require('electron')

Menu.setApplicationMenu(false);

function createWindow () {
  // Cria uma janela de navegação.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    center: true,  
    maximizable: false,
    //skipTaskbar: true,
    //icon: url-icone.ico,

    webPreferences: {
      nodeIntegration: true
    }
  })
  // e carregar o index.html do aplicativo.
  win.loadFile('skin/index.html');
//   win.once('ready-to-show', () => {
//     win.show("media/loading.gif");
//   })
}

app.on('ready', createWindow)

app.on('browser-window-created', function(e, win){
})
