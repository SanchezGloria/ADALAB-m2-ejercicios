// FUNCIÓN PARA COGER SELECTORES HTML

function getEl(a) {
  const selection = document.querySelector(a);
  if (!selection) {
    console.log(`No existe ningún elemento con clase, id o tag llamado ${selection}`);
  } else {
    console.log('Existo');
    return selection;
  }
}
// LLAMO A LA FUNCIÓN
let paragraph = getEl('.content');

// EL RESULTADO LO CONVIERTO A ENTERO Y LO METO EN EL HTML
paragraph = parseInt(paragraph.innerHTML);

// FUNCIÓN PAR/IMPAR

function evenOdds(a) {
  if (a % 2 === 0) {
    console.log(`Este numero es PAR: ${paragraph}`);
    return true;
  } else {
    console.log(`Este numero es impar: ${paragraph}`);
    return false;
  }
}
// LLAMO A LA FUNCIÓN PAR/IMPAR --¡¡NO CON UN ARGUMENTO CUALQUIERA!!--
evenOdds(paragraph);
