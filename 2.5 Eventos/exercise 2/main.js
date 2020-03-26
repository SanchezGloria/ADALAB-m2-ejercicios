const button = document.querySelector('.btn');
let inputElement = document.querySelector('.input');

function showMessage() {
  console.log('Hola', inputElement.value);
}

button.addEventListener('click', showMessage);

console.dir(name);
