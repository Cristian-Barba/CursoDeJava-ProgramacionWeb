// 1.1.- Reto adicional: si el usuario existe, informe al usuario que ya tiene una cuenta.
const users = [];
const products = [];

// En esta parte se crea un id aleatorio para el usuario
const obtenerUUID = () =>
  "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) =>
    (
      +c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (+c / 4)))
    ).toString(16),
  );
// 1.- Cree una funcion llamda registrarse que permita agregar al array de usuarios un nuevo usuario.
const registrarse = (username, email, password) => {
  // payload es un termino muy comun para un conjunto de cosas que vas a usar, en este caso un objeto que representa a un usuario
  const payload = {
    _id: obtenerUUID(),
    username,
    email,
    password,
    // Con lo de abajo, obtenemos la fecha actual
    createdAt: new Date().toISOString(),
    isLoggedIn: false,
  };

  users.push(payload);

  return payload;
};

registrarse("Cris72", "cris123@gmail.com", "12345");

console.log(users);

// 2.- Cree una funcion llamada ingresar que permita al usuario iniciar sesion en la aplicacion.
const ingresar = (correo, contrasena) => {
  // users.findindex(({ _id }) => _id === id);
  //   Sel filtra el usuario por su email al comprobar que el usario esta registrado
  const usuarioFiltrado = users.filter((el) => {
    const email = el.email;
    return email === correo;
  });

  const usuarioActual = usuarioFiltrado[0];
  //   En caso de que no exista un usuario con el email regresar el error
  if (!usuarioActual) {
    console.log("El email o contraseña incorrecto");
    // Con el return que esta abajo se puede detener una funcion
    return;
  }

  //   Se valida el pássword con el usuario ya filtrado para saber si su correo existe o su perfil esta ya registrado
  const password = usuarioActual.password;
  if (contrasena === password) {
    // Con esta parte del codgio validamos que el usuario ya se logueo en nuestra aplicacion cambiando el isLoggedIn por ture y esto lo hicimos con el metodo findindex como se muestra a abajo ya que con lo que hicimos anteriormente con filter creamos un arreglo nuevo y nosotros queremos afectar el arreglo de objetos originial para saber si el usuario ya esta loggeado en nuestra app
    users[users.findindex(({ email }) => email === contrasena)].isLoggedIn =
      true;
    console.log("Ingresaste");
  } else {
    console.log("El email o contraseña incorrecto");
    return;
  }
};

// 3.- Sustituir con valores del DOM los parametros de la funcion
