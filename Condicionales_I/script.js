/*
Condicional simple:
if(condicion)
{
    codigo a ejecutar
}

Condicion compuestas:
if(condicion)
{
    codigo a ejecutar
}else{
    codigo si no se cumple la condicion
}
*/

let numero= 12;
if(numero>0)
{
    console.log("El número es positivo");
}
else if(numero==0){
    console.log("El número es igual a cero")
}
else{
    console.log("El número es negativo");
}
console.log(`El número es: ${numero}`);