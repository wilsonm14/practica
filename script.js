const carrito = document.getElementById('carrito');
const elementos = document.getElementById('lista-1');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarcarritoBtn = document.getElementById('vaciar-carrito');
cargarEventlisteners();
function cargarEventlisteners(){
    elementos1.addEventlisteners('click', comprarElemento);
    carrito.addEventlisteners('click' , eliminarElementos);
    vaciarcarritoBtn.addEventListener('click', vaciarcarrito);
}
function compraElemento (e) {
    e.preventDefault();
    if(e.target.classlist.contains('agregar al carrito')) {
        const elemento = e.target.parentElement.parentElement;
        leerdatoselemento(elemento);
    }
}
function leerdatosElemento(elemento) {
    const infoElemento = {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textcontent,
        precio: elemento.querySelector('.precio').textcontent,
        id: elemento.querySelector('a').getAttribute('data-id')
    }
    insertarcarrito(infoElemento)
}
function insertarcarrito(elemento){
    const row =document.createElement('tr');
    row.innerHTML = `
       <td>
           <img src="${elemento.imagen}" width=100>
       </td>
       <td>
            ${elemento.titulo}
       </td>
       <td>
            ${elemento.precio}
       </td>
       <td>
             <a herf= "#" class="borrar" data-id="${elemento.id}" > </a>
       </td>
    `;
    lista.appendChild(row)   
}
function eliminarElementos(e) {
    e.preventDefault();
    let elemento,
        elementoId;
    if(e.target.classlist.contains('borrar')){
       e.target.parentElement.parentElement.remove();
       elemento = e.target.parentElement.parentElement,
       elementoId = elemento.querySelector('a').getAttribute('data-id')
    }
}
function vaciarcarrito() {
    while(lista.firstChild) {
        lista.removechild(lista.firstChild);
    }
    return false;
}
