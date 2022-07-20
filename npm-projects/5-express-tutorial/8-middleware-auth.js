const express = require('express');
const app = express();

const logger = require('./logger');
const authorize = require('./authorize');
// req=> middleware => res
// /api parameter is used for executing logger only for /api/* routes
// app.use('/api',logger)

// 1. use vs route
// 2. options - our own / express / third party

// app.use([authorize, logger])

app.get('/', (req,res) => {
    res.send('Home')
})

app.get('/about', (req,res) => {
    res.send('About')
})

app.get('/api/products', (req,res) => {
    res.send('Products')
})

app.get('/api/items',[authorize, logger], (req,res) => {
    console.log(req.user);
    res.send('Items')
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000....')
})