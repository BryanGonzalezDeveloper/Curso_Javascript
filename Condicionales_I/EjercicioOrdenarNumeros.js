//Script con el objetivo de ordenar 3 numeros de forma ascendente. Utilizando condicionales
let num1=-16;
let num2=-6;
let num3=78;

if(num1>num2&&num1>num3)
{
    if(num2>num3)
    {
        console.log(`El orden de los numeros de forma ascendente es: ${num3},${num2},${num1}`);
    }
    else{
        console.log(`El orden de los numeros de forma ascendente es: ${num2},${num3},${num1}`);

    }
}
else if(num2>num1&&num2>num3)
{
    if(num1>num3)
    {
        console.log(`El orden de los numeros de forma ascendente es: ${num3},${num1},${num2}`);
    }
    else{
        console.log(`El orden de los numeros de forma ascendente es: ${num1},${num3},${num2}`);

    }
}
else if(num3>num1 &&num3>num2)
{
    if(num1>num2)
    {
        console.log(`El orden de los numeros de forma ascendente es: ${num2},${num1},${num3}`);
    }else{
        console.log(`El orden de los numeros de forma ascendente es: ${num1},${num2},${num3}`);
    }
}