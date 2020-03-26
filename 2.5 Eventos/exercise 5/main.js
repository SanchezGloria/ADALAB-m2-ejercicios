// AÑADIENDO Y QUITANDO CLASES

const page = document.querySelector('body');

function changeColor() {
  if (event.key === 'r') {
    page.classList.add('color--r');
    page.innerHTML = ' ';
  } else if (event.key === 'm') {
    page.classList.remove('color--r');
    page.classList.add('color--m');
    page.innerHTML = ' ';
  } else {
    page.classList.remove('color--m');
    page.classList.remove('color--r');
    page.innerHTML = 'Lo siento, no hay color';
  }
}

document.addEventListener('keydown', changeColor);

// USANDO LA PROPIEDAD STYLE

// const page = document.querySelector('body');
// let r = 'r';
// let m = 'm';

// function changeColor() {
//   if (event.key === r) {
//     page.style = 'background: red;';
//   } else if (event.key === m) {
//     page.style = 'background: purple;';
//   } else page.style = 'background: green;';
// }

// document.addEventListener('keydown', changeColor);
