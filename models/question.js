const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema ({
  question: {type: String, required: true},
  answer: String,
  company: String,
  "job type": String,
  "question type": String,
  date: { type: Date, default: Date.now }
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
