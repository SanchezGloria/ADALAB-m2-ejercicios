function getDogImage1() {
  fetch('https://dog.ceo/api/breed/spaniel/cocker/images/random')
    .then(response => response.json())
    .then(data => {
      const img = document.querySelector('img');
      img.src = data.message;
      img.alt = 'Un perro';
    });
}

const btnElement = document.querySelector('.js-btn');
const pElement = document.querySelector('p');

function getInteger() {
  fetch('https://api.rand.fun/number/integer?max=92')
    .then(response => response.html())
    .then(data => {
      console.log(data.result);
      text.innerHTML = data.result;
    })
    .catch(error => console.error(`Ha sucedido un error: ${error}`));
}
btnElement.addEventListener('click', getInteger);

// console.log('hola');

// function getNumber() {
//   fetch('https://api.rand.fun/number/integer?max=100')
//     .then(function(response) {
//       return response.html();
//     })
//     .then(function(data) {
//       pElement.innerHTML = data.result;
//     });
//     .catch (error => console.log(`Ha sucedido un error: ${error}`));

// // btnElement.addEventListener('click', getNumber);
