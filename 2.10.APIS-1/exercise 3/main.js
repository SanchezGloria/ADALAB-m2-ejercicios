const buttonElement = document.querySelector('.btn');
const inputElement = document.querySelector('.js-input');

function showResult() {
  fetch(`https://api.github.com/users/${inputElement.value}`)
    .then(response => response.json())
    .then(data => {
      const parag = document.querySelector('p');
      const img = document.querySelector('img');
      const repos = document.querySelector('.repos');
      parag.innerHTML = 'Usuario: ' + data.login;
      img.src = data.avatar_url;
      img.alt = `${inputElement.value}`;
      repos.innerHTML = 'Número de repositorios: ' + data.public_repos;
    });
}

buttonElement.addEventListener('click', showResult);

// function getHtmlCode() {
//   let htmlCode = '<h2 class="js-results">Resultados</h2>';
//   htmlCode += `<h3 class="js-userName">${inputElement.value}</h3>`;
//   htmlCode += '<p class="js-photo-title">Foto</p>';
//   htmlCode += `<img src="${data.avatar_url}" alt="${data.login}">`;
//   htmlCode += ' <p class="js-repos-title"> Número de repositorios</p>';
//   htmlCode += `<p class="js-repos">${data.public_repos}</p>`;
//   return htmlCode;
// }

// function paintHtmlCode() {
//   htmlCode = htmlCode.innerHTML;
// }

// // getHtmlCode();
// paintHtmlCode();
