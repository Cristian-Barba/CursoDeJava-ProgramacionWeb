// Contexto: solicitar los nombre y apellidos por separado, unirlos e imprimirlos

//1. Variables
var texto, nombre;

// 2. Solicito datos y proceso
for(var i = 1; i <= 4; i++){
    texto = prompt('Ingresa el nombre');
    if (i === 1){
        nombre = texto;
    } else {
         nombre += ` ${texto}`;
    };
};

document.write(nombre);