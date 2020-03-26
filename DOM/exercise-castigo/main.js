'use strict';

const container = document.querySelector('.container');
const colors = ['blanco', 'azul', 'rojo', 'verde', 'amarillo', 'rosa'];


for (let i = 1; i <= 100; i++) {
  const newItem = document.createElement('p');
  newItem.setAttribute("class", "blanco");
  newItem.id = "line"+i;
  const newContent = document.createTextNode('He aprendido bien cómo funcionan los bucles ' + i);
  newItem.appendChild(newContent);
  container.appendChild(newItem);
  const select = document.createElement('select');
  select.setAttribute("data-id", "line"+i);
  for (const color of colors) {
    const option = document.createElement('option');
    option.value = color;
    option.text = color;
    select.appendChild(option);
  }
  newItem.appendChild(select);
  select.addEventListener('change', didChangeColor);
}

function didChangeColor() {
  let element = event.currentTarget;
  let id = element.dataset['id'];
  let paragraph = document.getElementById(id);
  let value = event.currentTarget.selectedIndex;
  paragraph.setAttribute("class", colors[value]);
}