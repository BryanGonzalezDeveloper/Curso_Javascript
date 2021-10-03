let counter=0;

//elemento html donde se actualizara el contador:
const number=document.getElementById("number");

//Seleccionar botones correspondientes:
const btnIncrease=document.getElementById("increase");
const btnReset=document.getElementById("reset");
const btnDecrease=document.getElementById("decrease");

//agregar eventos:
btnIncrease.addEventListener('click',increase);
btnReset.addEventListener('click',reset);
btnDecrease.addEventListener('click',decrease);

//Eventos para el cambio de color:
btnIncrease.addEventListener('click',random_color());
btnReset.addEventListener('click',random_color());
btnDecrease.addEventListener('click',random_color());

//Metodo para generar numeros aleatorios
function generate_random(max=255){
    return Math.ceil(Math.random()*max);
}
//Metodo para asignar color aleatorio:
function random_color(){
    number.style.color=`rgb(${generate_random()},${generate_random()},${generate_random()})`;
}
//Metodos para modificar contador:

function increase()
{
    counter++;
    number.textContent=counter;
}
function decrease()
{
    counter--;
    number.textContent=counter;
}
function reset(){
    counter=0;
    number.textContent=counter;
}
