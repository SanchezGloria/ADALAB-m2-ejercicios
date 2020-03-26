let acc = 0;
const numbers = [2, 4, 8, 7, 3, 6];
function average(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    acc = acc += numbers[i] / numbers.length;
    // result = acc / numbers.length;
  }
  return acc;
  // console.log('La media es ' + acc);
}
console.log(average(numbers));
