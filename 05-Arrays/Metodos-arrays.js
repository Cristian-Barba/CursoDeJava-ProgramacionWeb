// METODOS
// Push y Pop
// Push agrega un elemento al final del arreglo
// Pop elimina el ultimo elemento de la lista

var frutas = [
    "Pera", //index - 0
    "Manzana", //index - 1
    "Melon", //index - 2
    "Sandia", //index - 3
    "Piña"//index - 4
];

// Ejemplo push
frutas.push("Fresa");
// Ejemplo pop
frutas.pop(); //Elimina
var frutaPodrida = frutas.pop(); //Guardo el elemento borrado al final


// Unshift y shift
// Unshift agrega un elemento al inicio del arreglo
// Shift elimina el primer elemento del arreglo

// Ejemplo unshift
frutas.unshift("Platano");
// Ejemplo shift
frutas.shift();
var otraFrutaPodrida = frutas.shift(); //Guardo el elemento borrado al inicio


// Slice
// Slice quita una parte de una cadena y devuelve una nueva cadena
// En el metodo slice se van a eliminar datos de mi arreglo en el punto que se lo indique, en este ejemplo le estoy señalando que comience en el indice 2 y corte hasta el ultimo
frutas.slice(2);
// En este ejemplo le estoy indicando que el corte comienza en el indice 2 y termina en el 4, pero como nota: no toma el ultimo indice, en este caso solo elimina 2 y 3, no toma el 4 tambien
frutas.slice(2,4);
// Si yo coloco un numero negativo en el segundo parametro dentro del parentesis, no va a tomar esa cantidad de elementos, por ejemplo, le estoy indicando que va a eliminar elementos a partir del indice dos pero los ultimos tres elementos no los va a tocar por que se lo señale con el negativo
frutas.slice(2,-3);


// Splice
// Sirve para agregar o borrar elementos de una arreglo, Pide como parametros el index y el numero de elementos a borrar. Splice modifica el arreglo original 

// Ejemplo 1 - splice
// Aqui le estoy diciendo que a partir del indice 2 sobre escriba lo que viene en los parentesis, recorriendo el elemento del indice 2 al 4 y en su lugar poniendo lo que esta en comillas, ademas le estoy indicando con el 0 que solo va  agregar elementos y no va a borrar nada
frutas.splice(2,0, "Pepino", "Limno");
// Ejemplo 2 - splice
// Aqui va a suceder lo mismo de arriba, se van a agreagr los elementos a partir del indice 2 pero esta vez el elemento que estaba en el indice 2 no se mueve, si no que se elimina y me regresa el valor eliminado
frutas.splice(2,1, "Pepino", "Limno");


// Split
// Divide una cadena(string) en una matriz de subcadenas, tomando como referencia donde encuentre un caracter indicado

// Ejemplo 1 - Split
// En esta parte se esta guardando en encabezado un string que esta dividido por comas pero al estar entre las comillas dobles sigue siendo un solo elemento
var encabezado = "Nombre, Edad, Domicilio";
// Aqui con el metodo split estamos separando ese string, al indicarle entre los parentesis que lo que divide ese string es una coma (","), puede ser cualquier caracter separador
var array = encabezado.split(",");
// array = ["Nombre", "Edad", "Domicilio"]


// Sort
// Ordena la lista de manera ascendente y alfabeticamente (A-Z) por defecto
// Tambien podria funcionar con numeros pero con una funcion
frutas.sort();
// frutas = [Manzana, piña] los ordena alfabeticamente


// Reverse
// Coloca los elementos del arreglo al revés, Este metodo altera el arreglo original

// Ejemplo 1
var fechaGringa = "2026-12-30";
// Separamos primero la fecha con split y los guiones(-) y despues lo invertimos con reverse()
fechaGringa.split("-").reverse().join("-");
// join es un metodo que sirve para unir los elementos de un array y hacerlos un solo string mediante el caracter de union que seleccione, en este caso estoy uniendo la fecha de nuevo, que habia sido separada y volteada mediante un signo de guion ("-")
console.log(fechaGringa);
// fechaGringa = ["30", "12", "2026"], Este seria el resultado
