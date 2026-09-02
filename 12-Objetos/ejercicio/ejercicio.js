// Crear clase
// Una clase es el molde de un objeto para poder reutilizarlo haciendo copias del mismo
class Alumnos {
    constructor(nombre, promedio){
        this.nombre = nombre,
        this.promedio = promedio
    }
}

let arregloAlumnos = [];

for(let i = 1; i <= 3; i++){
    let nombre = prompt(`Ingresa el nombre del alumno ${i}`);
    let promedio = Number(prompt(`Ingresa el promedio del alumno ${i}`));
    let alumno = new Alumnos(nombre, promedio);
    arregloAlumnos.push(alumno);
}

console.log(arregloAlumnos);
