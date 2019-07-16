const mongoose = require("mongoose");
const questionSchema = require("./question.js");
const Schema = mongoose.Schema;

const userSchema = new Schema ({
  username: String,
  saved: [questionSchema]
});

const User = mongoos.model("User", userSchema);
module.exports = User;