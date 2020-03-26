const items = [
  'Ada',
  1815,
  ['Informática', 'Matemática', 'Escritora'],
  {
    mother: 'Anna Isabella',
    father: 'Lord Byron'
  }
];
let acc = 0;
for (let i = 0; i < items.length; i++) {
  acc += i;
  console.log(``);
  console.log(`El dato ${items[i]} esta en posición ${acc} y es de tipo ${typeof items[i]}`);
}
