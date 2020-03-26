const input = document.querySelector('.input');
// const input2 = document.querySelector('.input').value;
const info = document.querySelector('.info');

function showResult() {
  info.innerHTML = input.value;
  localStorage.setItem('userName', input.value);
}
let savedUser = localStorage.getItem('userName');
console.log(savedUser);
// input2.innerHTML = savedUser;
info.innerText = savedUser;

input.addEventListener('keyup', showResult);
