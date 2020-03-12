const tasks = [
  {
    name: 'Recoger setas en el campo',
    completed: true
  },
  {
    name: 'Comprar pilas',
    completed: true
  },
  {
    name: 'Poner una lavadora de blancos',
    completed: true
  },
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false
  }
];

// DECLARO VARIABLES SOBRE LAS QUE QUIERO OPERAR
debugger;
const list = document.querySelector('.ul');
let pendingTasks = document.querySelector('.pending-tasks');

// FUNCIÓN: CREO EL CÓDIGO DE PARA AÑADIR A LA UL
// como no hagas return me quedo sin lista

function getHtmlCode() {
  let htmlCode = `<li class="item--list">${item.name}</li>`;
  return htmlCode;
}

function getHtmlCodePendingList() {
  let htmlCode = `<h3>Tareas pendientes:</h3>`;
  htmlCode += `<ul class="pending-tasks-ul"></ul>`;
  htmlCode += `<li class="pending-task-item">${item.name}</li>`;
  htmlCode += `<input type="checkbox" class="checkbox">`;
  return htmlCode;
}

// FUNCIÓN: PINTO LA LISTA RECORRIENDOLA CON UN LOOP
// ojito con no poner =+ porque se sobre escribre!!
function paintTasks() {
  for (item of tasks) {
    let paintedList = (list.innerHTML += getHtmlCode());
    console.log(paintedList);
    console.log(!item.completed);
    if (!item.completed) {
      pendingTasks = pendingTasks.innerHTML += getHtmlCodePendingList();
      console.log(pendingTasks);
    } else {
      const item = document.querySelectorAll('.item--list');
      for (let i of item) {
        i.classList.add('completed');
      }
    }
  }
}
paintTasks();

// DECLARO VARIABLE DE CHECKBOX PARA ESCUCHARLA

const checkbox = document.querySelector('.checkbox');

// CREO LA FUNCIÓN PARA ACTUALIZAR TAREAS

function updatePendingTasks() {
  for (item of tasks) {
    if (!item.completed) {
      const item = document.querySelectorAll('.item--list');
      for (let i of item) {
        i.classList.add('completed');
      }
      // Sé que estas líneas no valen pero no sé cómo vaciar el div de Tareas pendientes
      pendingTasks = '';
      // getHtmlCodePendingList() = '';
    }
  }
}

checkbox.addEventListener('click', updatePendingTasks);

debugger;
