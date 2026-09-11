// inmutabilidad
// spread o rest operator

const arrayOriginal = [{}, {}, {}, {}];

const copiaDelArregloOriginal = [...arrayOriginal]; // De esta manera se puede clonar un array

Object.freeze(arrayOriginal); // De esta manera se puede congelar un array y ya no se pueda modificar en el resto del codigo
// Metodos mutan el array original

// Push, pop, unshift, shift, slice, splice

const miObjeto = {};

const miOtroObjeto = { ...miObjeto }; // Tambien de esta manera se puede clonar un objeto
