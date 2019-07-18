const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/interviewquestions"
);

const questionSeed = [
  {
    question: "Describe and code an algorithm that returns the first duplicate character in a string?",
    answer: 'public class FirstDupCharacter { public static void main(String[] args) { System.out.println(findDupCharacter("abcdefghiaklmno")); } private static Character findDupCharacter(final String input) { final Set set = new HashSet(); Character dup = null; for (int i = 0; i &lt; input.length(); i++) { if (set.contains(input.charAt(i))) { dup = input.charAt(i); break; } else { set.add(input.charAt(i)); } } return dup; } }',
    company: ["Expedia"],
    jobType: ["Software Developer"],
    questionType: []
  },
  {
    question: "Write a method to decide if the given binary tree is a binary search tree or not.",
    answer: '',
    company: ["Amazon"],
    jobType: [],
    questionType: []
  }
];

db.Question
  .remove({})
  .then(() => db.Question.collection.insertMany(questionSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
