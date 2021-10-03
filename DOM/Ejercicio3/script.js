
const btn=document.getElementById('btn');
btn.addEventListener('click',add_css_class);

function add_css_class(){
        btn.classList.toggle('button');
}