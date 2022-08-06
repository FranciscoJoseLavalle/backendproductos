import express from 'express';
import Products from './api/Products.js';
import __dirname from './utils.js';
import handlebars from 'express-handlebars';

const app = express();

app.use(express.static(__dirname + '/public'));

const server = app.listen(8080, () => console.log('Escuchando puerto 8080'));

app.use(express.json());
app.engine('handlebars', handlebars.engine());
app.set('views',__dirname+'/views');
app.set('view engine','handlebars');
 
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
    res.render('products',{
        hasProducts: productos.length > 0,
        productos
    })
})

app.post('/products', (req, res) => {
    const product = req.body;
    products1.Save(product.name, product.price, product.thumbnail);
    let productos = products1.GetProducts();
    res.render('products',{
        productos
    });
    console.log(productos);
})