var personnel = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
];
// En esta parte hicimos el objeto luke que sacamos del arreglo de objetos que esta arriba
const luke = personnel[0];
// Aqui hicimos la desestructuracion del objeto para poder manejarlo mejor
const { id, name, pilotingScore, shootingScore, isForceUser } = luke;
// En esta parte imprimimos en consola las propiedades que desestructuramos arriba
console.log(name, shootingScore, isForceUser);

// Filtramos los jedis
const filtrarJedis = (persona) => persona.isForceUser;
// Array de Objetos
const jedi = personnel.filter(filtrarJedis);

// console.log(jedi);

// Sumamos sus score
const sumaPuntajesDeHabilidades = function (jedi) {
  return jedi.pilotingScore + jedi.shootingScore;
};
// Array de numeros
const puntajesDeJedis = jedi.map(sumaPuntajesDeHabilidades);

// Obtenemos la suma general
function fuerzaTotalDeJedis(acumulador, puntajeActual) {
  return acumulador + puntajeActual;
}

// Numero
const resultado = puntajesDeJedis.reduce(fuerzaTotalDeJedis, 0);
console.log(resultado);

// Forma corta de realizar todo lo anterior
console.log(
  personnel
    .filter(filtrarJedis)
    .map(sumaPuntajesDeHabilidades)
    .reduce(fuerzaTotalDeJedis, 0),
);
