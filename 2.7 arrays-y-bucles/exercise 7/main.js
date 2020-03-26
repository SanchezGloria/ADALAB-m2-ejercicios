// debugger;

const adalabers = [
  {
    name: 'María',
    age: 29,
    proffesion: 'diseñadora'
  },
  {
    name: 'Lucía',
    age: 31,
    proffesion: 'ingeniera química'
  },
  {
    name: 'Susana',
    age: 34,
    proffesion: 'periodista'
  },
  {
    name: 'Rocío',
    age: 24,
    proffesion: 'actriz'
  },
  {
    name: 'Inmaculada',
    age: 21,
    proffesion: 'diseñadora'
  }
];

function countAdalabers() {
  for (let i = 0; i < adalabers.length; i++) {
    console.log(`El número de adalabers en el listado es: ${adalabers.length}`);
  }
}
countAdalabers();

function averageAge() {
  acc = 0;
  for (let i = 0; i < adalabers.length; i++) {
    acc += adalabers[i].age / adalabers.length;
  }
  console.log('La media es ' + acc);
}
averageAge();

function youngest() {
  acc = 100;
  for (let i = 0; i < adalabers.length; i++) {
    if (adalabers[i].age < acc) {
      acc = adalabers[i].age;
    } else {
      acc = acc;
    }
  }
  console.log(`La adalaber más joven tiene ${acc} años`);
}
youngest();

function countDesigners() {
  acc = 0;
  for (let i = 0; i < adalabers.length; i++) {
    if (adalabers[i].proffesion === 'diseñadora') {
      acc++;
    }
  }
  console.log(`El número de diseñadoras es ${acc}`);
}

countDesigners();
// debugger;
// let acc = 0;
// function averageAge() {
//   for (let i = 0; i < adalabers.length; i++) {
//     acc = acc += adalabers[i] / adalabers.length;
//     // result = acc / adalabers.length;
//   }
//   console.log('La media es ' + acc);
// }

// averageAge();
