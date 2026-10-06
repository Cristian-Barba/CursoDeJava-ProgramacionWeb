const frutas = [
  "Pera",
  "Manzana",
  "Melon",
  "Sandia",
  "Piña",
  "Mandarina",
  "Guayaba",
];

// Con esto estamos filtrando lo que se indica abajo mediante el uso de filter y el uso de un callback, ademas, el filter ya de entrada itera cada uno de los elementos del arreglo frutas
const callBack = function (el) {
  // Filtrar piña, pera, manzana
  let esValido;

  // Esto que hice aqui en el switch es como hacer un or dentro de un if, es la equivalencia
  switch (el) {
    case "Piña":
    case "Pera":
    case "Manzana":
      esValido = true;
      break;
    default:
      esValido = false;
      break;
  }

  return esValido;
};
// Tanto filter como map nos crean un nuevo arreglo con los cambios que se le realizo
const piñaPeraManzana = frutas.filter(callBack);
