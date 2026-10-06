const frutas = [
  "Pera",
  "Manzana",
  "Melon",
  "Sandia",
  "Piña",
  "Mandarina",
  "Guayaba",
];

// Siempre se tiene que usar un callBack para poder usar map
// En esta parte delcodigo se esta realizando lo siguiente, en el arreglo frutas que esta arriba se le esta aplicando el metodo map que nos permite modificar el arreglo completamente, se guarda el arreglo en frutasEnMayusculas y se le hace un callBack o en otras palabras se manda a llamar una funcion dentro del metodo map y no se le ponen los parentesis ya que es un callBack y el mismo metodo hace la llamada de la funcion
function CallBack(el) {
  // El metodo map al iterar cada uno de los elementos de frutas como si fuera un for los modifica y en este caso se hacen mayusculas mediante el metodo toUpperCase()
  return el.toUpperCase();
}

const frutasEnMayusculas = frutas.map(CallBack);
// La de abajo es una manera mucho mas sencilla de hacer el callback mediante un arrow function y funciona exactamente igual que la de arriba
// const frutasEnMayusculas = frutas.map(() => el.toUpperCase());

// En esta parte del codigo hacemos lo mismo que con las frutas solo que aqui lo hacemos con numeros al elevar cada uno de ellos al cuadrado e imprimirlo en pantalla
const arrayDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function exponenciarNumerosAlCuadrado(numero) {
  return numero ** 2;
}

const numerosAlCuadrado = arrayDeNumeros.map(exponenciarNumerosAlCuadrado);
console.log(numerosAlCuadrado);
