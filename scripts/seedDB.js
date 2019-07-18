const mongoose = require("mongoose");
const db = require("../models");

// This file empties the questions collection and inserts the questions below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/interviewquestions"
);

const questionSeed = [
  {
    company:
      question: "What are the data types supported by JavaScript?"
    answer: "The data types supported by JavaScript are: Undefined, Null, Boolean, String, Symbol, Number, Object"    
    date: new Date(Date.now())
  },
  {
    company:
      question: "What is an undefined value in JavaScript?"
    answer: "Undefined value means the 1. Variable used in the code doesn't exist 2. Variable is not assigned to any value 3.Property doesn't exist."
      date: new Date(Date.now())
  },
  {
    company:
      question: "What do mean by NULL in Javascript?"
    answer: "The NULL value is used to represent no value or no object. It implies no object or null string, no valid boolean value, no number and no array object."
      date: new Date(Date.now())
  },
  {
    company:
      question: "Explain how to detect the operating system on the client machine?"
    answer: "In order to detect the operating system on the client machine, the navigator.platform string (property) should be used."
      date: new Date(Date.now())
  },
  {
    company:
      question: "What would be the result of 3+2+"7"?"
    answer: "Since 3 and 2 are integers, they will be added numerically. And since 7 is a string, its concatenation will be done. So the result would be 57."
      date: new Date(Date.now())
  },
  {
    company:
      question: "Explain the difference between "== " and " === "?"
    answer: "" == " checks only for equality in value whereas " === " is a stricter equality test and returns false if either the value or the type of the two variables are different."
      date: new Date(Date.now())
  },
  {
    company:
      question: "What are all the looping structures in JavaScript?"
    answer: "Following are looping structures in Javascript: For, While, do-while loops"
      date: new Date(Date.now())
  },
  {
    company:
      question: "What is === operator?"
    answer: "=== is called as strict equality operator which returns true when the two operands are having the same value without any type conversion."
      date: new Date(Date.now())
  },
  {
    company:
      question: "What is 'this' keyword in JavaScript?"
    answer: "'This' keyword refers to the object from where it was called."
    date: new Date(Date.now())
  },
  {
    company:
    question: "What are global variables? How are these variable declared and what are the problems associated with using them?"
    answer: "Global variables are those that are available throughout the length of the code, that is, these have no scope. The var keyword is used to declare a local variable or object. If the var keyword is omitted, a global variable is declared."
      date: new Date(Date.now())
  },
  {
    company:
      question: "What are undeclared and undefined variables?"
    answer: "Undeclared variables are those that do not exist in a program and are not declared. If the program tries to read the value of an undeclared variable, then a runtime error is encountered. Undefined variables are those that are declared in the program but have not been given any value.If the program tries to read the value of an undefined variable, an undefined value is returned."
      date: new Date(Date.now())
  },
  {
    company:
      question: "What is JavaScript?"
    answer: "JavaScript is a client-side as well as server side scripting language that can be inserted into HTML pages and is understood by web browsers. JavaScript is also an Object based Programming language."
      date: new Date(Date.now())
  },
  {
    company:
      question: "What are JavaScript Data Types?"
    answer: "Number, String, Boolean, Object, Undefined"
      date: new Date(Date.now())
  },
  {
    company: "linkedin"
      question: "If we wanted to implement a method of tracking every click that the user made on the site, how would we want to do this?"
    answer: "Place a JavaScript event listener for all clicks at the document level. Perform actions based on the details of the click. This problem had multiple branches and sub-questions, but the gist is that you would want to capture the events as they bubbled back up to the document level. There are other acceptable answers to this question."
      date: new Date(Date.now())
  },
  {
    company: "McClatchy"
      question: "What's in a grunt file and explain what it does?"
    answer: "A JS or Coffeescript file that goes in project root next to package.json. Includes wrapper function, project and task configuration, loading grunt plugins and tasks and custom tasks."
      date: new Date(Date.now())
  },
  {
    company: "Bloomberg L.P."
      question: "What is a JavaScript callback function?"
    answer: "A callback function is a piece of JavaScript code that executes after the main function that the callback is attached to executes successfully."
      date: new Date(Date.now())
  },
  {
    company: "Next Jump"
      question: "How to display two block elements horizontally?"
    answer: "Use CSS to make the block display float left. Clear the float after. Try this: #left, #right { text-align: center; width:11%; height: 640px; border: solid; float: left; } in the body <div>left</div> <div>right</div>"
      date: new Date(Date.now())
  },
  {
    company: "Aldi"
      question: "What is object oriented programming?"
    answer: "Object-oriented programming (OOP) refers to a type of computer programming (software design) in which programmers define not only the data type of a data structure, but also the types of operations (functions) that can be applied to the data structure."
      date: new Date(Date.now())
  },
  {
    company: "Advanced Circuits"
      question: "Difference between dll and exe? How many types of assemblies are there?"
    answer: "Both are assembly. DLL is data link layer not available to end user and exe is executable (actual program) for end users. 3 types of assemblies: Private, Public, satellite"
      date: new Date(Date.now())
  },
  question: "Describe and code an algorithm that returns the first duplicate character in a string?",
  answer: 'public class FirstDupCharacter { public static void main(String[] args) { System.out.println(findDupCharacter("abcdefghiaklmno")); } private static Character findDupCharacter(final String input) { final Set set = new HashSet(); Character dup = null; for (int i = 0; i &lt; input.length(); i++) { if (set.contains(input.charAt(i))) { dup = input.charAt(i); break; } else { set.add(input.charAt(i)); } } return dup; } }',
  company: "Expedia",
  jobType: ["Software Developer"],
  questionType: []
},
{
  question: "Write a method to decide if the given binary tree is a binary search tree or not.",
  answer: '',
  company: "Amazon",
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