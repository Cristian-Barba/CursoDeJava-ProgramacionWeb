var clima = prompt("Como se encuentra el clima el dia de hoy? (Soleado, lluvioso, Nublado, Chubascos)")

clima = clima.toLowerCase().trim();

switch (clima) {
case "soleado":
    document.write("El clima hoy es soleado, procura usar bloqueador");
    break;
case "lluvioso":
    document.write("El clima hoy es lluvioso, no olvides tu paraguas");
    break;
case "chubascos":
    document.write("Hoy hay probabilidad de chubascos, no olvides llevar impermeable");
    break;
    default:
        document.write("El clima hoy es nevado");
        

}