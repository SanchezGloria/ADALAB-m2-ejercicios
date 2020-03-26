'use strict';

// AÑADIENDO Y QUITANDO CLASES

const container = document.querySelector('.js-container');

function changeColor() {
  if (window.scrollY > 250) {
    container.classList.add('color--scroll');
  } else {
    container.classList.remove('color--scroll');
  }
}

window.addEventListener('scroll', changeColor);

// USANDO LA PROPIEDAD STYLE

// const container = document.querySelector('.container');

// function changeColor() {
//   if (window.scrollY >= 250) {
//     container.style = 'background:yellow;';
//   } else {
//     container.style = 'background:orange;';
//   }
// }
// window.addEventListener('scroll', changeColor);
