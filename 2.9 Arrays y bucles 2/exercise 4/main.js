'use strict';
debugger;
const tasks = [
  { name: 'Recoger setas en el campo', completed: true },
  { name: 'Comprar pilas', completed: true },
  { name: 'Poner una lavadora de blancos', completed: true },
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false
  }
];

// CREAR CÓDIGO HTML PARA LAS TAREAS

function getHtmlCode() {
  let htmlCode = `<li class="item">${item.name}</li>`;
  return htmlCode;
}

// FUNCIÓN PINTAR CÓDIGO DE LA LISTA
// cuidadito con no poner += porque estás sumando!!! si solo se pone + se sobreescriben y se queda la última

function paintCode() {
  // sé que hay que poner SelectorAll pero no sé cómo añadir la clase al Node que se forma
  const list = document.querySelector('.list');

  for (item of tasks) {
    console.log(tasks[item]);
    let content = (list.innerHTML += getHtmlCode());

    let completedTask = document.querySelector('.item');
    if (item.completed === true) {
      completedTask.classList.add('done');
    } else if (item.completed === false) {
      let container = document.querySelector('.js-container');
      container.innerHTML = content + `<input class="checkbox" type="checkbox" name="checkbox" id="" />`;
    }
    // console.log(item.completed);
  }
}
paintCode();

debugger;
