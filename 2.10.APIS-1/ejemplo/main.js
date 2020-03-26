function getDogImage() {
  fetch('https://dog.ceo/api/breed/chihuahua/images/random')
    .then(response => response.json())
    .then(data => {
      const img = document.querySelector('img');
      img.src = data.message;
      img.alt = 'Un perro';
    });
}
function getDogImage2() {
  fetch('https://dog.ceo/api/breed/spaniel/cocker/images/random')
    .then(response => response.json())
    .then(data => {
      const img = document.querySelector('img');
      img.src = data.message;
      img.alt = 'Un perro';
    });
}

const btn = document.querySelector('.js-dog');
const btn2 = document.querySelector('.js-dog-c');
btn.addEventListener('click', getDogImage);
btn2.addEventListener('click', getDogImage2);

// function getDogImage() {
//   fetch('https://dog.ceo/api/breeds/image/random')
//     .then(response => response.json())
//     .then(data => {
//       const img = document.querySelector('img');
//       img.src = data.message;
//       img.alt = 'Un perro';
//     });
// }
// const btn = document.querySelector('.js-dog');
// btn.addEventListener('click', getDogImage);
