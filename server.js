const express = require('express');

const app = express();

const tickets = require('./tickets.js');

app.set('port', 8080);

app.get('/tickets', (req, res) => {
  res.send(tickets);
});

app.listen(8080, () => {
  console.log('Server up and running on port 8080!');
});
