let texto="programación 2021";
console.log(texto.length);
console.log(texto.toUpperCase());
console.log(texto.toLocaleLowerCase());
console.log(texto.indexOf("n"));
console.log(texto.replace("2021","JS"));
console.log(texto.substring(13));
let prueba="Texto prueba";
console.log(prueba.slice(0,-7));
console.log(prueba.slice(5));
//Eliminar espacios al inicio y final de la cadena:

prueba="   Texto de prueba con JS   ";
console.log(prueba.length);
prueba=prueba.trim();
console.log(prueba.length);

//El metodo includes es como index of pero devuelve true o false.
console.log(prueba);
console.log(prueba.includes("JS"));
let guion="-";
console.log(guion.repeat(25));

//Template string:
let nombre="Bryan";
let apellido="Gonzalez";
let edad=20;
console.log(`Hola ${nombre} ${apellido}. Tu edad es: ${edad} años.`);