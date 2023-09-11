'use strict';

const app = require('express')();
const images = require('./src/images.json');
const cors = require('cors'); // Import the cors middleware

const randomInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Use the cors middleware to enable CORS
app.use(cors());

app.get('/images', ({ query }, res) => {
  const i = (query.limit) ? images.slice(0, parseInt(query.limit)) : images;

  setTimeout(() => {
    return res.status(200).json(i);
  }, randomInterval(500, 1500));
});

app.listen(4000, () => {
  process.stdout.write('Server is available on http://localhost:4000/\n');
});
