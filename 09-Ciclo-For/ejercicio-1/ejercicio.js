// Hacer un programa que solicite la cantidad de ingredientes para preparar un platillo y los ingredientes para su preparacion, por ultimo imprimir en pantalla la lista de ingredientes.

// 1. Variables
var cantIngredientes, nombrePlatillo;
var arrayIngredientes = [];

// 2. Capturar los datos necesarios
nombrePlatillo = prompt('Ingresa el nombre de tu platillo');
cantIngredientes = Number(prompt('Ingresa la cantidad de ingredientes para tu platillo'));

// 3. Procesamineto de datos
for (var i = 1; i <= cantIngredientes; i++){
    arrayIngredientes.push(prompt(`Ingresa el nombre del ingrediente ${i}`));
};
// Con <br> se puede hacer un salto de linea al igual que en el HTML y se usa como lo coloco a continuacion
// la <b></b> sirve para poner en negritas un texto
document.write(`<b>Ingredientes para hacer ${nombrePlatillo}</b> <br>`);
for (var j = 0; j < arrayIngredientes.length; j++){
    document.write(`${j + 1}. ${arrayIngredientes[j]} <br>`)
};