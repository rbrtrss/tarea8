import express from 'express';
import productos from './productos.js';

// Servidor
const PORT = 8080;
const app = express();

const server = app.listen(PORT, () => {
    console.log(`Levantado en el puerto ${PORT}`);
});

server.on('error', (err) => {
    console.error('Hubo un error:', err);
});

app.use(express.json())
app.use(express.urlencoded({extended: true}))

// Classes
// class Productos {
//     constructor() {
//         this.productos = [];
//         this.id = 0;
//     }

//     showProductos() {
//         if (this.productos.length == 0) {
//             return { error: 'No hay productos cargados'}
//         } else {
//             return this.productos;
//         }
//     }

//     addProducto(title, price, thumbnail) {
//         this.id++
//         const producto = {
//             id: this.id,
//             title: title,
//             price: price,
//             thumbnail: thumbnail,
//         }
//         this.productos.push(producto);
//         return producto;
//     }
// 
    // showUnProducto(id) {
        // const producto = this.productos[id-1];
        // if (producto == undefined) {
            // return { error: 'Producto no encontrado' };
        // } else {
            // return producto;
        // }
    // }
// }

// Instances
// let productos = new Productos();

// Routes
app.get('/api/productos/listar', (req, res) => {
    const listaProductos = productos.showProductos();
    res.json(listaProductos);
})

app.get('/api/productos/listar/:id', (req, res) => {
    const indice = req.params.id;
    const unProducto = productos.showUnProducto(indice);
    res.json(unProducto);
})

app.post('/api/productos/guardar', (req, res) => {
    const producto = req.body;
    const productoIncluido = productos.addProducto(producto.title, producto.price, producto.thumbnail);
    res.json(productoIncluido);
})