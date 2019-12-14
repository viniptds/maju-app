const { dialog } = require('electron');

const menu = document.querySelector("#menu");
menu.addEventListener("onclick", showMenu);

const close = document.querySelector("#close");
close.addEventListener("onclick", close);

const btCloseApp = document.querySelector("#close");
btCloseApp.addEventListener("onclick", closeApp);


const options = {
    type: 'question',
    buttons: ['Cancel', 'OK'],
    defaultId: 2,
    title: 'Question',
    message: 'Teste de Alert',
    detail: 'It does not really matter',
  };

  //alert("dwdw");
function close(e)
{
    dialog.showMessageBox(null);
}

function showMenu(e)
{
    dialog.showMessageBox(null);
    dialog.showMessageBox(null, options, (response) => {
        console.log(response);    
      });
}

function closeApp()
{
  let ret = confirm("Deseja sair da aplicação?");
    if(ret)
    {
      win.close();
      win = null;
    }
}