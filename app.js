const express = require('express');
const app = express();
const app2 = 50;
const productRoutes = require('./api/routes/products');


app.use('/products', productRoutes);


module.exports = app;