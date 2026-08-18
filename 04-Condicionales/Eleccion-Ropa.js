var estilo1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX_6dqj5McrpozNB-4ujXKW-kvLmcrJL4Yqv28o9K4AQ&s=10";
var estilo2 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTakT3eRtL0anxf1PbJGw3AmFNM8BexegwyP5Nrp7x5LQ&s=10";
var estilo3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvzBKGQ1clx7DaAMwZbBVbsZsv_gRXPRoLTFQoBgqOcw&s";

var Estilo1 = prompt("Te gusta el color naranja?");
var Estilo2 = prompt("Te gustan los estilos color negro totalmente?");
var Estilo3 = prompt("Te gusta un estilo vaquero?");

// Esta es otra manera de agregar los links en las variables y abajo colocar las variables, se ocupa poner este formato: `<img src="${estilo1}">` y asi agregamos una imagen
if(Estilo1 === "si"){
    document.write(`<img src="${estilo1}">`);
} else if (Estilo2 === "si"){
    document.write(`<img src="${estilo2}">`);
} else if (Estilo3 === "si"){
    document.write(`<img src="${estilo3}">`);
}

// Esta es otra manera de hacer lo anterior de colocar imagenes en pantalla

// if(Estilo1 === "si"){
//     document.write("<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX_6dqj5McrpozNB-4ujXKW-kvLmcrJL4Yqv28o9K4AQ&s=10'>");
// } else if (Estilo2 === "si"){
//     document.write("<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTakT3eRtL0anxf1PbJGw3AmFNM8BexegwyP5Nrp7x5LQ&s=10'>");
// } else if (Estilo3 === "si"){
//     document.write("<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvzBKGQ1clx7DaAMwZbBVbsZsv_gRXPRoLTFQoBgqOcw&s'>");
// }

// Concatenacion
var string1 = "Hola";
var string2 = "Cristian";
var unirString = `${string1} ${string2}`;
console.log(unirString);

// `` estos se colocan con altGr en mi teclado