const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

require('dotenv').config();

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(PORT, () => {
  console.log('Server is running on PORT:', PORT);
});