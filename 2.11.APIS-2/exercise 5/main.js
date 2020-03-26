'use strict';

// DECLARO VARIABLES

const inputs = document.querySelectorAll('.input');
const infos = document.querySelectorAll('.info');

// FUNCIÓN PARA CAMBIAR DE COLOR

function changeColor1() {
  let selectedInput = document.querySelector('.radio:checked');
  selectedInput = selectedInput.value;
  for (const info of infos) {
    info.classList.remove('light');
    info.classList.remove('dark');
    info.classList.add(selectedInput);
  }
}

// FUNCIÓN PARA LOS LISTENERS

function listen() {
  for (const input of inputs) {
    input.addEventListener('click', changeColor1);
  }
}
listen();

// METER EL VALOR EN EL LOCALSTORAGE

for (const input of inputs) {
  let selectedInput = document.querySelector('.radio:checked');
  selectedInput = selectedInput.value;
  localStorage.setItem('theme', selectedInput);
}

// FUNCIÓN PARA QUE APAREZCA EL COLOR PREVIAMENTE GUARDADO AL CARGAR LA PÁGINA

function getFromLocalStorage() {
  let savedTheme = localStorage.getItem('theme');

  for (const info of infos) {
    info.classList.add(savedTheme);
  }
}

getFromLocalStorage();

// VERSIÓN 2 SIN QUERYSELECTORALL

// const input1 = document.querySelector('.input1');
// const input2 = document.querySelector('.input2');

// function changeColor() {
//   for (const info of infos) {
//     if (info.classList.contains('light')) {
//       info.classList.remove('light');
//       info.classList.add('dark');
//     } else {
//       info.classList.remove('dark');
//       info.classList.add('light');
//     }
//   }
// }

// function listeners() {
//   for (const input of inputs) {
//     input.addEventListener('click', changeColor);
//   }
// }
// listeners();

// input1.addEventListener('click', changeColor1);
// input2.addEventListener('click', changeColor1);
