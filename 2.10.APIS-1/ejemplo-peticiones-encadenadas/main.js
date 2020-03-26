// PETICION LISTADO DE RAZAS

// function getBreeds() {
//   fetch('https://dog.ceo/api/breeds/list')
//     .then(response => response.json())
//     .then(data => {
//       console.log('Breeds data response: ', data);

//       const ul = document.querySelector('ul');
//       const breeds = data.message;
//       let ulContent = '';

//       for (const breed of breeds) {
//         const breedContent = `<li>${breed}</li>`;
//         ulContent += breedContent;
//       }
//       ul.innerHTML = ulContent;
//     });
// }
// const btn = document.querySelector('.js-btn');
// btn.addEventListener('click', getBreeds);

//  PETICION DE UNA RAZA CONCRETA DE PERRO

function getBreedsImage() {
  fetch('https://dog.ceo/api/breeds/list')
    .then(breedsResponse => breedsResponse.json())
    .then(breedsData => {
      const breeds = breedsData.message;
      return fetch('https://dog.ceo/api/breed/' + breeds[83] + '/images/random');
    })
    .then(imageResponse => imageResponse.json())
    .then(imageData => {
      // for (img of imageData) {
      // }
      const img = document.querySelector('img');
      img.src = imageData.message;
      img.alt = 'Un perro';
    });
}
const btn = document.querySelector('.js-btn');
btn.addEventListener('click', getBreedsImage);
