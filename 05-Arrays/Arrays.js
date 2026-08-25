var frutas = [
    "Pera", //index - 0
    "Manzana", //index - 1
    "Melon", //index - 2
    "Sandia", //index - 3
    "Piña"//index - 4
];

console.log(frutas[2]); //Melon
console.log(frutas[4]); //Piña
console.log(frutas[10]);//undefined

// Reasignacion del array
frutas[4] = "uvas";

// Esto devuelve el nuevo valor
console.log(frutas[4]);
// Esto nos devuelve la cantidad de elementos que tiene mi arreglo y no es un metodo, si no una propiedad (length), los metodos tienen parentesis
frutas.length;