const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema ({
  question: {type: String, required: true},
  answer: String,
  company: [String],
  jobType: [String],
  questionType: [String],
  date: { type: Date, default: Date.now }
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;