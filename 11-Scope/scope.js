// Variables globales
let nombre = 'Cristian';
let anioNacimiento = 2004, anioActual = 2026;

// Variables de ambito local
function CalculaEdad(anioNacimiento, anioActual){
    let edad = anioActual - anioNacimiento;
    return edad;
};

alert(`Hola ${nombre}, tu edad es ${CalculaEdad(anioNacimiento, anioActual)}`);