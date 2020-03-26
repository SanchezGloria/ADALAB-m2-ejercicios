// cómo se haría para que al clicar otra vez vuelva al hola o diga otra cosa

const button = document.querySelector('.btn');
const paragraphElement = document.querySelector('.hello');

function showAlert() {
  paragraphElement.innerHTML = 'Mi primer click, ¡ole yo y la mujer que me parió!';
  console.log('Mi primer click, ¡ole yo y la mujer que me parió!');
}

button.addEventListener('click', showAlert);

// VERSION CORTA

// const button = document.querySelector('.btn');
// button.addEventListener('click', function showAlert() {
//   console.log('Mi primer click, ¡ole yo y la mujer que me parió!');
// });

// // VERSION HIPERCORTA

// const button = document.querySelector('.btn');
// button.addEventListener('click', () => console.log('Mi primer click, ¡ole yo y la mujer que me parió!'));
