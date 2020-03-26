'use strict';
const listElement = document.querySelector('.teachers');
const listElement1 = listElement.querySelector('.teacher--isra');
const listElement2 = listElement.querySelector('.teacher--tuerto');
const listElement3 = listElement.querySelector('.teacher--nasi');
const textElement = listElement.querySelector('.favorite');

function showBackground() {
  event.currentTarget.classList.toggle('teacher--selected');

  if (event.currentTarget.contains('favorite')) {
    let replaceText = event.currentTarget.classList.remove('favorite');
    replaceText.innerHTML.replace('Añadir', 'Quitar');
  } else {
    textElement.classList.add('favorite');
  }
}

listElement1.addEventListener('click', showBackground);
listElement2.addEventListener('click', showBackground);
listElement3.addEventListener('click', showBackground);
textElement.addEventListener('click', showBackground);

// otro intento

// const teachers = document.querySelector('.teachers');
// const cardIsra = teachers.querySelector('.teacher--isra');
// const cardBarlos = teachers.querySelector('.teacher--tuerto');
// const cardNasi = teachers.querySelector('.teacher--nasi');
// const text = teachers.querySelector('.favorite');

// function handleChangeBackground(event) {
//   event.currentTarget.classList.toggle('teacher--selected');
//   if (event.currentTarget.querySelector('.favorite').innerHTML === 'Añadir') {
//     event.currentTarget.querySelector('.favorite').innerHTML.replace('Añadir', 'Quitar');
//   }
// }

// cardIsra.addEventListener('click', handleChangeBackground);
// cardBarlos.addEventListener('click', handleChangeBackground);
// cardNasi.addEventListener('click', handleChangeBackground);
// text.addEventListener('click', handleChangeBackground);
