
//Acceder al DOM con el metodo getElementById(id);
const title=document.getElementById("principal-title");
console.log(title);

const  button=document.getElementById("btn");

//Acceder al evento click del button
button.addEventListener('click',function get_p_tag(){
    var list_p=document.getElementsByClassName('master');
    for (let index = 0; index < list_p.length; index++) {
        list_p[index].innerHTML='Iteracion: '+index;        
    }
});