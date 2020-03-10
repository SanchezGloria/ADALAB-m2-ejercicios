const head = document.querySelector('.head');
const face = document.querySelector('.face');

function winkEye() {
  face.innerHTML = ';)';
}

head.addEventListener('click', winkEye);
