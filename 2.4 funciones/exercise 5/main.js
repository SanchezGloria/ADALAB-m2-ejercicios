'use strict';

function getEl(a) {
  const selection = document.querySelector('a');
  return selection;
}
const btnEl = getEl('.btn');

// EJERCICIO 6

// EJEMPLO 1

function getEl(a) {
  const selection = document.querySelector('a');
  if (!selection) {
    console.log(`No existe ningún elemento con clase, id o tag llamado ${selection}`);
  } else {
    return selection;
  }
}

// EJEMPLO 2

function getEl(a) {
  const selection = document.querySelector(a);
  if (selection.value === undefined) {
    console.log(`No existe ningún elemento con clase, id o tag llamado ${selection}`);
  } else {
    return selection;
  }
}
