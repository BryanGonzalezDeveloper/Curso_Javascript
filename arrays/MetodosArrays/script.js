//Metodos con arrays
let datos=[true,false,'JS','C#',1,23,8,8,7,5,1,19];

console.log('Método que devuelve la longitud de array:');
console.log(`El arreglo tiene ${datos.length} elementos`);

console.log(`Método que indica si una variables es array o no.`);
let texto='prueba';
console.log(Array.isArray(datos));
console.log('Eliminar elemento de un array con .shift()');
console.log(datos);
//.shift() -Elimina el primer elemento de un array y devuelve ese elemento
//.pop() -Elimina el ultimo elemento de un array y devuelve ese elemento

let dato=datos.shift();
console.log(dato);

console.log('Método que elimina y devuelve el ultimo elemento del array');
let ultimo=datos.pop();
console.log(ultimo);
console.log(`Array actual: ${datos}`);

console.log(`Método que organiza los elementos del array en orden inverso: ${datos.reverse()}`);
let numeroBuscado=1;
console.log(datos);
console.log(`Método que devuelve el indice de la primer ocurrencia del elemento proporcionado a traves del parametro`);

console.log(datos.indexOf(numeroBuscado));
console.log(`Método que devuelve el indice de la ultima ocurrencia del elemento proporcionado a traves del parametro`);
console.log(datos.lastIndexOf(numeroBuscado))