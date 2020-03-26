const btnElement = document.querySelectorAll('.btn');
const body = document.querySelector('body');
debugger;
function changeColor() {
  body.classList.toggle('js-btn');
}
for (let btn of btnElement) {
  btn.addEventListener('click', changeColor);
}
