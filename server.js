const express = require('express');
const app = express();
const mongoose = require("mongoose");
const cookieSession = require('cookie-session')
const passport = require('passport')
const keys = require('./config/keys')
// Requiring passport authentication information from passport.js file.
require('./models/index');
require('./services/passport');


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/interviewquestions');

app.use(
  cookieSession({
    // Max session is 30 days
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

const PORT = process.env.PORT || 5000;

// Requiring route information in from authRoutes.js and index.js.
require('./routes/authRoutes')(app);
const routes = require("./routes");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

app.listen(PORT, () => {
  console.log('Server is running on PORT:', PORT);
});



