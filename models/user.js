const mongoose = require("mongoose");
const questionSchema = require("./question.js");
const Schema = mongoose.Schema;

const userSchema = new Schema ({
  googleId: String,
  userName: String,
  userPhoto: String,
  saved: [{question: String, notes: String}]
});

const User = mongoose.model("user", userSchema);

module.exports = User;