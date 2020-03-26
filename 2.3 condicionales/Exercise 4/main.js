let dogAge = 100;
let humanAge = 15;
if (dogAge === 1) {
  console.log(`Tu perro tiene ${humanAge} años`);
} else if (dogAge === 2) {
  console.log(`Tu perro tiene  ${humanAge + 9}  años`);
} else if (dogAge => 3) {
  console.log(`Tu perro tiene  ${(dogAge - 2) * 5 + 24}  años`);
} else {
  console.log('El perro está muerto');
}
