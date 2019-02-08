const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');

const app = express();

const { APP_PORT } = require('./config');

app.use(cors());
app.use(bodyParser.json());

app.listen({ port: APP_PORT }, () => {
  console.log(`Server ready at http://localhost:4000`);
});

app.get('/search', (req, res) => {
  const { q, key } = req.query;

  axios
    .get(`https://www.goodreads.com/search?q=${q}&key=${key}`)
    .then(response => res.send(response.data));
});
