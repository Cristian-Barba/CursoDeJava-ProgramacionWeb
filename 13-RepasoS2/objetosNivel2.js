const usuarios = {
  Cristian: {
    email: "Correo",
    habilidades: ["Correr", "saltar soga"],
    edad: 32,
    id: 20,
    puntaje: 8,
  },
  Daynara: {
    email: "Correo",
    habilidades: ["Saltar", "Ingles intermedio"],
    edad: 28,
    id: 21,
    puntaje: 9,
  },
};

// Los signos de interrogacion se les coloca en ese lugar para que el programa no te rompa en un error grande si no que solo marque como undefined una propiedad no definida en el objeto
const numeroDeHabilidadesCristian = usuarios?.Cristian?.habilidades?.length;
console.log(numeroDeHabilidadesCristian);

// Obtener las propiedades en array
const keys = Object.keys(usuarios);
// console.log(keys);
// Obtener los valores en array
const values = Object.values(usuarios);
// console.log(values);
// Obtener las propiedades y valores en array
const entries = Object.entries(usuarios);
// console.log(entries);

// Encuentra el nombre del usuario con el stack SI
const SI = ["Saltar", "Ingles intermedio"];

const validarHabilidades = function (habilidad) {
  return SI.includes(habilidad);
};

const buscar = function (elemento) {
  // const habilidades = elemento.habilidades;
  const { habilidades } = elemento;
  const habilidadesFiltradas = habilidades.filter(validarHabilidades);
  //   return habilidadesFiltradas.every(validarHabilidades); // true/false
  return habilidadesFiltradas.length === 4;
};
// Con la funcion findIndex podemos buscar algo
const index = values.findIndex(buscar); // indice o -1

if (index !== -1) {
  const nombreDelUsuario = keys[index];
  console.log(nombreDelUsuario);
}

// CallBack hell

function SumaDeDosNumeros(numero1, numero2) {
  return numero1 + numero2;
}
function RestaDeDosNumeros(numero1, numero2) {
  return numero1 - numero2;
}
function MultiplicacionDeDosNumeros(n1, n2) {
  return n1 * n2;
}

console.log(
  MultiplicacionDeDosNumeros(SumaDeDosNumeros(2, 2), RestaDeDosNumeros(4, 2)),
);
