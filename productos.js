class Productos {
    constructor() {
        this.productos = [];
        this.id = 0;
    }

    showProductos() {
        if (this.productos.length == 0) {
            return { error: 'No hay productos cargados' }
        } else {
            return this.productos;
        }
    }

    addProducto(title, price, thumbnail) {
        this.id++
        const producto = {
            id: this.id,
            title: title,
            price: price,
            thumbnail: thumbnail,
        }
        this.productos.push(producto);
        return producto;
    }

    showUnProducto(id) {
        const producto = this.productos[id-1];
        if (producto == undefined) {
            return { error: 'Producto no encontrado' };
        } else {
            return producto;
        }
    }
}

export default new Productos();