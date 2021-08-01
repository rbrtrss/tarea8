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

// Rutas
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