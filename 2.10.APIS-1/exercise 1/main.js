const btnElement = document.querySelector('.js-btn');
const pElement = document.querySelector('p');

console.log('hola');

function getNumber() {
  fetch('https://api.rand.fun/number/integer?max=100')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      pElement.innerHTML = data.result;
    });
}

btnElement.addEventListener('click', getNumber);

// function getEmoji() {
//   fetch('https://api.rand.fun/games/rockpaperscissorslizardspock')
//     .then(response => response.json())
//     .then(data => {
//       document.body.innerHTML = data.result;
//     });
// }
// document.body.addEventListener('click', getEmoji);
