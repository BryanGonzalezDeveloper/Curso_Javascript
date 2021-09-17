let deportes=['Beisbol','Futbol','Atletismo','Natacion'];
//recorrer el arreglo con diferentes tipos de bucles:
console.log('Utilizando el ciclo while');
let contador=0;
while (contador<deportes.length) {
    console.log(deportes[contador]);
    contador++;
}

console.log('Utilizando el ciclo for:');
for (let i = 0; i < deportes.length; i++) {
    console.log(deportes[i]);
    
}

console.log('Utilizando foreach:');
deportes.forEach(dp => {
    console.log(dp);
});

console.log('Utilizando for of:');
for (const deporte of deportes) {
    console.log(deporte);
}

console.log('Utilizando for in');
//Regresa los indices del arreglo no el valor.
for (const deporte in deportes) {
    console.log(deporte);
}