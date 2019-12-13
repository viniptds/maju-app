const { app, BrowserWindow, Menu} = require('electron')

// Cria uma janela de navegação.
function createWindow () {

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
  win.resizable = false;
  // e carregar o index.html do aplicativo.
  win.loadFile('skin/index.html');
//   win.once('ready-to-show', () => {
//     win.show("media/loading.gif");
//   })
}
//Menu.setApplicationMenu(false);
app.on('ready', createWindow)

//sair da aplicacao
function close()
{
    let ret = confirm("Deseja sair da aplicação?");
    if(ret)
    {
      win.close();
      win = null;
    }
}

function showMenu()
{
    
}