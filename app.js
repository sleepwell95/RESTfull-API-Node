const express = require('express');
const app = express();

const productRoutes = require('./api/routes/products');
const ordersRoutes = require('./api/routes/orders');

app.use('/orders', ordersRoutes);
app.use('/products', productRoutes);


module.exports = app;