$(document).ready(function () {

    if("CARRITO" in localStorage){
        const arrayLiterales = JSON.parse(localStorage.getItem("CARRITO"));
        for (const literal of arrayLiterales) {
            carrito.push(new Producto(literal.id, literal.nombre, literal.precio, literal.categoria, literal.cantidad));
        }
        console.log(carrito);
        carritoUI(carrito);
    }

    $(".dropdown-menu").click(function (e) { 
        e.stopPropagation();
    });
});

window.addEventListener('load',()=>{
    $('#indicadorCarga').remove();
})

productos.push(new Producto(1, "CAMISETA TITULAR", 10000, categorias[0]));
productos.push(new Producto(2, "CAMISETA SUPLENTE", 10000, categorias[0]));
productos.push(new Producto(3, "CAMISETA ALTERNATIVA", 12000, categorias[0]));
productos.push(new Producto(4, "SHORT TITULAR", 8000, categorias[1]));
productos.push(new Producto(5, "SHORT SUPLENTE", 8000, categorias[1]));
productos.push(new Producto(6, "SHORT ALTERNATIVO", 8500, categorias[1]));
productos.push(new Producto(7, "MEDIAS TITULARES", 500, categorias[2]));
productos.push(new Producto(8, "MEDIAS SUPLENTES", 500, categorias[2]));
productos.push(new Producto(9, "MEDIAS ALTERNATIVAS", 500, categorias[2]));
productos.push(new Producto(10, "BOTINES CON TAMPONES", 15000, categorias[3]));
productos.push(new Producto(11, "BOTINES DE FUTSAL", 12000, categorias[3]));
productos.push(new Producto(12, "BOTINES (PASTO SINTETICO)", 10000, categorias[3]));

productosUI(productos, '#productosContenedor');

$('.btn-compra').on("click", comprarProducto);

