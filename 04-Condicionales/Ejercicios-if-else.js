// Ejercicio 1
// Le faltan validaciones
var respuesta = prompt("Eres bellisimo/a? si/no");

if (respuesta === "si"){
    alert("Ciertamente");
} else {
    alert("No te creo");
};

// Ejercicio 2
var numero = prompt("Dame un numero");
var numeroDivisible = Number(numero)%2;

if (numeroDivisible === 0){
    document.write("El numero", " " + numero + " ", "es divisible entre 2");
} else {
     document.write("El numero", " " + numero + " ", "no es divisible entre 2");
};

// Ejercicio 3
var numero2 = prompt("Dame un numero");
var numeroDivisible = Number(numero2)%2;

if (numeroDivisible === 0){
    alert("El numero es par");
} else {
    alert("El numero es impar");
};

// Ejercicio 4
var cliente = prompt("Dame tu numero de cliente");
var Ganador = Number(cliente) === 1000;

if (Ganador){
    console.log("Ganaste un premio");
} else {
    console.log("Lo sentimos cliente numero", " " + cliente + " ", "sigue participando");
};

// Ejercicio 5
 var n1 = prompt("Ingresa un numero");
 var n2 = prompt("Ingresa otro numero");
 var resultado1 = n1 < n2;

 if (resultado1) {
    console.log("El numero", " " + n1 + " ", "es menor que", " " + n2);
 } else {
    console.log("El numero", " " + n2 + " ", "es menor que", " " + n1);
 };

 // Ejercicio 6

 var n3 = Number(prompt("Dame un numero"));
 var n4 = Number(prompt("Dame un numero"));
 var n5 = Number(prompt("Dame un numero"));
 var resultado2 = n3 > n4 && n3 > n5;
 var resultado3 = n4 > n3 && n4 > n5;
 var resultado4 = n5 > n4 && n5 > n3;

 if (resultado2) {
    console.log("El numero", " " + n3 + " ", "es el numero mayor");
 } else if (resultado3) {
    console.log("El numero", " " + n4 + " ", "es el numero mayor");
 } else if (resultado4) {
    console.log("El numero", " " + n5 + " ", "es el numero mayor");
 };

 // Ejercicio 7

 var dia = prompt("Ingresa un dia de la semana");
 
 if (dia === "Lunes"){
    console.log("Adivinaste hoy es lunes");
 } else if (dia === "Viernes"){
    console.log("Adivinaste hoy es viernes");
 } else if (dia === "Sabado"){
    console.log("Adivinaste hoy es sabado");
 } else if (dia === "Domingo"){
    console.log("Adivinaste hoy es domingo");
 } else {
    console.log("Dia equivocado");
 };

 // Ejercicio 8

 var calificacion = Number(prompt("Proporcioname tu calificacion entre 1-10"));
 var valido = calificacion >= 1 && calificacion <= 10;
 var reprobado = calificacion < 6;
 var regular = calificacion >= 6 && calificacion <= 8;
 var bien = calificacion = 9;
 var excelente = calificacion = 10;

 if (valido) {
    if (reprobado){
        console.log("Estas reprobado");
    } else if (regular){
        console.log("Tienes calificacion regular");
    } else if (bien){
        console.log("Tienes buena calificacion");
    } else if (excelente){
        console.log("Tienes calificacion excelente");
    }
 } else {
    console.log("Error");
 };

  // Ejercicio 9

  var opcion = prompt("Deseas topping en tu helado");

  var varV = opcion == "no" || opcion == "NO";
  var sabor;
  var precio = 50;

  if (varV){
    console.log("El costo de su helado seran:"," " + precio + " ","pesos");
  } else {
    sabor = prompt("Los topping disponibles son: Oreo, Kitkat y Brownie, cual desea agregar?");
    // SANITIZAR DATOS
    // lo que coloque despues del primer punto colocado en saber se les llama metodos, el primero de tolowercase sirve para que todas las entradas del prompt se conviertan en minusculas y el metodo trim sirve para quitar los posibles espacios que pueda colocar el usuario al inicio y final de lo que ingreso
    // Los metodos son de uso exclusivo para ciertos tipos de datos y estos que acabo de colocar son para strings que es lo que recibe una variable de un prompt
    sabor = sabor.toLowerCase().trim();
  };

//   if (sabor === "oreo"){
//     // el += sirve para sumarle una cantidad a una variable
//     precio += 10;
//     console.log("El costo del topping Oreo son 10 pesos, asi que el costo final seran:"," " + precio + " ","pesos");
//   }else if(sabor === "kitkat"){
//     precio += 15;
//     console.log("El costo del topping Kitkat son 15 pesos, asi que el costo final seran:"," " + precio + " ","pesos");
//   }else if(sabor === "brownie"){
//     precio += 20;
//     console.log("El costo del topping Brownie son 20 pesos, asi que el costo final seran:"," " + precio + " ","pesos");
//   }else{
//     console.log("No ha seleccionado ningun topping disponible");
//   };


// SWITCH CASE
  switch (sabor){
    case "oreo":
        precio += 10;
        break;
    case "kitkat":
        precio += 15;
        break;
    case "brownie":
        precio += 20;
        break;
        default:
            precio += 0;
  };

  console.log(`Tu helado cuesta: ${precio}`);