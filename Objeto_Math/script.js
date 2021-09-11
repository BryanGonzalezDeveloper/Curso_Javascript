
console.log("Valor absoluto");
let numero=-7;
console.log(`Numero original: ${numero}`);
console.log(`Valor absoluto: ${Math.abs(numero)}`);

//Math.ceil(x) redondea al numero mas cercano hacia arriba
numero=3.2;
console.log(`Número original: ${numero}`);
console.log(`Función ceil ${Math.ceil(numero)}`);

//Math.floor(x) redondea al numero mas cercano hacia abajo
console.log(`Número original: ${numero}`);
console.log(`Función floor ${Math.floor(numero)}`);

//Math.round(x) redondea al numero mas cercano
console.log(`Número original: ${numero}`);
console.log(`Función Round: ${Math.round(numero)}`);
//Math.pow(a,b) devuelve a a la potencia b
let base=2;
let exponente=3;
console.log(Math.pow(base,exponente));

//Math.random() genera un numero aleatorio entre 0 y 1.
console.log(Math.random());
//Math.sign(x) devuelve el signo de un numero.
console.log(Math.sign(-5));
console.log(Math.sign(7));