function getDogImage1() {
  fetch('https://dog.ceo/api/breed/spaniel/cocker/images/random')
    .then(response => response.json())
    .then(data => {
      const img = document.querySelector('img');
      img.src = data.message;
      img.alt = 'Un perro';
    });
}

const btn2 = document.querySelector('.js-dog');
btn2.addEventListener('click', getDogImage1);
