const http = require('http');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

require('dotenv').config();

app.get('/', function(req, res) {
  res.status(200).send('Hello world');
});

app.listen(PORT, function() {
  console.log('Server is running on PORT:',PORT);
});