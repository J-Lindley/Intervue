const express = require("express");
const mongoose = require("mongoose");

// Requiring passport authentication information from passport.js file.
require('./services/passport');
require('./models');

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/interviewquestions");

const app = express();
const PORT = process.env.PORT || 5000;

// Requiring route information in from authRoutes.js and index.js.
require('./routes/authRoutes')(app);

app.listen(PORT, () => {
  console.log("Server is running on PORT:", PORT);
});


