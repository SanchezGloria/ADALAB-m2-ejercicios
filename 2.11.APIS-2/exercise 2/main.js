const input = document.querySelector('.input');
const button = document.querySelector('.button');
const list = document.querySelector('.list');

// NO LA PUEDO USAR
// let htmlCode;
// function getHtmlCode() {
//   htmlCode = `<li>${name.name}</li>`;
//   return htmlCode;
// }

function showResults() {
  fetch(`https://swapi.co/api/people/?search=${input.value}`)
    .then(response => response.json())
    .then(dataList => {
      list.innerHTML = '';
      for (const name of dataList.results) {
        console.log(name.name);
        list.innerHTML += `<li>Nombre: ${name.name}; género: ${name.gender}</li>`;
      }
      localStorage.setItem('results', JSON.stringify(input.value));
    });
}
button.addEventListener('click', showResults);

const getFromLocalStorage = () => {
  const savedResults = JSON.parse(localStorage.getItem('results'));
  console.log(savedResults);
  if (savedResults !== null) {
    input.value = savedResults;
  }
};
getFromLocalStorage();
// const savedTasks = JSON.parse(localStorage.getItem('results'));

// console.log(savedTasks.length);
//     .then(response => response.json())
//     .then(listData => {
//       // console.log(listData.results);
//       for (name of listData.results) {
//         console.log(name.name);
//         console.log(name.mass);
//       }
//     });
// }

// const item = document.createElement('li');
// const itemContent = document.createTextNode(name.name);
// item.appendChild(itemContent);
// list.appendChild(item);
