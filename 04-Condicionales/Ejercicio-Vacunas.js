// Todos los prompt por defecto regresan un string
var Edad = prompt("Cual es tu edad?");
// Esta es una manera de convertir un string entregado por un prompt a Number 
var mayorDeEdad = Number(Edad) >= 18;
var Treinta = Edad >= 30;
var Genero = prompt("Cual es tu genero? M/H");
var mujer = "M";
var Embarazo;
var semanasDeGestacion;

// como nota personal si declare una variable arriba y le asigne valor con un prompt y abajo quiero que interactue con otra variable, hacer la interaccion debajo del prompt y no arriba por que este lenguaje funciona como cascada y eso genera errores
if (Genero == mujer){
     Embarazo = prompt("Estas embarazada?");
     if (Embarazo === "si"){
     semanasDeGestacion = prompt("Cuantas semanas de gestacion tienes?");
}
};

var semanasRequeridas = Number(semanasDeGestacion) >= 9;
var municipioFronterizo = prompt("Resides en un municipio froterizo?");
var municipioValido = "si";


if (mayorDeEdad && municipioFronterizo == municipioValido){
    console.log("Te puedes vacunar");
} else if (mayorDeEdad && Treinta){
    console.log("Te puedes vacunar");
} else if (mayorDeEdad && semanasRequeridas) {
    console.log("Te puedes vacunar");
} else {
    console.log("No te puedes vacunar");
}
