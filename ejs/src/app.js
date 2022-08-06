import express from 'express';
import Products from './api/Products.js';
import __dirname from './utils.js';

const app = express();

const server = app.listen(8080, () => console.log('Escuchando puerto 8080'));

app.use(express.json());
app.set('views',__dirname+'/views');
app.set('view engine','ejs');
 
let products1 = new Products();

app.get('/', (req,res) => {
    let productos = products1.GetProducts();
    res.render('home',{
        productos
    })
    console.log(productos);
})

app.get('/products',(req,res) => {
    let productos = products1.GetProducts();
    res.render('home',{
        productos
    })
})

app.post('/products', (req, res) => {
    const product = req.body;
    products1.Save(product.name, product.price, product.thumbnail);
    let productos = products1.GetProducts();
    res.render('home',{
        productos
    });
    console.log(productos);
})



// app.post('/products',(req,res) => {
//     const product = req.body;
//     products.products.push(product);

// })