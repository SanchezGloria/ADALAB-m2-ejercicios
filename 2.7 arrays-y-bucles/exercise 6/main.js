const buttonElement = document.querySelector('.btn');
const inputElement = document.querySelector('.js-movie');
const inputElement2 = document.querySelector('.js-movie2');

function getListOfMovies(ev) {
  let arrayMovies = [];
  arrayMovies[0] = inputElement.value;
  arrayMovies[1] = inputElement2.value;
  for (movie of arrayMovies) {
    console.log(`¡A mí también me encantó ${movie}! Tenemos mucho en común, humana.`);
  }
}
buttonElement.addEventListener('click', getListOfMovies);
