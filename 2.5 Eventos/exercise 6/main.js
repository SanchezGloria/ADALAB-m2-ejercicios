'use strict';

const inputElement = document.querySelector('.input');
const paragraphElement = document.querySelector('.paragraph');

function writeContentFromInput() {
  paragraphElement.innerHTML = event.currentTarget.value;
}

inputElement.addEventListener('keyup', writeContentFromInput);

// No hacer caso a esto

// const inputElement = document.querySelector('.input');
// const paragraph = document.querySelector('.paragraph');
// // let re = /[a-z]/;
// // let reg = new RegExp(re);
// function pressLetter() {
//   if (event.key) {
//     paragraph.innerHTML = event.currentTarget.value;
//   } else {
//     paragraph.innerHTML = 'Los datos introducidos son inválidos';
//   }
// }

// inputElement.addEventListener('keydown', pressLetter);
