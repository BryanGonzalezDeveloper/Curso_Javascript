//Se utiliza cuando una instruccion devuelve true o false (igual que un if)
console.log('Operador ternario simple');
let num=2;
(num%2==0)?console.log(`${num} es par`):console.log(`${num} es impar`);

//Operador ternario con multiples sentencias
console.log('Operador ternario con multiples sentencias');
num=7;
(num>5)?
(
    console.log(`${num} > 5`),
    console.log(`Se comparo el numero ${num} para saber si es mayor que 5`)
):
console.log(`${num} < 5`);