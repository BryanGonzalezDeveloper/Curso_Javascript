let tag_precio=document.getElementById('precio');
let tag_stock=document.getElementById('stock');
let total_stock=0;
function setPrecio(precio)
{
    tag_precio.textContent(precio);
}

function setStock(stock){
    total_stock=stock;
    tag_stock.textContent(stock);
}

function addCarrito()
{
    if(total_stock==0)
    alert('Se termino el producto');
    else
    {
        total_stock--;
        setStock(total_stock);
    }
}