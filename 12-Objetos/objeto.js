// Declaracion de un objeto literal
let computadora = {
    marca: "Asus",
    procesador: "Core i3",
    cantidadRam: 8,
    enciende: true,
    puerto: ["Usb tipo A", "Usb tipo C", "HDMI", "Jack"],
    encenderApagar: function(onOff){
        if (onOff === 1){
            return "Encendio";
        } else {
            return "Apago";
        };
    }
};

// Acceder a los valores de un objeto 
alert(`El computador de marca ${computadora.marca} tiene una memoria ram de ${computadora["cantidadRam"]}`);

// Acceder a los metodos del objeto
alert(`El computador ${computadora.encenderApagar(1)}`);

// Como sobreescribir los valores de las propiedades
computadora.marca = "Apple";

// Desestructuracion de un objeto
computadora.maca = "Lenovo";
const{cantidadRam, marca, enciende} = computadora;
alert(`El computador de marca ${marca} tiene una memoria ram de ${cantidadRam}`);
