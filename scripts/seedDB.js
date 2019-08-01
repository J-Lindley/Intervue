const mongoose = require("mongoose");
const db = require("../models");

// This file empties the questions collection and inserts the questions below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/interviewquestions"
);

const questionSeed = [
  {
    question: "What are the data types supported by JavaScript?",
    answer: "The data types supported by JavaScript are: Undefined, Null, Boolean, String, Symbol, Number, Object",
    date: new Date(Date.now()),
    questionType: "Javascript"

  },
  {
    question: "What is an undefined value in JavaScript?",
    answer: "Undefined value means the 1. Variable used in the code doesn't exist 2. Variable is not assigned to any value 3.Property doesn't exist.",
    date: new Date(Date.now()),
    questionType: "Javascript"
  },
  {
    question: "What do mean by NULL in Javascript?",
    answer: "The NULL value is used to represent no value or no object. It implies no object or null string, no valid boolean value, no number and no array object.",
    date: new Date(Date.now()),
    questionType: "Javascript"
  },
  {
    question: "Explain how to detect the operating system on the client machine?",
    answer: "In order to detect the operating system on the client machine, the navigator.platform string (property) should be used.",
    date: new Date(Date.now())
  },
  {
    question: "What would be the result of 3+2+'7'?",
    answer: "Since 3 and 2 are integers, they will be added numerically. And since 7 is a string, its concatenation will be done. So the result would be 57.",
    date: new Date(Date.now()),
    questionType: "General Programming"
  },
  {
    question: "Explain the difference between '== ' and ' === '?",
    answer: "" == " checks only for equality in value whereas " === " is a stricter equality test and returns false if either the value or the type of the two variables are different.",
    date: new Date(Date.now()),
    questionType: "General Programming"
  },
  {
    question: "What are all the looping structures in JavaScript?",
    answer: "Following are looping structures in Javascript: For, While, do-while loops",
    date: new Date(Date.now()),
    questionType: "Javascript"
  },
  {
    question: "What is === operator?",
    answer: "=== is called as strict equality operator which returns true when the two operands are having the same value without any type conversion.",
    date: new Date(Date.now()),
    questionType: "General Programming"
  },
  {
    question: "What is 'this' keyword in JavaScript?",
    answer: "'This' keyword refers to the object from where it was called.",
    date: new Date(Date.now()),
    questionType: "Javascript"
  },
  {
    question: "What are global variables? How are these variable declared and what are the problems associated with using them?",
    answer: "Global variables are those that are available throughout the length of the code, that is, these have no scope. The var keyword is used to declare a local variable or object. If the var keyword is omitted, a global variable is declared.",
    date: new Date(Date.now()),
    questionType: "General Programming"
  },
  {
    question: "What are undeclared and undefined variables?",
    answer: "Undeclared variables are those that do not exist in a program and are not declared. If the program tries to read the value of an undeclared variable, then a runtime error is encountered. Undefined variables are those that are declared in the program but have not been given any value.If the program tries to read the value of an undefined variable, an undefined value is returned.",
    date: new Date(Date.now()),
    questionType: "General Programming"
  },
  {
    question: "What is JavaScript?",
    answer: "JavaScript is a client-side as well as server side scripting language that can be inserted into HTML pages and is understood by web browsers. JavaScript is also an Object based Programming language.",
    date: new Date(Date.now()),
    questionType: "Javascript"
  },
  {
    question: "What are JavaScript Data Types?",
    answer: "Number, String, Boolean, Object, Undefined",
    date: new Date(Date.now()),
    questionType: "Javascript"
  },
  {
    company: "linkedin",
    question: "If we wanted to implement a method of tracking every click that the user made on the site, how would we want to do this?",
    answer: "Place a JavaScript event listener for all clicks at the document level. Perform actions based on the details of the click. This problem had multiple branches and sub-questions, but the gist is that you would want to capture the events as they bubbled back up to the document level. There are other acceptable answers to this question.",
    date: new Date(Date.now()),
    questionType: "Javascript"
  },
  {
    company: "McClatchy",
    question: "What's in a grunt file and explain what it does?",
    answer: "A JS or Coffeescript file that goes in project root next to package.json. Includes wrapper function, project and task configuration, loading grunt plugins and tasks and custom tasks.",
    date: new Date(Date.now())
  },
  {
    company: "Bloomberg L.P.",
    question: "What is a JavaScript callback function?",
    answer: "A callback function is a piece of JavaScript code that executes after the main function that the callback is attached to executes successfully.",
    date: new Date(Date.now()),
    questionType: "Javascript"
  },
  {
    company: "Next Jump",
    question: "How to display two block elements horizontally?",
    answer: "Use CSS to make the block display float left. Clear the float after. Try this: #left, #right { text-align: center; width:11%; height: 640px; border: solid; float: left; } in the body <div>left</div> <div>right</div>",
    date: new Date(Date.now()),
    questionType: "CSS"
  },
  {
    company: "Aldi",
    question: "What is object oriented programming?",
    answer: "Object-oriented programming (OOP) refers to a type of computer programming (software design) in which programmers define not only the data type of a data structure, but also the types of operations (functions) that can be applied to the data structure.",
    date: new Date(Date.now()),
    questionType: "General Programming"
  },
  {
    company: "Advanced Circuits",
    question: "Difference between dll and exe? How many types of assemblies are there?",
    answer: "Both are assembly. DLL is data link layer not available to end user and exe is executable (actual program) for end users. 3 types of assemblies: Private, Public, satellite",
    date: new Date(Date.now())
  },
  {
    question: "Describe and code an algorithm that returns the first duplicate character in a string?",
    answer: 'public class FirstDupCharacter { public static void main(String[] args) { System.out.println(findDupCharacter("abcdefghiaklmno")); } private static Character findDupCharacter(final String input) { final Set set = new HashSet(); Character dup = null; for (int i = 0; i &lt; input.length(); i++) { if (set.contains(input.charAt(i))) { dup = input.charAt(i); break; } else { set.add(input.charAt(i)); } } return dup; } }',
    company: "Expedia",
    jobType: ["Software Developer"],
    questionType: "General Programming"
  },
  {
    question: "Write a method to decide if the given binary tree is a binary search tree or not.",
    answer: '',
    company: "Amazon",
    questionType: "General Programming"
  },
  {
    company: "Amazon",
    question: "What is the drawback of creating true private methods in JavaScript?",
    answer: "One of the drawbacks of creating true private methods in JavaScript is that they are very memory-inefficient, as a new copy of the method would be created for each instance.",
    date: new Date(Date.now()),
    questionType: "Javascript"
  },

  {
    company: "Getty Images",
    question: "What is a “closure” in JavaScript?",
    answer: "A closure is a function defined inside another function (called the parent function), and has access to variables that are declared and defined in the parent function scope.",
    date: new Date(Date.now()),
    questionType: "Javascript"
  },
  {
    company: "Retail Zipline",
    question: "What is the significance of, and reason for, wrapping the entire content of a JavaScript source file in a function block?",
    answer: "This is an increasingly common practice, employed by many popular JavaScript libraries (jQuery, Node.js, etc.). This technique creates a closure around the entire contents of the file which, perhaps most importantly, creates a private namespace and thereby helps avoid potential name clashes between different JavaScript modules and libraries.",
    date: new Date(Date.now()),
    questionType: "javascript"
    },
    {
    company: "Artemis",
    question: "What is AngularJS?",
    answer: "AngularJS is a javascript framework used for creating single web page applications.  It allows you to use HTML as your template language and enables you to extend HTML’s syntax to express your application’s components clearly",
    date: new Date(Date.now()),
    questionType: "angularJS"
    },
    {
    company:"Wild Earth",
    question: "Explain what is scope in AngularJS?",
    answer: "Scope refers to the application model, it acts like glue between application controller and the view.  Scopes are arranged in hierarchical structure and impersonate the DOM ( Document Object Model) structure of the application.  It can watch expressions and propagate events.",
    date: new Date(Date.now()),
    questionType: "angularJS"
    },
    {
    company: "ClickSWITCH",
    question: "Explain what is services in AngularJS?",
    answer: "In AngularJS services are the singleton objects or functions that are used for carrying out specific tasks.  It holds some business logic and these function can be called as controllers, directive, filters and so on.",
    date: new Date(Date.now()),
    questionType: "angularJS"
    },
    {
    company: "Credly",
    question: "Explain what are directives ? Mention some of the most commonly used directives in AngularJS application ? ",
    answer: "A directive is something that introduces new syntax, they are like markers on DOM element which attaches a special behavior to it. In any AngularJS application, directives are the most important components. Some of the commonly used directives are ng-model, ng-App, ng-bind, ng-repeat , ng-show etc.",
    date: new Date(Date.now()),
    questionType: "angularJS"
    },
    {
    company: "ManyChat",
    question: "Explain what is data binding in AngularJS ?",
    answer: "Automatic synchronization of data between the model and view components is referred as data binding in AngularJS.",    
    date: new Date(Date.now()),
    questionType: "angularJS"
    },
    {
    company: "Ultimate Software",
    question: "Explain what is string interpolation in Angular.js ?",
    answer: "In Angular.js the compiler during the compilation process matches text and attributes using interpolate service to see if they contains embedded expressions.  As part of normal digest cycle these expressions are updated and registered as watches.",
    date: new Date(Date.now()),
    questionType: "angularJS"
    },
    {
    company: "Workday",
    question: "What are Promises",
    answer: "Promises are a concurrency primitive, first described in the 80s. Now they are part of most modern programming languages to make your life easier. Promises can help you better handle async operations.",
    date: new Date(Date.now()),
    questionType: "node.js"
    },
    {
    company: "Salesforce",
    question: "What's a stub?",
    answer: "Stubs are functions/programs that simulate the behaviors of components/modules. Stubs provide canned answers to function calls made during test cases.",
    date: new Date(Date.now()),
    questionType: "node.js"
    },
    {
    company: "Cisco",
    question: "When are background/worker processes useful? How can you handle worker tasks?",
    answer: "Worker processes are extremely useful if you'd like to do data processing in the background, like sending out emails or processing images.",
    date: new Date(Date.now()),
    questionType: "node.js"
    },
    {
    company: "Red Hat",
    question: "Why Java is platform independent?",
    answer: "Java is called platform independent because of its byte codes which can run on any system irrespective of its underlying operating system.",
    date: new Date(Date.now()),
    questionType: "java"
    },
    {
    company: "Hub Spot",
    question: "Why Java is not 100% Object-oriented?",
    answer: "Java is not 100% Object-oriented because it makes use of eight primitive data types such as boolean, byte, char, int, float, double, long, short which are not objects.",
    date: new Date(Date.now()),
    questionType: "java"
    },
    {
    company: "Zillow Group",
    question: "What is HTML?",
    answer: "HTML is short for HyperText Markup Language and is the language of the World Wide Web. It is the standard text formatting language used for creating and displaying pages on the Web. HTML documents are made up of two things: the content and the tags that format it for proper display on pages.",
    date: new Date(Date.now()),
    questionType: "html"
    },
    {
    company: "SAP America Inc.",
    question: "Do all HTML tags come in a pair?",
    answer: "No, there are single HTML tags that do not need a closing tag. Examples are the <img> tag and <br> tags.",
    date: new Date(Date.now()),
    questionType: "html"
    },
    {
    company: "Adobe",
    question: "What is an image map?",
    answer: "Image map lets you link to many different web pages using a single image. You can define shapes in images that you want to make part of an image mapping.",
    date: new Date(Date.now()),
    questionType: "html"
    },
    {
    company: "Intuit Inc.",
    question: "Is there any way to keep list elements straight in an HTML file?",
    answer: "By using indents, you can keep the list elements straight. If you indent each subnested list in further than the parent list that contains it, you can at a glance determine the various lists and the elements that it contains.",
    date: new Date(Date.now()),
    questionType: "html"
    },
    {
    company: "New Relic",
    question: "What is CSS",
    answer: "CSS stands for Cascading Style Sheet. It is a popular styling language which is used with HTML to design websites.",
    date: new Date(Date.now()),
    questionType: "css"
    },
    {
    company: "Dropbox",
    question: "What are CSS frameworks?",
    answer: "CSS frameworks are the preplanned libraries which make easy and more standard compliant web page styling. The frequently used CSS frameworks are: Bootstrap, Foundation, Semantic UI, Gumby, Ulkit.",
    date: new Date(Date.now()),
    questionType: "css"
    },
    {
    company: "Microsoft",
    question: "What is AJAX?",
    answer: "AJAX stands for Asynchronous JavaScript and XML. It is a group of related technologies used to display data asynchronously. In other words, it sends and retrieves data without reloading the web page.",
    date: new Date(Date.now()),
    questionType: "AJAX"
    },
    {
    company: "Microsoft",
    question: "What are the disadvantages of AJAX?",
    answer: "Dependant on Javascript, security issues, debugging difficulties",
    date: new Date(Date.now()),
    questionType: "AJAX"
    },
    {
    company: "Microsoft",
    question: "What is JSON in AJAX?",
    answer: "JSON stands for JavaScript Object Notation. In AJAX, it is used to exchange data between a browser and a server. It is easy to understand, and data exchange is faster than XML. It supports array, object, string, number, and values.",
    date: new Date(Date.now()),
    questionType: "AJAX"
    },
    {
    company: "Apple",
    question: "What is XML?",
    answer: "XML stands for eXtensible Markup Language. It is a simple and flexible markup language. It is known as universal language for data on the web because XML documents can be created and used in any language. It is universal standard for information interchange. XML technology facilitates you to create your own markup language.",
    date: new Date(Date.now()),
    questionType: "XML"
    },
    {
    company: "Zoom Video Communications",
    question: "What is GIT?",
    answer: "GIT is a distributed version control system and source code management (SCM) system with an emphasis to handle small and large projects with speed and efficiency.",
    date: new Date(Date.now()),
    questionType: "GIT"
    },
    {
    company: "Zoom Video Communications",
    question: "What is a repository in GIT?",
    answer: "A repository contains a directory named .git, where git keeps all of its metadata for the repository. The content of the .git directory are private to git.",
    date: new Date(Date.now()),
    questionType: "GIT"
    },
    {
    company: "Procore Technologies",
    question: "What is the command you use to write a commit message?",
    answer: "The command that is used to write a commit message is “git commit –a”.  The –a on the command line instructs git to commit the new content of all tracked files that have been modified. You can use “git add<file>” before git commit –a if new files need to be committed for the first time.",
    date: new Date(Date.now()),
    questionType: "GIT"
    },
    {
    company: "Procore Technologies",
    question: "Does Perl have objects? If yes, then does it force you to use objects? If no, then why?",
    answer: "Yes, Perl has objects and it doesn’t force you to use objects. Many object oriented modules can be used without understanding objects. But if the program is too large then it is efficient for the programmer to make it object oriented.",
    date: new Date(Date.now()),
    questionType: "Perl"
    },
    {
    company: "Facebook",
    question: "Can we load binary extension dynamically?",
    answer: "Yes, we can load binary extension dynamically but your system supports that. If it doesn’t support, then you can statically compile the extension.",
    date: new Date(Date.now()),
    questionType: "Perl"
    },
    {
    company: "Facebook",
    question: "What is the difference in cloud computing and computing for mobiles?",
    answer: "Mobile computing uses the same concept as cloud computing.   Cloud computing becomes active with the data with the help of internet rather than individual device. It provides users with the data which they have to retrieve on demand.  In mobile, the applications runs on the remote server and gives user the access for storage and manage.",
    date: new Date(Date.now()),
    questionType: "Cloud Computing"
    },
    {
    company: "Google",
    question: "For a transport in cloud how you can secure your data?",
    answer: "To secure your data while transporting them from one place to another, check that there is no leak with the encryption key implemented with the data you are sending.",
    date: new Date(Date.now()),
    questionType: "Cloud Computing"
    },
    {
    company: "Google",
    question: "What are system integrators in Cloud Computing?",
    answer: "In Cloud Computing, systems integrator provides the strategy of the complicated process used to design a cloud platform. Integrator allows to create more accurate hybrid and  private cloud network, as integrators have all the knowledge about the data center creation.",
    date: new Date(Date.now()),
    questionType: "Cloud Computing"
    },
    {
    company: "Salesforce",
    question: "What is JIRA",
    answer: "JIRA is an issue tracking product or a software tool developed by Atlassian, commonly used for bug tracking, project management, and issue tracking; it is entirely based on these three aspects. It is widely used in software development and software testing.",
    date: new Date(Date.now()),
    questionType: "JIRA"
    },
    {
    company: "Salesforce",
    question: "List out the source control programs with which it integrates?",
    answer: "It integrates with source control programs such as CVS, Git, Subversion, ClearCase, Visual SourceSafe, Mercurial, and Perforce.",
    date: new Date(Date.now()),
    questionType: "JIRA"
    },
    {
    company: "Spotify",
    question: "What is API testing?",
    answer: "API (Application Programming Interface) specifies how some software components should interact with other, in other words it’s a set of functions and procedures that allows the creation of applications which access the features or data of an application or operating system.   Testing of these functions is known as API testing.",
    date: new Date(Date.now()),
    questionType: "API"
    },
    {
    company: "Spotify",
    question: "Explain what is SOAP?",
    answer: "SOAP-stands for Simple Object Access Control, and it is an XML based protocol for exchanging information between computers.",
    date: new Date(Date.now()),
    questionType: "API"
    },
];

db.Question
  .remove({})
  .then(() => db.Question.collection.insertMany(questionSeed))
  .then(data => {
    console.log(data.result.n + " records inserted! ");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });