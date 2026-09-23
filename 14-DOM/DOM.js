function Registrar() {
  // Variables
  let nombre, apellidos, fechaNacimiento, genero, nivelAcademico, generoTexto;
  // Capturamos datos
  nombre = document.getElementById("txtNombre").value;
  apellidos = document.getElementById("txtApellidos").value;
  fechaNacimiento = document.getElementById("txtFechaNac").value;
  nivelAcademico = document.getElementById("listNivel").value;

  //   Con el querySelectorAll apuntamos a todos los input que tuvieran el name genero y los guardo en la variable genero a manera de un array
  genero = document.querySelectorAll('input[name="genero"]');
  // Con el for recorrimos el arreglo que se guardo anteriormente para checar ciertos valores como el id o el checked y asi validar cual fue la opcion seleccionada
  //   leemos el nodelist para determinar el elemento marcado y obtener el valor
  for (let i = 0; i < genero.length; i++) {
    if (genero[i].checked === true && genero[i].id === "O") {
      generoTexto = document.getElementById("txtOtro").value;
    } else if (genero[i].checked === true) {
      generoTexto = genero[i].id;
    }
  }

  //   Creamos registro en pantalla
  CrearRegistro(
    `${nombre} ${apellidos}`,
    fechaNacimiento,
    nivelAcademico,
    generoTexto,
  );
}

// Funcion que realiza la interaccion para mostrar u ocultar el cuadro de texto para Otro
function SeleccionarGenero() {
  // Variables
  let rbOtro = document.getElementById("O");
  // Validamos el genero seleccionado
  if (rbOtro.checked === true) {
    // En esta parte estamos modificando mediante el id la clase del imput al seleccionar la opcion otro y esto lo hacemos con .classList.remove("invisible"); para quitar la clase y classList.add("visible"); para agregar la nueva clase del archivo css
    document.getElementById("txtOtro").classList.remove("invisible");
    document.getElementById("txtOtro").classList.add("visible");
  } else {
    // En esta parte basicamente hacemos lo opuesto de arriba por si se deja de selccionar la opcion otro y el usuario vuelve a seleccionar masculino o femenino se quite el imput de texto de otro
    document.getElementById("txtOtro").classList.remove("visible");
    document.getElementById("txtOtro").classList.add("invisible");
  }
  // Con esta parte de codigo, estamos haciendo que al deseleccionar otro no se guarde lo que posiblemente alla escrito el usuario y se mantega en blanco (solo en caso de que se hubiera seleccionado otra opcion)
  document.getElementById("txtOtro").value = "";
}

function AceptaTerminos() {
  // Variables
  let chkAcepto = document.getElementById("checkAcepto"); //getElementById nos trae un solo elemento o puede hacerlo y los demas getelement con cualquier otra forma como el TagName nos trae toda la lista de elementos que contiene el objeto y se necesita iterar, por eso se le coloco entre parentesis el 0, como señalando que en el array button posiscion 0 esta lo que necesito, pero hacerlo como esta abajo es una mala practica, lo mejor es iterarlo
  // Validamos si acepta o no los terminos
  if (chkAcepto.checked === true) {
    document.getElementsByTagName("button")[0].classList.remove("invisible");
    document.getElementsByTagName("button")[0].classList.add("visible");
  } else {
    document.getElementsByTagName("button")[0].classList.remove("visible");
    document.getElementsByTagName("button")[0].classList.add("invisible");
  }
}

function CrearRegistro(
  nombreCompleto,
  fechaNacimiento,
  nivelAcademico,
  generoTexto,
) {
  let tbody = document.getElementById("tbody");
  let tr = document.createElement("tr");

  //   Con esto se crea la tabla para pintarlo en pantalla
  // Investigar las etiquetas usadas por que no recuerdo para que sirven
  //   Creamos elementos de texto
  let txtNombre = document.createTextNode(nombreCompleto);
  let tdNombre = document.createElement("td");
  tdNombre.appendChild(txtNombre);
  tr.appendChild(tdNombre);

  let txtFechaNac = document.createTextNode(fechaNacimiento);
  let tdFecha = document.createElement("td");
  tdFecha.appendChild(txtFechaNac);
  tr.appendChild(tdFecha);

  let txtNivelAcademico = document.createTextNode(nivelAcademico);
  let tdNivel = document.createElement("td");
  tdNivel.appendChild(txtNivelAcademico);
  tr.appendChild(tdNivel);

  let txtGenero = document.createTextNode(generoTexto);
  let tdGnero = document.createElement("td");
  tdGnero.appendChild(txtGenero);
  tr.appendChild(tdGnero);

  tbody.appendChild(tr);
}
