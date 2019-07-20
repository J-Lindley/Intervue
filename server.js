const express = require("express");

// Requiring passport authentication information from passport.js file.
require('./services/passport');

const app = express();
const PORT = process.env.PORT || 5000;

const mongoose = require('mongoose');

// Requiring route information in from authRoutes.js.
require('./routes/authRoutes')(app);

app.listen(PORT, () => {
  console.log("Server is running on PORT:", PORT);
});

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/interviewquestions");
