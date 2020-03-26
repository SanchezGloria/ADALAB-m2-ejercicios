'use strict';

const age = document.querySelector('.age');

const totalHours = 24 * 365 * parseInt(age.innerHTML);
console.log(`He vivido:  ${totalHours} horas`);
