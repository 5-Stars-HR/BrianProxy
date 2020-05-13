const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
app.use((req, res, next) => {
  console.log(`Incoming ${req.method} request to ${req.path}`);
  next();
});

app.get('/product/:id', (req, res) => {
  axios.get(`http://localhost:3002/product/${req.params.id}`)
    .then((response) => res.status(200).send(response))
    .catch((error) => res.status(500).send(error));
});

app.get('/product/:id/find-store', (req, res) => {
  axios.get(`http://localhost:3002/product/${req.params.id}/find-store/?q=${req.query.q}`)
    .then((response) => res.status(200).send(response))
    .catch((error) => res.status(500).send(error));
});

app.get('/api/images/:id', (req, res) => {
  axios.get(`http://localhost:3001/api/images/${req.params.id}`)
    .then((response) => res.status(200).send(response.data))
    .catch((error) => res.status(500).send(error));
});

app.get('/api/products/:product_id/reviews', (req, res) => {
  axios.get(`http://localhost:8080/api/products/${req.params.product_id}/reviews`)
    .then((response) => res.status(200).send(response))
    .catch((error) => res.status(500).send(error));
});

app.listen(PORT, () => `Server listening on port ${3000}`);
