class Producto {
    constructor(id, nombre, precio,categoria,cantidad) {
            this.id = parseInt(id);
            this.nombre = nombre;
            this.precio = parseFloat(precio);
            this.categoria = categoria;
            this.cantidad  = cantidad || 1;
    }

    agregarCantidad(valor){
        this.cantidad += valor; 
    }

    subtotal(){
        return this.cantidad * this.precio;
    }
}