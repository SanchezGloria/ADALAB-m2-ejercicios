'use strict';

const form = document.querySelector('.js-form');
const nameInput = document.querySelector('.js-name');
const surnameInput = document.querySelector('.js-surname');

const getFromLocalStorage = () => {
  const userData = JSON.parse(localStorage.getItem('userData'));
  if (userData !== null) {
    nameInput.value = userData.name;
    surnameInput.value = userData.surname;
  }
};

const handleInput = () => {
  const data = {
    name: nameInput.value,
    surname: surnameInput.value
  };
  localStorage.setItem('userData', JSON.stringify(data));
};

form.addEventListener('keyup', handleInput);

getFromLocalStorage();

// const input = document.querySelector('.input');
// // const input2 = document.querySelector('.input').value;
// const info = document.querySelector('.info');

// function showResult() {
//   info.innerHTML = input.value;
//   localStorage.setItem('userName', input.value);
// }
// let savedUser = localStorage.getItem('userName');
// console.log(savedUser);
// // input2.innerHTML = savedUser;
// info.innerText = savedUser;

// input.addEventListener('keyup', showResult);
