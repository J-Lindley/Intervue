const mongoose = require("mongoose");
const questionSchema = require("./question.js");
const Schema = mongoose.Schema;

const userSchema = new Schema ({
  username: String,
  //jon changed this
  saved: Boolean
});

const User = mongoose.model("User", userSchema);
module.exports = User;