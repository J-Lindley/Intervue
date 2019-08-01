const mongoose = require("mongoose");
//const questionSchema = require("./question.js");
const Schema = mongoose.Schema;

const userSchema = new Schema ({
  googleId: String,
  userName: String,
  userPhoto: String,
  saved: [{type: mongoose.Schema.Types.ObjectId, ref: "Question", required: false}],
  submitted: [{type: mongoose.Schema.Types.ObjectId, ref: "Question", required: false}]
});

const User = mongoose.model("user", userSchema);

module.exports = User;