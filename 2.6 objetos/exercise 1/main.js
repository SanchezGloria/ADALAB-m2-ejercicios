const adalaber1 = {
  name: 'Susana',
  age: 34,
  proffesion: 'periodista'
};

const textElement = document.querySelector('.adalaber');
textElement.innerHTML = 'Mi nombre es ' + adalaber1.name + ' tengo ' + adalaber1.age + ' años y soy ' + adalaber1.proffesion;

const adalaber2 = {
  name: 'Rocío',
  age: 25,
  proffesion: 'actriz'
};

const paragraphElement = document.querySelector('.adalaber2');
paragraphElement.innerHTML = 'Mi nombre es ' + adalaber2.name + ' tengo ' + adalaber2.age + ' años y soy ' + adalaber2.proffesion;
