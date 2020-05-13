const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use((req, res, next) => {
  console.log(`Incoming ${req.method} request to ${req.path}`);
  next();
});

app.get('/products', (req, res) => {
  res.status(200).send('Hi');
});

app.listen(PORT, () => `Server listening on port ${3000}`);
