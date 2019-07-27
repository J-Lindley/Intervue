const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const questionSchema = new Schema({
  question: { type: String, required: true },
  answer: String,
  company: [String],
  jobType: [String],
  questionType: String,
  date: { type: Date, default: Date.now },
  yesScore: { type: Number, default: 0 },
  noScore: { type: Number, default: 0 },
  _user: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;