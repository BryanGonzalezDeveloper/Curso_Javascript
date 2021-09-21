//Funciones declaradas
function validarEdad(edad)
{
    if(edad>18)
    {
        return true;
    }else
    {
        return false;
    }
} 

console.log(`Ejemplo de función declarada: ${validarEdad(20)}`);

//funcion por expresion:
const numerosImpares=function (numeros){
    let arrayImpar=[];
    numeros.forEach(num => {
        if(num%2!=0)
        arrayImpar.push(num);
    });
    return arrayImpar;
}
console.log('Ejemplo de función por expresión:');
console.log(numerosImpares([1,6,7,8,9,111,15515,220,54]));

//Funciones callbacks:
//fb= funcion B
const fb=function (){
    console.log('Se ejecuto la funcion B');
}
//fa= funcion A
const fa=function(callback)
{
    callback();
}
//Ejecutando la funcion callback:
console.log('Ejemplo de funciones callback:');
fa(fb);

//Funciones flecha:
const func= ()=>console.log('Ejemplo de función flecha.');
func();
