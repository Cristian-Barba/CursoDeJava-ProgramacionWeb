// Funciones
Saludar("Cristian");

function Saludar(nombre){
    console.log(`Hola ${nombre}`)
};

// Variables
console.log(gato);

var gato = 'bolay';

console.log(perro);

// const y let no tienen hoisting
// Tienen scope de bloque {}
const perro = 'choco';

console.log(miVariable); //undefined

if (true){
    var miVariable = 'Cris';
};

console.log(miVariable); // cris

console.log(hola); //ReferenceError: no esta definida

const Saludar2 = function(){
    var hola = 'Bienvenido';
};

console.log(hola); //ReferenceError: no esta definida