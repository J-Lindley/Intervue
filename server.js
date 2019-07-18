<<<<<<< HEAD
const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
=======
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
>>>>>>> 30fbee18cc7b87210183b99f4776d1d72d8a7461
