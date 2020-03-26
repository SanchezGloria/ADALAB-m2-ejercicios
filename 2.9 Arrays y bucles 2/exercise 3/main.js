const lostNumbers = [4, 8, 15, 16, 23, 42];

let arr = [];
let arr2 = [];
function bestLostNomber() {
  for (let number of lostNumbers) {
    if (number % 2 === 0) {
      arr.push(number);
    }
  }
  for (let number of lostNumbers) {
    if (number % 3 === 0) {
      arr2.push(number);
    }
  }
  console.log(arr);
  console.log(arr2);
  let bigArray = arr.concat(arr2);
  console.log(bigArray);
}

bestLostNomber();
