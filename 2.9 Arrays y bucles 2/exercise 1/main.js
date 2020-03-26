// EJERCICIO 1: meter del 1 al 100 en un array. OJO!:
// SI SE LOGUEA DENTRO DEL LOOP, VAN A SALIR LOS 99 PASOS INTERMEDIOS!
// SI SE PONE ARR.PUSH(I) SOLAMENTE, HAY QUE CAMBIAR LA CONDICIÓN EN EL LOOP (let i = 1; i <= 100; i++)

let arr = [];
function get100Numbers() {
  for (let i = 0; i < 100; i++) {
    arr.push(i + 1);
    // console.log(arr);
  }
}

get100Numbers();
console.log(arr);

// EXPERIMENTO 2

// FORMA DE SUMAR Y LOGUEAR NÚMEROS SIN METERLOS EN UN ARRAY

let arr = [];
function get100Numbers() {
  let acc = 0;
  for (let i = 1; i <= 100; i++) {
    arr = acc + i;
    console.log(arr);
  }
}

get100Numbers();

// EXPERIMENTO 3

// EN ESTE CASO, SI EL ARRAY SE DECLARA FUERA DE LA FUNCIÓN, SE EJECUTA LA FUNCIÓN Y AL LOGUEAR, EL ARRAY APARECE EN SU TOTALIDAD, SIN LOS 99 PASOS INTERMEDIOS

// SI EL ARRAY SE METE DENTRO DE LA FUNCIÓN, NO FUNCIONA.

let arr = [];
function get100Numbers() {
  for (let i = 1; i <= 100; i++) {
    arr.push(i++);
  }
}

get100Numbers();
console.log(arr);

// EXPERIMENTO 4

// AQUÍ AL PUSHEAR i++, SUMA UNA MÁS DE LA QUE PREVIAMENTE SE LE ORDENA EN LA TERCERA PARTE DEL PARÉNTESIS (LA ACTUALIZACIÓN DEL LOOP) QUE ES (otro i++) DE TAL FORMA, QUEDARÍA 1, 3, 5, 7, ... 99

let arr = [];
function get100Numbers() {
  for (let i = 1; i <= 100; i++) {
    arr.push(i++);
  }
}

get100Numbers();
console.log(arr);

// EJERCICIO 2

let arr = [];
function get100NumbersReversed() {
  for (let i = 1; i <= 100; i++) {
    arr.push(i);
  }
}

get100NumbersReversed();
console.log(arr.reverse());
