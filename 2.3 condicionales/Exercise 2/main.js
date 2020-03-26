let name = 'Gloria';
let secondName = 'Raquel';
if (name || secondName) {
  console.log(`Bienvenida, ${name || secondName}`);
} else {
  console.log('Lo siento pero el usuario que has introducido no está registrado.');
}

// SEGUNDA FORMA DE HACERLO

// let name = 'd';
// let secondName = '';
// if (name) {
//   console.log('Bienvenida, ', name);
// } else if (secondName) {
//   console.log('Bienvenida, ', secondName);
// } else {
//   console.log('Lo siento pero el usuario que has introducido no está registrado.');
// }
