const buttonElement = document.querySelector('.btn');
const inputElement = document.querySelector('.js-input');
const ulElement = document.querySelector('ul');
debugger;
function getListRepos() {
  fetch(`https://api.github.com/orgs/${inputElement.value}`)
    .then(listResponse => listResponse.json())
    .then(listData => {
      listData.repos_url;
      console.log('listData', listData.repos_url);
      // fetch(data.repos_url)
      return fetch(`https://api.github.com/orgs/${inputElement.value}/repos`);
    })
    .then(elementList => elementList.json())
    .then(elementData => {
      for (let element of elementData) {
        const ul = document.querySelector('ul');
        const listContent = `<li>${element.name}</li>`;
        ul.innerHTML += listContent;
      }
    });
  debugger;
}
buttonElement.addEventListener('click', getListRepos);
