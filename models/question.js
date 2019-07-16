var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var QuestionSchema = new Schema({
  // `title` is required and of type String
  question: {
    type: String,
    required: true
  },
  // `link` is required and of type String
  answer: {
    type: String,
    required: false
  },
  // `QuestionSchema` is an object that stores a Note id
  // The ref property links the ObjectId to the Note model
  // This allows us to populate the Article with an associated Note
  ObjectId: {
    type: Schema.Types.ObjectId,
    ref: "Question"
  }
});

// This creates our model from the above schema, using mongoose's model method
var question = mongoose.model("Question", QuestionSchema);

// Export the Question model
module.exports = Question;
