// Estructuras de control
// do {} while();
// while(){};
// for(){};
// if (){};


// Repeticion
let contador = 0;
while (contador <= otraVariable){
    contador++;
};
const array = [];
for (let index = 0; x <= array.length; i++){
    const element = array[index];
    console.log(element);
};

function EsLunes (){
    const fecha = new Date(); //Nos da la fecha de la computadora
    const dia = fecha.getDay(); //Nos da en numero del 0 a el 6 los dias de la semana, 0 = Domingo, 6 = Sabado
    return dia === 1;
};

do {} while(EsLunes())

// 3 formas
function NombreDeLaFuncion (){};

const otraFuncion = function(){};

// Azucar sintactica ES6
// Funciones flecha
// Este tipo de funcion ya tiene implicito el return
const nombreFuncion = () => {};

// Hoisting

// TAREA "Coertion"