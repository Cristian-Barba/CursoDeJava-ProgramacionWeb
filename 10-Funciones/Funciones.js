// Funcion sin parametros y sin return
function Suma(){
    alert(`La suma es ${2+2}`);
};

// Ejecutamos la funcion
Suma();

// Funcion coon parametros sin return
function SumaParametros(num1, num2){
    alert(`La suma es ${num1 + num2}`);
};

// Ejecutamos la funcion
SumaParametros(2,5);

// Funcion con parametros y con return
function SumaReturn(num1, num2){
    return num1 + num2;
};

// Ejecutamos la funcion
var mensaje = `La suma es ${SumaReturn(3,6)}`;
alert(mensaje);

// Funciones anonimas
var mensaje = function(num1, num2){
    return `La suma es ${num1 + num2}`
};

alert(mensaje(2,3));

// Esta es una funcion en una sola linea
var mensaje1 = (num1, num2) => `La suma es ${num1 + num2}`;

alert(mensaje1(1,1));