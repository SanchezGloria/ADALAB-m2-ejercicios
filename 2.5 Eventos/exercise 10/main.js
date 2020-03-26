// no entiendo 1: por qué he tenido que crear 5 argumentos. En el ejemplo de clase era un único argumento al que se llamaba 5 veces

// cómo hacer para que las pelis se vean al clicar. Parece ser que no puede hacer agumentos dentro de argumentos.

const buttonElement = document.querySelector('.btn');
const listElement = document.querySelector('body');

const list = document.querySelector('.list');

function paintMovies(name, name2, name3, name4, name5) {
  list.innerHTML = `<li class="inception">${name}</li>`;
  list.innerHTML += `<li class="the-butterfly-effect">${name2}</li>`;
  list.innerHTML += `<li class="eternal-sunshine-of-the-sm">${name3}</li>`;
  list.innerHTML += `<li class="blue-velvet">${name4}</li>`;
  list.innerHTML += `<li class="split">${name5}</li>`;

  const inception = document.querySelector('.inception');
  const theButterFlyEffect = document.querySelector('.the-butterfly-effect');
  const eternalSunshineOfTheSM = document.querySelector('.eternal-sunshine-of-the-sm');
  const blueVelvet = document.querySelector('.blue-velvet');
  const split = document.querySelector('.split');

  function showMovieConsole() {
    console.log(event.currentTarget.innerHTML);
  }

  inception.addEventListener('click', showMovieConsole);
  theButterFlyEffect.addEventListener('click', showMovieConsole);
  eternalSunshineOfTheSM.addEventListener('click', showMovieConsole);
  blueVelvet.addEventListener('click', showMovieConsole);
  split.addEventListener('click', showMovieConsole);
}

buttonElement.addEventListener('click', paintMovies('Inception', 'The butterfly Effect', 'Eternal sunshine of the spotless mind', 'Blue Velvet', 'Split'));

// EJERCICIO 12

// const buttonElement = document.querySelector('.btn');
// const listElement = document.querySelector('.list');

// function handleMovies(e) {
//   listElement.innerHTML = listElement.innerHTML + '<li class="inception">Inception</li><li class="the-butterfly-effect">The butterfly effect</li><li class="eternal-sunshine-of-the-sm">Eternal sunshine of the spotless mind</li><li class="blue-velvet">Blue velvet</li><li class="split">Split</li>';

//   function handleMovieConsole(e) {
//     console.log(e.target); // si ponemos .value, tampoco se puede
//   }

//   listElement.addEventListener('click', handleMovieConsole);
// }
// buttonElement.addEventListener('click', handleMovies);
