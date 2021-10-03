//Accediendo a elemento padre:
const parent=document.getElementById('parent');
console.log(parent);

//Accediendo al elemento h1:
const tag_h1=document.getElementById('parent').children[3];
console.log(tag_h1);

//Accediendo al segundo elemento:
const secondChild=document.getElementById('secondChild');
console.log(secondChild);

    //Mostrando el nodo padre de secondChild:
    console.log(secondChild.parentNode);
    //Mostrando el elemento anterior:
    console.log(secondChild.previousElementSibling);
    //Mostrando el elemento siguiente:
    console.log(secondChild.nextElementSibling);

