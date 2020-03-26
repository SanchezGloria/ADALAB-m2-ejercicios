'use strict';
// const buttonElement = document.querySelector('.btn');

// function changeColor() {
//   event.currentTarget.classList.toggle('success');
// }

// buttonElement.addEventListener('click', changeColor);

// EJERCICIO 8

const buttonElement = document.querySelector('.btn.default');
const buttonElement2 = document.querySelector('.btn.success');

function changeColor() {
  event.currentTarget.classList.toggle('error');
}

buttonElement.addEventListener('click', changeColor);
buttonElement2.addEventListener('click', changeColor);

function changeColor2() {
  event.currentTarget.classList.toggle('alert');
}

buttonElement.addEventListener('mouseover', changeColor2);
buttonElement2.addEventListener('mouseover', changeColor2);
