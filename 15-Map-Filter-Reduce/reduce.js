const arrayDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// En este ejemplo hicimos el callBack al igual que en los ejemplos anteriores solo que aqui usamos un arrow function
const callBack = (acumulador, numeroActual) => {
  return acumulador + numeroActual;
};
const valorInicial = 0;
// El metodo reduce recibe como parametro un callBack y un valor inicial a diferencia de lo map y filter, en este caso el valor inicial es 0
const sumatoria = arrayDeNumeros.reduce(callBack, valorInicial);
