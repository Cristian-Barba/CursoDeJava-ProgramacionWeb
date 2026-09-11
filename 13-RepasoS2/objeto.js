// Declara un objeto literal vacio
const objeto = {};

// Declara un objeto literal con dos propiedades de tu animal favorito
const gato = {
  nombre: "Mimi",
  color: "Negro",
  esHembra: true,
};

// Accede a una propiedad de tu objeto anterior
gato.nombre;
console.log(gato.esHembra);

// Reasigna el valor de una propiedad del objeto anterior
gato.color = "Blanco";

// Agrega dos propiedades a tu arreglo anterior, una de tipo array y otra numerica
// De esta manera se garegan propiedades que no existen a un obejto, como si se estuvieran sobreescribiendo pero al no existir esa propiedad se agrega al objeto en automatico
gato.edad = 2;
gato.vacunas = ["Triple felina", "Rabia"];

// Crear un objeto de usuarios con su nombre como primer y unica propiedad y dentro como valor un objeto con 5 propiedades, las cuales seran, email, habilidades, edad, id, puntaje
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
