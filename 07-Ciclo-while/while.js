// Contexto: Calcular la edad de una persona e imprimir los numeros del 1 hasta la edad de una persona.

// 1. variables
var edad, anioActual, anioNacimiento;
var contador = 1;
// 2. solicitar datos al usuario
anioActual = Number(prompt('Ingresa el año actual'));
anioNacimiento = Number(prompt('Ingresa tu año de nacimiento'));
// 3. Procesamiento de los datos
edad = anioActual - anioNacimiento;

while(contador <= edad){
    console.log(contador);
    contador ++;//Solo permite contadores de 1 en 1
    // contador += 1; incremento de 1 o 2 ... n, etc, los que quieras
    // contador = contador + 1; contador antiguo
};
console.log(`Tu edad es ${edad}`);