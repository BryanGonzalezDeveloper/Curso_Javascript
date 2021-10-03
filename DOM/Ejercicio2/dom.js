//script para crear y manipular elementos desde el DOM

    //Crear elemento div:
    const tag_div=document.createElement('div');
    console.log('Se creo elemento div');
    console.log(tag_div);

    //Se crea nodo de texto para la etiqueta:
    const innerhtml=tag_div.innerHTML="I'm software developer";
    console.log(innerhtml);

//Se obtiene el elemento padre:
const parent=document.getElementById('parent');

    //Se agrega el elemnto div a la estructura html:
    parent.appendChild(tag_div);
    console.log(parent);
//Para insertar el elemento antes que otro se utiliza el metodo insertBefore(newNode, existingNode); en este caso insertare al elemento div al inicio.
parent.insertBefore(tag_div, document.getElementById('firstChild'));

//Reemplazar un nodo existente en la estructura html, ejemplo:
const tag_p=document.createElement('p');
    //Agrego nodo de texto al elemento:
    tag_p.innerHTML="Este parrafo reemplazo al elemento con el id:secondChild que se encontraba dentro de la estructura html";
    const secondChild=document.getElementById('secondChild');
//Reemplazando elemento:
    parent.replaceChild(tag_p,secondChild);

//Para eleminar un elemento dentro de la estructura html se utiliza el metodo removeChild(node);
//Se eliminara el nodo h1 del documento
const node_h1=document.getElementsByTagName('h1');
//Eliminando elemento:
parent.removeChild(node_h1[0]);